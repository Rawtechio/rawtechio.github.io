(function() {
  var HeaderText, Quotes, lovelyPeople, typing;

  HeaderText = (function() {
    HeaderText.prototype.span = $("#✓");

    HeaderText.prototype.speed = 1;

    HeaderText.prototype.startDelay = 5;

    HeaderText.prototype.backDelay = 5000;

    HeaderText.prototype.loop = true;

    HeaderText.prototype.texts = ["a better web", "reliable applications", "future technologies"];

    function HeaderText() {
      this.span.typed({
        strings: this.texts,
        typeSpeed: this.speed,
        startDelay: this.startDelay,
        backDelay: this.backDelay,
        loop: this.loop
      });
    }

    return HeaderText;

  })();

  Quotes = (function() {
    Quotes.prototype.div = $("#❤");

    function Quotes() {
      this.blocks = this.div.find("blockquote");
      this.max = this.blocks.length - 1;
      this.index = Math.floor(Math.random() * this.max);
      console.log(this.index);
    }

    Quotes.prototype.go = function() {
      return $(this.blocks[this.index]).hide(500, (function(_this) {
        return function() {
          _this.index = _this.index === _this.max ? 0 : _this.index + 1;
          return $(_this.blocks[_this.index]).show(500);
        };
      })(this));
    };

    return Quotes;

  })();

  typing = new HeaderText;

  lovelyPeople = new Quotes;

  lovelyPeople.go();

  setInterval(function() {
    return lovelyPeople.go();
  }, 6000);

}).call(this);
