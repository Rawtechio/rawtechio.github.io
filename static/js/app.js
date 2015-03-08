(function() {
  var HeaderText, LowPolygonHeader, Quotes, lovelyPeople, lowpoly, typing;

  HeaderText = (function() {
    HeaderText.prototype.span = $("#✓");

    HeaderText.prototype.speed = 1;

    HeaderText.prototype.startDelay = 5;

    HeaderText.prototype.backDelay = 5000;

    HeaderText.prototype.loop = true;

    HeaderText.prototype.texts = ["a better web.", "reliable applications.", "future technologies."];

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

    Quotes.prototype.wrapper = $(".quotes-wrapper");

    function Quotes() {
      this.blocks = this.div.find("blockquote");
      this.max = this.blocks.length - 1;
      this.index = Math.floor(Math.random() * this.max);
      this.t = new Trianglify({
        x_gradient: Trianglify.colorbrewer.YlOrRd[9],
        y_gradient: Trianglify.colorbrewer.PuBuGn[9],
        cellsize: 50
      });
      this.pattern = this.t.generate(document.body.clientWidth, 300);
    }

    Quotes.prototype.go = function() {
      return $(this.blocks[this.index]).animate({
        opacity: 0
      }, 2000, (function(_this) {
        return function() {
          $(_this.blocks[_this.index]).hide();
          _this.index = _this.index === _this.max ? 0 : _this.index + 1;
          return $(_this.blocks[_this.index]).show().animate({
            opacity: 1
          }, 500);
        };
      })(this));
    };

    Quotes.prototype.renderpolys = function() {
      return this.wrapper.css('background-image', this.pattern.dataUrl);
    };

    return Quotes;

  })();

  LowPolygonHeader = (function() {
    LowPolygonHeader.prototype.header = $(".lowpoly");

    function LowPolygonHeader() {
      this.t = new Trianglify({
        x_gradient: Trianglify.colorbrewer.RdPu[4],
        y_gradient: Trianglify.colorbrewer.YlOrRd[9],
        cellsize: 150
      });
      this.pattern = this.t.generate(document.body.clientWidth, 350);
    }

    LowPolygonHeader.prototype.render = function() {
      return this.header.css('background-image', this.pattern.dataUrl);
    };

    LowPolygonHeader.prototype.text = function() {
      return $(".lowpoly h1").fitText(1);
    };

    return LowPolygonHeader;

  })();

  typing = new HeaderText;

  lowpoly = new LowPolygonHeader;

  lowpoly.render();

  lowpoly.text();

  lovelyPeople = new Quotes;

  lovelyPeople.renderpolys();

  lovelyPeople.go();

  setInterval(function() {
    return lovelyPeople.go();
  }, 6000);

}).call(this);
