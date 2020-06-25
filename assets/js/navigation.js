import debounce from 'lodash.debounce';

export function slideup() {
  function SlideupHandler() {
    this.options = {
      classes: {
        isOpen: 'slideup-open',
        isOpening: 'is-opening',
        isClosing: 'is-closing',
        toggleOpen: 'is-open'
      }
    };

    this.isBound = false;
    this.isOpen = false;
    this.isAnimating = false;

    this.el = {};

    this.eventTypes = {
      transitionEnd: [
        'transitionend',
        'webkitTransitionEnd',
        'oTransitionEnd',
        'MSTransitionEnd'
      ]
    };

    this.listeners = {
      open: this.onClickOpen.bind(this),
      close: this.onClickClose.bind(this),
      handleTransitionComplete: this.handleTransitionComplete.bind(this),
      transitionCompleteClose: this.transitionCompleteClose.bind(this)
    };
  }

  SlideupHandler.prototype = {
    init: function() {
      this.el = {
        $menu: document.querySelector('.sidebar'),
        $open: document.querySelector('.js-menu-open'),
        $close: document.querySelector('.js-menu-close')
      };

      window.addEventListener('resize', debounce(this.resizeHandler.bind(this), 50));
      this.resizeHandler();
    },

    /**
     * Bind or unbind mobile menu based on the cursor CSS property of the mobile toggle button.
     *
     * If the button has a cursor property != default, then the mobile menu will be bound.
     */
    resizeHandler: function() {
      if (getComputedStyle(this.el.$open)['display'] !== 'none') {
        if (!this.isBound) {
          this.bind();
        }
      } else {
        if (this.isBound) {
          this.destroy();
        }
      }
    },

    bind: function() {
      this.el.$open.addEventListener('click', this.listeners.open);
      this.el.$close.addEventListener('click', this.listeners.close);

      // Add support for Turbolinks
      document.addEventListener('turbolinks:visit', this.listeners.close);
      document.addEventListener(
        'turbolinks:visit',
        this.listeners.transitionCompleteClose
      );

      // Set menu state to hidden. This makes all child elements unfocusable.
      this.el.$menu.hidden = true;

      this.isBound = true;
    },

    unbind: function() {
      this.el.$open.removeEventListener('click', this.listeners.open);
      this.el.$close.removeEventListener('click', this.listeners.close);

      this.removeAnimationListeners();

      document.removeEventListener('turbolinks:visit', this.listeners.close);
      document.removeEventListener(
        'turbolinks:visit',
        this.listeners.transitionCompleteClose
      );

      // Remove ARIA roles
      this.el.$menu.removeAttribute('hidden');
    },

    addAnimationListeners: function() {
      // Add event listeners for different browser transition names.
      this.eventTypes.transitionEnd.forEach(
        function(transition) {
          this.el.$menu.addEventListener(
            transition,
            this.listeners.handleTransitionComplete
          );
        }.bind(this)
      );
    },

    removeAnimationListeners: function() {
      // Remove event listeners for different browser transition names.
      this.eventTypes.transitionEnd.forEach(
        function(transition) {
          this.el.$menu.removeEventListener(
            transition,
            this.listeners.handleTransitionComplete
          );
        }.bind(this)
      );
    },

    handleTransitionComplete: function(evt) {
      // Bailout if wrong target
      if (evt.target !== evt.currentTarget) {
        return true;
      }

      this.removeAnimationListeners();

      if (!this.isOpen) {
        this.transitionCompleteOpen();
      } else {
        this.transitionCompleteClose();
      }

      this.isAnimating = false;
    },

    transitionCompleteOpen: function() {
      this.isOpen = true;

      document.documentElement.classList.remove(this.options.classes.isOpening);
    },

    transitionCompleteClose: function() {
      this.isOpen = false;

      document.documentElement.classList.remove(
        this.options.classes.isClosing,
        this.options.classes.isOpen
      );
    },

    onClickOpen: function() {
      // Bailout if already animating or open.
      if (this.isAnimating || this.isOpen) {
        return true;
      }

      this.addAnimationListeners();
      this.isAnimating = true;
      this.open();
    },

    onClickClose: function() {
      // Bailout if already animating or open.
      if (this.isAnimating || !this.isOpen) {
        return true;
      }

      this.addAnimationListeners();
      this.isAnimating = true;
      this.close();
    },

    open: function() {
      document.documentElement.classList.add(this.options.classes.isOpen);
      document.documentElement.classList.add(this.options.classes.isOpening);

      this.setAriaStates(false);
    },

    close: function() {
      document.documentElement.classList.add(this.options.classes.isClosing);

      this.setAriaStates(true);
    },

    setAriaStates: function(expanded) {
      this.el.$menu.hidden = expanded;
    },

    destroy: function() {
      this.unbind();
      this.isBound = false;
    }
  };

  (new SlideupHandler()).init();
}
