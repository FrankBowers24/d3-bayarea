/*! CIC 2015-01-12 */
function RGBColor(a) {
        this.ok = !1, "#" == a.charAt(0) && (a = a.substr(1, 6)), a = a.replace(/ /g, ""), a = a.toLowerCase();
        var b = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dodgerblue: "1e90ff",
            feldspar: "d19275",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslateblue: "8470ff",
            lightslategray: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            violetred: "d02090",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        };
        for (var c in b) a == c && (a = b[c]);
        for (var d = [{
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function(a) {
                    return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])]
                }
            }, {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                example: ["#00ff00", "336699"],
                process: function(a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                example: ["#fb0", "f0f"],
                process: function(a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }], e = 0; e < d.length; e++) {
            var f = d[e].re,
                g = d[e].process,
                h = f.exec(a);
            h && (channels = g(h), this.r = channels[0], this.g = channels[1], this.b = channels[2], this.ok = !0)
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
        }, this.toHex = function() {
            var a = this.r.toString(16),
                b = this.g.toString(16),
                c = this.b.toString(16);
            return 1 == a.length && (a = "0" + a), 1 == b.length && (b = "0" + b), 1 == c.length && (c = "0" + c), "#" + a + b + c
        }, this.getHelpXML = function() {
            for (var a = new Array, c = 0; c < d.length; c++)
                for (var e = d[c].example, f = 0; f < e.length; f++) a[a.length] = e[f];
            for (var g in b) a[a.length] = g;
            var h = document.createElement("ul");
            h.setAttribute("id", "rgbcolor-examples");
            for (var c = 0; c < a.length; c++) try {
                var i = document.createElement("li"),
                    j = new RGBColor(a[c]),
                    k = document.createElement("div");
                k.style.cssText = "margin: 3px; border: 1px solid black; background:" + j.toHex() + "; color:" + j.toHex(), k.appendChild(document.createTextNode("test"));
                var l = document.createTextNode(" " + a[c] + " -> " + j.toRGB() + " -> " + j.toHex());
                i.appendChild(k), i.appendChild(l), h.appendChild(i)
            } catch (m) {}
            return h
        }
    }! function(a) {
        var b = {
                swipeTolerance: 40
            },
            c = function(b, c) {
                this.target = a(b), this.touch = c, this.startX = this.currentX = c.screenX, this.startY = this.currentY = c.screenY, this.eventType = null
            };
        c.options = {}, c.latestTap = null, c.prototype.move = function(a) {
            this.currentX = a.screenX, this.currentY = a.screenY
        }, c.prototype.process = function() {
            var a = this.currentX - this.startX,
                b = this.currentY - this.startY;
            0 == a && 0 == b ? this.checkForDoubleTap() : Math.abs(b) > c.options.swipeTolerance && Math.abs(b) > Math.abs(a) ? (this.eventType = b > 0 ? "swipedown" : "swipeup", this.target.trigger("swipe", [this])) : Math.abs(a) > c.options.swipeTolerance && (this.eventType = a > 0 ? "swiperight" : "swipeleft", this.target.trigger("swipe", [this])), this.eventType && this.target.trigger(this.eventType, [this]), this.target.trigger("touch", [this])
        }, c.prototype.checkForDoubleTap = function() {
            c.latestTap && new Date - c.latestTap < 400 && (this.eventType = "doubletap"), this.eventType || (this.eventType = "tap"), c.latestTap = new Date
        };
        var d = function(d, e) {
            c.options = a.extend(b, e), d.bind("touchstart", this.touchStart), d.bind("touchmove", this.touchMove), d.bind("touchcancel", this.touchCancel), d.bind("touchend", this.touchEnd)
        };
        d.prototype.touchStart = function(a) {
            var b = this;
            d.eachTouch(a, function(a) {
                d.touches[a.identifier] = new c(b, a)
            })
        }, d.prototype.touchMove = function(a) {
            d.eachTouch(a, function(a) {
                var b = d.touches[a.identifier];
                b && b.move(a)
            })
        }, d.prototype.touchCancel = function(a) {
            d.eachTouch(a, function(a) {
                d.purge(a, !0)
            })
        }, d.prototype.touchEnd = function(a) {
            d.eachTouch(a, function(a) {
                d.purge(a)
            })
        }, d.touches = {}, d.purge = function(a, b) {
            if (!b) {
                var c = d.touches[a.identifier];
                c && c.process()
            }
            delete d.touches[a.identifier]
        }, d.eachTouch = function(a, b) {
            for (var a = a.originalEvent, c = a.changedTouches.length, d = 0; c > d; d++) b(a.changedTouches[d])
        }, a.fn.addSwipeEvents = function(a, b) {
            return !b && jQuery.isFunction(a) && (b = a, a = null), new d(this, a), b && this.bind("touch", b), this
        }
    }(jQuery), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a) {
        var b = {
            init: function(b) {
                return this.options = a.extend({}, a.noty.defaults, b), this.options.layout = this.options.custom ? a.noty.layouts.inline : a.noty.layouts[this.options.layout], a.noty.themes[this.options.theme] ? this.options.theme = a.noty.themes[this.options.theme] : b.themeClassName = this.options.theme, delete b.layout, delete b.theme, this.options = a.extend({}, this.options, this.options.layout.options), this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random()), this.options = a.extend({}, this.options, b), this._build(), this
            },
            _build: function() {
                var b = a('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
                if (b.append(this.options.template).find(".noty_text").html(this.options.text), this.$bar = null !== this.options.layout.parent.object ? a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b) : b, this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type), this.options.buttons) {
                    this.options.closeWith = [], this.options.timeout = !1;
                    var c = a("<div/>").addClass("noty_buttons");
                    null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(c) : this.$bar.append(c);
                    var d = this;
                    a.each(this.options.buttons, function(b, c) {
                        var e = a("<button/>").addClass(c.addClass ? c.addClass : "gray").html(c.text).attr("id", c.id ? c.id : "button-" + b).appendTo(d.$bar.find(".noty_buttons")).on("click", function() {
                            a.isFunction(c.onClick) && c.onClick.call(e, d)
                        })
                    })
                }
                this.$message = this.$bar.find(".noty_message"), this.$closeButton = this.$bar.find(".noty_close"), this.$buttons = this.$bar.find(".noty_buttons"), a.noty.store[this.options.id] = this
            },
            show: function() {
                var b = this;
                return b.options.custom ? b.options.custom.find(b.options.layout.container.selector).append(b.$bar) : a(b.options.layout.container.selector).append(b.$bar), b.options.theme && b.options.theme.style && b.options.theme.style.apply(b), "function" === a.type(b.options.layout.css) ? this.options.layout.css.apply(b.$bar) : b.$bar.css(this.options.layout.css || {}), b.$bar.addClass(b.options.layout.addClass), b.options.layout.container.style.apply(a(b.options.layout.container.selector)), b.showing = !0, b.options.theme && b.options.theme.style && b.options.theme.callback.onShow.apply(this), a.inArray("click", b.options.closeWith) > -1 && b.$bar.css("cursor", "pointer").one("click", function(a) {
                    b.stopPropagation(a), b.options.callback.onCloseClick && b.options.callback.onCloseClick.apply(b), b.close()
                }), a.inArray("hover", b.options.closeWith) > -1 && b.$bar.one("mouseenter", function() {
                    b.close()
                }), a.inArray("button", b.options.closeWith) > -1 && b.$closeButton.one("click", function(a) {
                    b.stopPropagation(a), b.close()
                }), -1 == a.inArray("button", b.options.closeWith) && b.$closeButton.remove(), b.options.callback.onShow && b.options.callback.onShow.apply(b), b.$bar.animate(b.options.animation.open, b.options.animation.speed, b.options.animation.easing, function() {
                    b.options.callback.afterShow && b.options.callback.afterShow.apply(b), b.showing = !1, b.shown = !0
                }), b.options.timeout && b.$bar.delay(b.options.timeout).promise().done(function() {
                    b.close()
                }), this
            },
            close: function() {
                if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                    var b = this;
                    if (this.showing) return void b.$bar.queue(function() {
                        b.close.apply(b)
                    });
                    if (!this.shown && !this.showing) {
                        var c = [];
                        return a.each(a.noty.queue, function(a, d) {
                            d.options.id != b.options.id && c.push(d)
                        }), void(a.noty.queue = c)
                    }
                    b.$bar.addClass("i-am-closing-now"), b.options.callback.onClose && b.options.callback.onClose.apply(b), b.$bar.clearQueue().stop().animate(b.options.animation.close, b.options.animation.speed, b.options.animation.easing, function() {
                        b.options.callback.afterClose && b.options.callback.afterClose.apply(b)
                    }).promise().done(function() {
                        b.options.modal && (a.notyRenderer.setModalCount(-1), 0 == a.notyRenderer.getModalCount() && a(".noty_modal").fadeOut("fast", function() {
                            a(this).remove()
                        })), a.notyRenderer.setLayoutCountFor(b, -1), 0 == a.notyRenderer.getLayoutCountFor(b) && a(b.options.layout.container.selector).remove(), "undefined" != typeof b.$bar && null !== b.$bar && (b.$bar.remove(), b.$bar = null, b.closed = !0), delete a.noty.store[b.options.id], b.options.theme.callback && b.options.theme.callback.onClose && b.options.theme.callback.onClose.apply(b), b.options.dismissQueue || (a.noty.ontap = !0, a.notyRenderer.render()), b.options.maxVisible > 0 && b.options.dismissQueue && a.notyRenderer.render()
                    })
                }
            },
            setText: function(a) {
                return this.closed || (this.options.text = a, this.$bar.find(".noty_text").html(a)), this
            },
            setType: function(a) {
                return this.closed || (this.options.type = a, this.options.theme.style.apply(this), this.options.theme.callback.onShow.apply(this)), this
            },
            setTimeout: function(a) {
                if (!this.closed) {
                    var b = this;
                    this.options.timeout = a, b.$bar.delay(b.options.timeout).promise().done(function() {
                        b.close()
                    })
                }
                return this
            },
            stopPropagation: function(a) {
                a = a || window.event, "undefined" != typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
            },
            closed: !1,
            showing: !1,
            shown: !1
        };
        a.notyRenderer = {}, a.notyRenderer.init = function(c) {
            var d = Object.create(b).init(c);
            return d.options.killer && a.noty.closeAll(), d.options.force ? a.noty.queue.unshift(d) : a.noty.queue.push(d), a.notyRenderer.render(), "object" == a.noty.returns ? d : d.options.id
        }, a.notyRenderer.render = function() {
            var b = a.noty.queue[0];
            "object" === a.type(b) ? b.options.dismissQueue ? b.options.maxVisible > 0 ? a(b.options.layout.container.selector + " li").length < b.options.maxVisible && a.notyRenderer.show(a.noty.queue.shift()) : a.notyRenderer.show(a.noty.queue.shift()) : a.noty.ontap && (a.notyRenderer.show(a.noty.queue.shift()), a.noty.ontap = !1) : a.noty.ontap = !0
        }, a.notyRenderer.show = function(b) {
            b.options.modal && (a.notyRenderer.createModalFor(b), a.notyRenderer.setModalCount(1)), b.options.custom ? 0 == b.options.custom.find(b.options.layout.container.selector).length ? b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")) : b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new") : 0 == a(b.options.layout.container.selector).length ? a("body").append(a(b.options.layout.container.object).addClass("i-am-new")) : a(b.options.layout.container.selector).removeClass("i-am-new"), a.notyRenderer.setLayoutCountFor(b, 1), b.show()
        }, a.notyRenderer.createModalFor = function(b) {
            if (0 == a(".noty_modal").length) {
                var c = a("<div/>").addClass("noty_modal").addClass(b.options.theme).data("noty_modal_count", 0);
                b.options.theme.modal && b.options.theme.modal.css && c.css(b.options.theme.modal.css), c.prependTo(a("body")).fadeIn("fast")
            }
        }, a.notyRenderer.getLayoutCountFor = function(b) {
            return a(b.options.layout.container.selector).data("noty_layout_count") || 0
        }, a.notyRenderer.setLayoutCountFor = function(b, c) {
            return a(b.options.layout.container.selector).data("noty_layout_count", a.notyRenderer.getLayoutCountFor(b) + c)
        }, a.notyRenderer.getModalCount = function() {
            return a(".noty_modal").data("noty_modal_count") || 0
        }, a.notyRenderer.setModalCount = function(b) {
            return a(".noty_modal").data("noty_modal_count", a.notyRenderer.getModalCount() + b)
        }, a.fn.noty = function(b) {
            return b.custom = a(this), a.notyRenderer.init(b)
        }, a.noty = {}, a.noty.queue = [], a.noty.ontap = !0, a.noty.layouts = {}, a.noty.themes = {}, a.noty.returns = "object", a.noty.store = {}, a.noty.get = function(b) {
            return a.noty.store.hasOwnProperty(b) ? a.noty.store[b] : !1
        }, a.noty.close = function(b) {
            return a.noty.get(b) ? a.noty.get(b).close() : !1
        }, a.noty.setText = function(b, c) {
            return a.noty.get(b) ? a.noty.get(b).setText(c) : !1
        }, a.noty.setType = function(b, c) {
            return a.noty.get(b) ? a.noty.get(b).setType(c) : !1
        }, a.noty.clearQueue = function() {
            a.noty.queue = []
        }, a.noty.closeAll = function() {
            a.noty.clearQueue(), a.each(a.noty.store, function(a, b) {
                b.close()
            })
        };
        var c = window.alert;
        a.noty.consumeAlert = function(b) {
            window.alert = function(c) {
                b ? b.text = c : b = {
                    text: c
                }, a.notyRenderer.init(b)
            }
        }, a.noty.stopConsumeAlert = function() {
            window.alert = c
        }, a.noty.defaults = {
            layout: "top",
            theme: "defaultTheme",
            type: "alert",
            text: "",
            dismissQueue: !0,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {
                    height: "toggle"
                },
                close: {
                    height: "toggle"
                },
                easing: "swing",
                speed: 500
            },
            timeout: !1,
            force: !1,
            modal: !1,
            maxVisible: 5,
            killer: !1,
            closeWith: ["click"],
            callback: {
                onShow: function() {},
                afterShow: function() {},
                onClose: function() {},
                afterClose: function() {},
                onCloseClick: function() {}
            },
            buttons: !1
        }, a(window).on("resize", function() {
            a.each(a.noty.layouts, function(b, c) {
                c.container.style.apply(a(c.container.selector))
            })
        })
    }(jQuery), window.noty = function(a) {
        return jQuery.notyRenderer.init(a)
    },
    function(a) {
        a.noty.layouts.bottom = {
            name: "bottom",
            options: {},
            container: {
                object: '<ul id="noty_bottom_layout_container" />',
                selector: "ul#noty_bottom_layout_container",
                style: function() {
                    a(this).css({
                        bottom: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.bottomCenter = {
            name: "bottomCenter",
            options: {},
            container: {
                object: '<ul id="noty_bottomCenter_layout_container" />',
                selector: "ul#noty_bottomCenter_layout_container",
                style: function() {
                    a(this).css({
                        bottom: 20,
                        left: 0,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), a(this).css({
                        left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.bottomLeft = {
            name: "bottomLeft",
            options: {},
            container: {
                object: '<ul id="noty_bottomLeft_layout_container" />',
                selector: "ul#noty_bottomLeft_layout_container",
                style: function() {
                    a(this).css({
                        bottom: 20,
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && a(this).css({
                        left: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.bottomRight = {
            name: "bottomRight",
            options: {},
            container: {
                object: '<ul id="noty_bottomRight_layout_container" />',
                selector: "ul#noty_bottomRight_layout_container",
                style: function() {
                    a(this).css({
                        bottom: 20,
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && a(this).css({
                        right: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.center = {
            name: "center",
            options: {},
            container: {
                object: '<ul id="noty_center_layout_container" />',
                selector: "ul#noty_center_layout_container",
                style: function() {
                    a(this).css({
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var b = a(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    a("body").append(b), b.find(".i-am-closing-now").remove(), b.find("li").css("display", "block");
                    var c = b.height();
                    b.remove(), a(this).hasClass("i-am-new") ? a(this).css({
                        left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                        top: (a(window).height() - c) / 2 + "px"
                    }) : a(this).animate({
                        left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                        top: (a(window).height() - c) / 2 + "px"
                    }, 500)
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.centerLeft = {
            name: "centerLeft",
            options: {},
            container: {
                object: '<ul id="noty_centerLeft_layout_container" />',
                selector: "ul#noty_centerLeft_layout_container",
                style: function() {
                    a(this).css({
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var b = a(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    a("body").append(b), b.find(".i-am-closing-now").remove(), b.find("li").css("display", "block");
                    var c = b.height();
                    b.remove(), a(this).hasClass("i-am-new") ? a(this).css({
                        top: (a(window).height() - c) / 2 + "px"
                    }) : a(this).animate({
                        top: (a(window).height() - c) / 2 + "px"
                    }, 500), window.innerWidth < 600 && a(this).css({
                        left: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.centerRight = {
            name: "centerRight",
            options: {},
            container: {
                object: '<ul id="noty_centerRight_layout_container" />',
                selector: "ul#noty_centerRight_layout_container",
                style: function() {
                    a(this).css({
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var b = a(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    a("body").append(b), b.find(".i-am-closing-now").remove(), b.find("li").css("display", "block");
                    var c = b.height();
                    b.remove(), a(this).hasClass("i-am-new") ? a(this).css({
                        top: (a(window).height() - c) / 2 + "px"
                    }) : a(this).animate({
                        top: (a(window).height() - c) / 2 + "px"
                    }, 500), window.innerWidth < 600 && a(this).css({
                        right: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.inline = {
            name: "inline",
            options: {},
            container: {
                object: '<ul class="noty_inline_layout_container" />',
                selector: "ul.noty_inline_layout_container",
                style: function() {
                    a(this).css({
                        width: "100%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.top = {
            name: "top",
            options: {},
            container: {
                object: '<ul id="noty_top_layout_container" />',
                selector: "ul#noty_top_layout_container",
                style: function() {
                    a(this).css({
                        top: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.topCenter = {
            name: "topCenter",
            options: {},
            container: {
                object: '<ul id="noty_topCenter_layout_container" />',
                selector: "ul#noty_topCenter_layout_container",
                style: function() {
                    a(this).css({
                        top: 20,
                        left: 0,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), a(this).css({
                        left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.topLeft = {
            name: "topLeft",
            options: {},
            container: {
                object: '<ul id="noty_topLeft_layout_container" />',
                selector: "ul#noty_topLeft_layout_container",
                style: function() {
                    a(this).css({
                        top: 20,
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && a(this).css({
                        left: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.layouts.topRight = {
            name: "topRight",
            options: {},
            container: {
                object: '<ul id="noty_topRight_layout_container" />',
                selector: "ul#noty_topRight_layout_container",
                style: function() {
                    a(this).css({
                        top: 20,
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && a(this).css({
                        right: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(a) {
        a.noty.themes.defaultTheme = {
            name: "defaultTheme",
            helpers: {
                borderFix: function() {
                    if (this.options.dismissQueue) {
                        var b = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                        switch (this.options.layout.name) {
                            case "top":
                                a(b).css({
                                    borderRadius: "0px 0px 0px 0px"
                                }), a(b).last().css({
                                    borderRadius: "0px 0px 5px 5px"
                                });
                                break;
                            case "topCenter":
                            case "topLeft":
                            case "topRight":
                            case "bottomCenter":
                            case "bottomLeft":
                            case "bottomRight":
                            case "center":
                            case "centerLeft":
                            case "centerRight":
                            case "inline":
                                a(b).css({
                                    borderRadius: "0px 0px 0px 0px"
                                }), a(b).first().css({
                                    "border-top-left-radius": "5px",
                                    "border-top-right-radius": "5px"
                                }), a(b).last().css({
                                    "border-bottom-left-radius": "5px",
                                    "border-bottom-right-radius": "5px"
                                });
                                break;
                            case "bottom":
                                a(b).css({
                                    borderRadius: "0px 0px 0px 0px"
                                }), a(b).first().css({
                                    borderRadius: "5px 5px 0px 0px"
                                })
                        }
                    }
                }
            },
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0
                }
            },
            style: function() {
                switch (this.$bar.css({
                    overflow: "hidden",
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"
                }), this.$message.css({
                    fontSize: "13px",
                    lineHeight: "16px",
                    textAlign: "center",
                    padding: "8px 10px 9px",
                    width: "auto",
                    position: "relative"
                }), this.$closeButton.css({
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 10,
                    height: 10,
                    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",
                    display: "none",
                    cursor: "pointer"
                }), this.$buttons.css({
                    padding: 5,
                    textAlign: "right",
                    borderTop: "1px solid #ccc",
                    backgroundColor: "#fff"
                }), this.$buttons.find("button").css({
                    marginLeft: 5
                }), this.$buttons.find("button:first").css({
                    marginLeft: 0
                }), this.$bar.on({
                    mouseenter: function() {
                        a(this).find(".noty_close").stop().fadeTo("normal", 1)
                    },
                    mouseleave: function() {
                        a(this).find(".noty_close").stop().fadeTo("normal", 0)
                    }
                }), this.options.layout.name) {
                    case "top":
                        this.$bar.css({
                            borderRadius: "0px 0px 5px 5px",
                            borderBottom: "2px solid #eee",
                            borderLeft: "2px solid #eee",
                            borderRight: "2px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        });
                        break;
                    case "topCenter":
                    case "center":
                    case "bottomCenter":
                    case "inline":
                        this.$bar.css({
                            borderRadius: "5px",
                            border: "1px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }), this.$message.css({
                            fontSize: "13px",
                            textAlign: "center"
                        });
                        break;
                    case "topLeft":
                    case "topRight":
                    case "bottomLeft":
                    case "bottomRight":
                    case "centerLeft":
                    case "centerRight":
                        this.$bar.css({
                            borderRadius: "5px",
                            border: "1px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }), this.$message.css({
                            fontSize: "13px",
                            textAlign: "left"
                        });
                        break;
                    case "bottom":
                        this.$bar.css({
                            borderRadius: "5px 5px 0px 0px",
                            borderTop: "2px solid #eee",
                            borderLeft: "2px solid #eee",
                            borderRight: "2px solid #eee",
                            boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                        });
                        break;
                    default:
                        this.$bar.css({
                            border: "2px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        })
                }
                switch (this.options.type) {
                    case "alert":
                    case "notification":
                        this.$bar.css({
                            backgroundColor: "#FFF",
                            borderColor: "#CCC",
                            color: "#444"
                        });
                        break;
                    case "warning":
                        this.$bar.css({
                            backgroundColor: "#FFEAA8",
                            borderColor: "#FFC237",
                            color: "#826200"
                        }), this.$buttons.css({
                            borderTop: "1px solid #FFC237"
                        });
                        break;
                    case "error":
                        this.$bar.css({
                            backgroundColor: "red",
                            borderColor: "darkred",
                            color: "#FFF"
                        }), this.$message.css({
                            fontWeight: "bold"
                        }), this.$buttons.css({
                            borderTop: "1px solid darkred"
                        });
                        break;
                    case "information":
                        this.$bar.css({
                            backgroundColor: "#57B7E2",
                            borderColor: "#0B90C4",
                            color: "#FFF"
                        }), this.$buttons.css({
                            borderTop: "1px solid #0B90C4"
                        });
                        break;
                    case "success":
                        this.$bar.css({
                            backgroundColor: "lightgreen",
                            borderColor: "#50C24E",
                            color: "darkgreen"
                        }), this.$buttons.css({
                            borderTop: "1px solid #50C24E"
                        });
                        break;
                    default:
                        this.$bar.css({
                            backgroundColor: "#FFF",
                            borderColor: "#CCC",
                            color: "#444"
                        })
                }
            },
            callback: {
                onShow: function() {
                    a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
                },
                onClose: function() {
                    a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
                }
            }
        }
    }(jQuery),
    function(a) {
        function b(b) {
            if (i || b) i && b && (a(document).unbind(".smartmenus_mouse"), i = !1);
            else {
                var d = !0,
                    e = null;
                a(document).bind({
                    "mousemove.smartmenus_mouse": function(b) {
                        var f = {
                            x: b.pageX,
                            y: b.pageY,
                            timeStamp: (new Date).getTime()
                        };
                        if (e) {
                            var g = Math.abs(e.x - f.x),
                                i = Math.abs(e.y - f.y);
                            if ((g > 0 || i > 0) && 2 >= g && 2 >= i && f.timeStamp - e.timeStamp <= 300 && (h = !0, d)) {
                                var j = a(b.target).closest("a");
                                j.is("a") && a.each(c, function() {
                                    return a.contains(this.$root[0], j[0]) ? (this.itemEnter({
                                        currentTarget: j[0]
                                    }), !1) : void 0
                                }), d = !1
                            }
                        }
                        e = f
                    },
                    "touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse": function(a) {
                        /^(4|mouse)$/.test(a.originalEvent.pointerType) || (h = !1)
                    }
                }), i = !0
            }
        }
        var c = [],
            d = !!window.createPopup,
            e = d && !document.defaultView,
            f = d && !document.querySelector,
            g = d && "undefined" == typeof document.documentElement.currentStyle.minWidth,
            h = !1,
            i = !1;
        a.SmartMenus = function(b, c) {
            this.$root = a(b), this.opts = c, this.rootId = "", this.$subArrow = null, this.subMenus = [], this.activatedItems = [], this.visibleSubMenus = [], this.showTimeout = 0, this.hideTimeout = 0, this.scrollTimeout = 0, this.clickActivated = !1, this.zIndexInc = 0, this.$firstLink = null, this.$firstSub = null, this.disabled = !1, this.$disableOverlay = null, this.init()
        }, a.extend(a.SmartMenus, {
            hideAll: function() {
                a.each(c, function() {
                    this.menuHideAll()
                })
            },
            destroy: function() {
                for (; c.length;) c[0].destroy();
                b(!0)
            },
            prototype: {
                init: function(d) {
                    var e = this;
                    if (!d) {
                        c.push(this), this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, ""), this.$root.hasClass("sm-rtl") && (this.opts.rightToLeftSubMenus = !0), this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).bind({
                            "mouseover.smartmenus focusin.smartmenus": a.proxy(this.rootOver, this),
                            "mouseout.smartmenus focusout.smartmenus": a.proxy(this.rootOut, this)
                        }).delegate("a", {
                            "mouseenter.smartmenus": a.proxy(this.itemEnter, this),
                            "mouseleave.smartmenus": a.proxy(this.itemLeave, this),
                            "mousedown.smartmenus": a.proxy(this.itemDown, this),
                            "focus.smartmenus": a.proxy(this.itemFocus, this),
                            "blur.smartmenus": a.proxy(this.itemBlur, this),
                            "click.smartmenus": a.proxy(this.itemClick, this),
                            "touchend.smartmenus": a.proxy(this.itemTouchEnd, this)
                        });
                        var f = ".smartmenus" + this.rootId;
                        this.opts.hideOnClick && a(document).bind("touchstart" + f, a.proxy(this.docTouchStart, this)).bind("touchmove" + f, a.proxy(this.docTouchMove, this)).bind("touchend" + f, a.proxy(this.docTouchEnd, this)).bind("click" + f, a.proxy(this.docClick, this)), a(window).bind("resize" + f + " orientationchange" + f, a.proxy(this.winResize, this)), this.opts.subIndicators && (this.$subArrow = a("<span/>").addClass("sub-arrow"), this.opts.subIndicatorsText && this.$subArrow.html(this.opts.subIndicatorsText)), b()
                    }
                    if (this.$firstSub = this.$root.find("ul").each(function() {
                            e.menuInit(a(this))
                        }).eq(0), this.$firstLink = this.$root.find("a").eq(0), this.opts.markCurrentItem) {
                        var g = /(index|default)\.[^#\?\/]*/i,
                            h = /#.*/,
                            i = window.location.href.replace(g, ""),
                            j = i.replace(h, "");
                        this.$root.find("a").each(function() {
                            var b = this.href.replace(g, ""),
                                c = a(this);
                            (b == i || b == j) && (c.addClass("current"), e.opts.markCurrentTree && c.parents("li").each(function() {
                                var b = a(this);
                                b.dataSM("sub") && b.children("a").addClass("current")
                            }))
                        })
                    }
                },
                destroy: function() {
                    this.menuHideAll(), this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(".smartmenus").undelegate(".smartmenus");
                    var b = ".smartmenus" + this.rootId;
                    a(document).unbind(b), a(window).unbind(b), this.opts.subIndicators && (this.$subArrow = null);
                    var d = this;
                    a.each(this.subMenus, function() {
                        this.hasClass("mega-menu") && this.find("ul").removeDataSM("in-mega"), this.dataSM("shown-before") && (f && this.children().css({
                            styleFloat: "",
                            width: ""
                        }), (d.opts.subMenusMinWidth || d.opts.subMenusMaxWidth) && (g ? this.css({
                            width: "",
                            overflowX: "",
                            overflowY: ""
                        }).children().children("a").css("white-space", "") : this.css({
                            width: "",
                            minWidth: "",
                            maxWidth: ""
                        }).removeClass("sm-nowrap")), this.dataSM("scroll-arrows") && this.dataSM("scroll-arrows").remove(), this.css({
                            zIndex: "",
                            top: "",
                            left: "",
                            marginLeft: "",
                            marginTop: "",
                            display: ""
                        })), d.opts.subIndicators && this.dataSM("parent-a").removeClass("has-submenu").children("span.sub-arrow").remove(), this.removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").parent().removeDataSM("sub")
                    }), this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"), this.$root = null, this.$firstLink = null, this.$firstSub = null, this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), c.splice(a.inArray(this, c), 1)
                },
                disable: function(b) {
                    if (!this.disabled) {
                        if (this.menuHideAll(), !b && !this.opts.isPopup && this.$root.is(":visible")) {
                            var c = this.$root.offset();
                            this.$disableOverlay = a('<div class="sm-jquery-disable-overlay"/>').css({
                                position: "absolute",
                                top: c.top,
                                left: c.left,
                                width: this.$root.outerWidth(),
                                height: this.$root.outerHeight(),
                                zIndex: this.getStartZIndex() + 1,
                                opacity: 0
                            }).appendTo(document.body)
                        }
                        this.disabled = !0
                    }
                },
                docClick: function(b) {
                    (this.visibleSubMenus.length && !a.contains(this.$root[0], b.target) || a(b.target).is("a")) && this.menuHideAll()
                },
                docTouchEnd: function() {
                    if (this.lastTouch) {
                        if (!(!this.visibleSubMenus.length || void 0 !== this.lastTouch.x2 && this.lastTouch.x1 != this.lastTouch.x2 || void 0 !== this.lastTouch.y2 && this.lastTouch.y1 != this.lastTouch.y2 || this.lastTouch.target && a.contains(this.$root[0], this.lastTouch.target))) {
                            this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                            var b = this;
                            this.hideTimeout = setTimeout(function() {
                                b.menuHideAll()
                            }, 350)
                        }
                        this.lastTouch = null
                    }
                },
                docTouchMove: function(a) {
                    if (this.lastTouch) {
                        var b = a.originalEvent.touches[0];
                        this.lastTouch.x2 = b.pageX, this.lastTouch.y2 = b.pageY
                    }
                },
                docTouchStart: function(a) {
                    var b = a.originalEvent.touches[0];
                    this.lastTouch = {
                        x1: b.pageX,
                        y1: b.pageY,
                        target: b.target
                    }
                },
                enable: function() {
                    this.disabled && (this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), this.disabled = !1)
                },
                getHeight: function(a) {
                    return this.getOffset(a, !0)
                },
                getOffset: function(a, b) {
                    var c;
                    "none" == a.css("display") && (c = {
                        position: a[0].style.position,
                        visibility: a[0].style.visibility
                    }, a.css({
                        position: "absolute",
                        visibility: "hidden"
                    }).show());
                    var d = a[0].ownerDocument.defaultView,
                        e = d && d.getComputedStyle && d.getComputedStyle(a[0], null),
                        f = e && parseFloat(e[b ? "height" : "width"]);
                    return f ? f += parseFloat(e[b ? "paddingTop" : "paddingLeft"]) + parseFloat(e[b ? "paddingBottom" : "paddingRight"]) + parseInt(e[b ? "borderTopWidth" : "borderLeftWidth"]) + parseInt(e[b ? "borderBottomWidth" : "borderRightWidth"]) : f = b ? a[0].offsetHeight : a[0].offsetWidth, c && a.hide().css(c), f
                },
                getWidth: function(a) {
                    return this.getOffset(a)
                },
                getStartZIndex: function() {
                    var a = parseInt(this.$root.css("z-index"));
                    return isNaN(a) ? 1 : a
                },
                handleEvents: function() {
                    return !this.disabled && this.isCSSOn()
                },
                handleItemEvents: function(a) {
                    return this.handleEvents() && !this.isLinkInMegaMenu(a)
                },
                isCollapsible: function() {
                    return "static" == this.$firstSub.css("position")
                },
                isCSSOn: function() {
                    return "block" == this.$firstLink.css("display")
                },
                isFixed: function() {
                    return "fixed" == this.$root.css("position")
                },
                isLinkInMegaMenu: function(a) {
                    return !a.parent().parent().dataSM("level")
                },
                isTouchMode: function() {
                    return !h || this.isCollapsible()
                },
                itemActivate: function(b) {
                    var c = b.parent(),
                        d = c.parent(),
                        e = d.dataSM("level");
                    if (e > 1 && (!this.activatedItems[e - 2] || this.activatedItems[e - 2][0] != d.dataSM("parent-a")[0])) {
                        var f = this;
                        a(d.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(d).each(function() {
                            f.itemActivate(a(this).dataSM("parent-a"))
                        })
                    }
                    if (this.visibleSubMenus.length > e)
                        for (var g = this.visibleSubMenus.length - 1, h = this.activatedItems[e - 1] && this.activatedItems[e - 1][0] == b[0] ? e : e - 1; g > h; g--) this.menuHide(this.visibleSubMenus[g]);
                    if (this.activatedItems[e - 1] = b, this.visibleSubMenus[e - 1] = d, this.$root.triggerHandler("activate.smapi", b[0]) !== !1) {
                        var i = c.dataSM("sub");
                        i && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated) && this.menuShow(i)
                    }
                },
                itemBlur: function(b) {
                    var c = a(b.currentTarget);
                    this.handleItemEvents(c) && this.$root.triggerHandler("blur.smapi", c[0])
                },
                itemClick: function(b) {
                    var c = a(b.currentTarget);
                    if (this.handleItemEvents(c)) {
                        if (c.removeDataSM("mousedown"), this.$root.triggerHandler("click.smapi", c[0]) === !1) return !1;
                        var d = c.parent().dataSM("sub");
                        if (this.isTouchMode()) {
                            if (c.dataSM("href") && c.attr("href", c.dataSM("href")).removeDataSM("href"), d && (!d.dataSM("shown-before") || !d.is(":visible")) && (this.itemActivate(c), d.is(":visible"))) return !1
                        } else if (this.opts.showOnClick && 1 == c.parent().parent().dataSM("level") && d) return this.clickActivated = !0, this.menuShow(d), !1;
                        return c.hasClass("disabled") ? !1 : this.$root.triggerHandler("select.smapi", c[0]) === !1 ? !1 : void 0
                    }
                },
                itemDown: function(b) {
                    var c = a(b.currentTarget);
                    this.handleItemEvents(c) && c.dataSM("mousedown", !0)
                },
                itemEnter: function(b) {
                    var c = a(b.currentTarget);
                    if (this.handleItemEvents(c)) {
                        if (!this.isTouchMode()) {
                            this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                            var d = this;
                            this.showTimeout = setTimeout(function() {
                                d.itemActivate(c)
                            }, this.opts.showOnClick && 1 == c.parent().parent().dataSM("level") ? 1 : this.opts.showTimeout)
                        }
                        this.$root.triggerHandler("mouseenter.smapi", c[0])
                    }
                },
                itemFocus: function(b) {
                    var c = a(b.currentTarget);
                    this.handleItemEvents(c) && (this.isTouchMode() && c.dataSM("mousedown") || this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0] == c[0] || this.itemActivate(c), this.$root.triggerHandler("focus.smapi", c[0]))
                },
                itemLeave: function(b) {
                    var c = a(b.currentTarget);
                    this.handleItemEvents(c) && (this.isTouchMode() || (c[0].blur && c[0].blur(), this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0)), c.removeDataSM("mousedown"), this.$root.triggerHandler("mouseleave.smapi", c[0]))
                },
                itemTouchEnd: function(b) {
                    var c = a(b.currentTarget);
                    if (this.handleItemEvents(c)) {
                        var d = c.parent().dataSM("sub");
                        "#" === c.attr("href").charAt(0) || !d || d.dataSM("shown-before") && d.is(":visible") || (c.dataSM("href", c.attr("href")), c.attr("href", "#"))
                    }
                },
                menuFixLayout: function(a) {
                    a.dataSM("shown-before") || (a.hide().dataSM("shown-before", !0), f && a.children().css({
                        styleFloat: "left",
                        width: "100%"
                    }))
                },
                menuHide: function(a) {
                    if (this.$root.triggerHandler("beforehide.smapi", a[0]) !== !1 && (a.stop(!0, !0), a.is(":visible"))) {
                        var b = function() {
                            e ? a.parent().css("z-index", "") : a.css("z-index", "")
                        };
                        this.isCollapsible() ? this.opts.collapsibleHideFunction ? this.opts.collapsibleHideFunction.call(this, a, b) : a.hide(this.opts.collapsibleHideDuration, b) : this.opts.hideFunction ? this.opts.hideFunction.call(this, a, b) : a.hide(this.opts.hideDuration, b), a.dataSM("ie-shim") && a.dataSM("ie-shim").remove(), a.dataSM("scroll") && a.unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide(), a.dataSM("parent-a").removeClass("highlighted");
                        var c = a.dataSM("level");
                        this.activatedItems.splice(c - 1, 1), this.visibleSubMenus.splice(c - 1, 1), this.$root.triggerHandler("hide.smapi", a[0])
                    }
                },
                menuHideAll: function() {
                    this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                    for (var a = this.visibleSubMenus.length - 1; a > 0; a--) this.menuHide(this.visibleSubMenus[a]);
                    this.opts.isPopup && (this.$root.stop(!0, !0), this.$root.is(":visible") && (this.opts.hideFunction ? this.opts.hideFunction.call(this, this.$root) : this.$root.hide(this.opts.hideDuration), this.$root.dataSM("ie-shim") && this.$root.dataSM("ie-shim").remove())), this.activatedItems = [], this.visibleSubMenus = [], this.clickActivated = !1, this.zIndexInc = 0
                },
                menuIframeShim: function(b) {
                    d && this.opts.overlapControlsInIE && !b.dataSM("ie-shim") && b.dataSM("ie-shim", a("<iframe/>").attr({
                        src: "javascript:0",
                        tabindex: -9
                    }).css({
                        position: "absolute",
                        top: "auto",
                        left: "0",
                        opacity: 0,
                        border: "0"
                    }))
                },
                menuInit: function(a) {
                    if (!a.dataSM("in-mega")) {
                        this.subMenus.push(a), a.hasClass("mega-menu") && a.find("ul").dataSM("in-mega", !0);
                        for (var b = 2, c = a[0];
                            (c = c.parentNode.parentNode) != this.$root[0];) b++;
                        a.dataSM("parent-a", a.prevAll("a").eq(-1)).dataSM("level", b).parent().dataSM("sub", a), this.opts.subIndicators && a.dataSM("parent-a").addClass("has-submenu")[this.opts.subIndicatorsPos](this.$subArrow.clone())
                    }
                },
                menuPosition: function(b) {
                    var c, d, e = b.dataSM("parent-a"),
                        f = b.parent().parent(),
                        g = b.dataSM("level"),
                        i = this.getWidth(b),
                        j = this.getHeight(b),
                        k = e.offset(),
                        l = k.left,
                        m = k.top,
                        n = this.getWidth(e),
                        o = this.getHeight(e),
                        p = a(window),
                        q = p.scrollLeft(),
                        r = p.scrollTop(),
                        s = p.width(),
                        t = p.height(),
                        u = f.hasClass("sm") && !f.hasClass("sm-vertical"),
                        v = 2 == g ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
                        w = 2 == g ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY;
                    if (u ? (c = this.opts.rightToLeftSubMenus ? n - i - v : v, d = this.opts.bottomToTopSubMenus ? -j - w : o + w) : (c = this.opts.rightToLeftSubMenus ? v - i : n - v, d = this.opts.bottomToTopSubMenus ? o - w - j : w), this.opts.keepInViewport && !this.isCollapsible()) {
                        this.isFixed() && (l -= q, m -= r, q = r = 0);
                        var x = l + c,
                            y = m + d;
                        if (this.opts.rightToLeftSubMenus && q > x ? c = u ? q - x + c : n - v : !this.opts.rightToLeftSubMenus && x + i > q + s && (c = u ? q + s - i - x + c : v - i), u || (t > j && y + j > r + t ? d += r + t - j - y : (j >= t || r > y) && (d += r - y)), h && (u && (y + j > r + t + .49 || r > y) || !u && j > t + .49)) {
                            var z = this;
                            b.dataSM("scroll-arrows") || b.dataSM("scroll-arrows", a([a('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], a('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({
                                mouseenter: function() {
                                    z.menuScroll(b, a(this).hasClass("scroll-up"))
                                },
                                mouseleave: function(a) {
                                    z.menuScrollStop(b), z.menuScrollOut(b, a)
                                },
                                "mousewheel DOMMouseScroll": function(a) {
                                    a.preventDefault()
                                }
                            }).insertAfter(b));
                            var A = r - (m + o);
                            b.dataSM("scroll", {
                                vportY: A,
                                subH: j,
                                winH: t,
                                step: 1
                            }).bind({
                                "mouseover.smartmenus_scroll": function(a) {
                                    z.menuScrollOver(b, a)
                                },
                                "mouseout.smartmenus_scroll": function(a) {
                                    z.menuScrollOut(b, a)
                                },
                                "mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll": function(a) {
                                    z.menuScrollMousewheel(b, a)
                                }
                            }).dataSM("scroll-arrows").css({
                                top: "auto",
                                left: "0",
                                marginLeft: c + (parseInt(b.css("border-left-width")) || 0),
                                width: this.getWidth(b) - (parseInt(b.css("border-left-width")) || 0) - (parseInt(b.css("border-right-width")) || 0),
                                zIndex: this.getStartZIndex() + this.zIndexInc
                            }).eq(0).css("margin-top", A).end().eq(1).css("margin-top", A + t - this.getHeight(b.dataSM("scroll-arrows").eq(1))).end().eq(u && this.opts.bottomToTopSubMenus ? 0 : 1).show()
                        }
                    }
                    b.css({
                        top: "auto",
                        left: "0",
                        marginLeft: c,
                        marginTop: d - o
                    }), this.menuIframeShim(b), b.dataSM("ie-shim") && b.dataSM("ie-shim").css({
                        zIndex: b.css("z-index"),
                        width: i,
                        height: j,
                        marginLeft: c,
                        marginTop: d - o
                    })
                },
                menuScroll: function(a, b, c) {
                    var d = parseFloat(a.css("margin-top")),
                        e = a.dataSM("scroll"),
                        f = e.vportY + (b ? 0 : e.winH - e.subH),
                        g = c || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(a.dataSM("scroll").step);
                    if (a.add(a.dataSM("ie-shim")).css("margin-top", Math.abs(f - d) > g ? d + (b ? g : -g) : f), d = parseFloat(a.css("margin-top")), (b && d + e.subH > e.vportY + e.winH || !b && d < e.vportY) && a.dataSM("scroll-arrows").eq(b ? 1 : 0).show(), !c && this.opts.scrollAccelerate && a.dataSM("scroll").step < this.opts.scrollStep && (a.dataSM("scroll").step += .5), Math.abs(d - f) < 1) a.dataSM("scroll-arrows").eq(b ? 0 : 1).hide(), a.dataSM("scroll").step = 1;
                    else if (!c) {
                        var h = this;
                        this.scrollTimeout = setTimeout(function() {
                            h.menuScroll(a, b)
                        }, this.opts.scrollInterval)
                    }
                },
                menuScrollMousewheel: function(b, c) {
                    for (var d = a(c.target).closest("ul"); d.dataSM("in-mega");) d = d.parent().closest("ul");
                    if (d[0] == b[0]) {
                        var e = (c.originalEvent.wheelDelta || -c.originalEvent.detail) > 0;
                        b.dataSM("scroll-arrows").eq(e ? 0 : 1).is(":visible") && this.menuScroll(b, e, !0)
                    }
                    c.preventDefault()
                },
                menuScrollOut: function(b, c) {
                    for (var d = /^scroll-(up|down)/, e = a(c.relatedTarget).closest("ul"); e.dataSM("in-mega");) e = e.parent().closest("ul");
                    d.test((c.relatedTarget || "").className) || (b[0] == c.relatedTarget || a.contains(b[0], c.relatedTarget)) && e[0] == b[0] || b.dataSM("scroll-arrows").css("visibility", "hidden")
                },
                menuScrollOver: function(b, c) {
                    for (var d = /^scroll-(up|down)/, e = a(c.target).closest("ul"); e.dataSM("in-mega");) e = e.parent().closest("ul");
                    d.test(c.target.className) || e[0] != b[0] || b.dataSM("scroll-arrows").css("visibility", "visible")
                },
                menuScrollStop: function(a) {
                    this.scrollTimeout && (clearTimeout(this.scrollTimeout), this.scrollTimeout = 0, a.dataSM("scroll").step = 1)
                },
                menuShow: function(a) {
                    if ((a.dataSM("beforefirstshowfired") || (a.dataSM("beforefirstshowfired", !0), this.$root.triggerHandler("beforefirstshow.smapi", a[0]) !== !1)) && this.$root.triggerHandler("beforeshow.smapi", a[0]) !== !1 && (this.menuFixLayout(a), a.stop(!0, !0), !a.is(":visible"))) {
                        var b = this.getStartZIndex() + ++this.zIndexInc;
                        if (e ? a.parent().css("z-index", b) : a.css("z-index", b), (this.opts.keepHighlighted || this.isCollapsible()) && a.dataSM("parent-a").addClass("highlighted"), this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth)
                            if (f) {
                                if (a.children().css("styleFloat", "none"), g ? a.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth : 1).children().children("a").css("white-space", "nowrap") : (a.css({
                                        width: "auto",
                                        minWidth: "",
                                        maxWidth: ""
                                    }).addClass("sm-nowrap"), this.opts.subMenusMinWidth && a.css("min-width", this.opts.subMenusMinWidth)), this.opts.subMenusMaxWidth) {
                                    var c = a.width();
                                    if (g) {
                                        var d = a.css({
                                            width: this.opts.subMenusMaxWidth,
                                            overflowX: "hidden",
                                            overflowY: "hidden"
                                        }).width();
                                        c > d ? a.css({
                                            width: d,
                                            overflowX: "visible",
                                            overflowY: "visible"
                                        }).children().children("a").css("white-space", "") : a.css({
                                            width: c,
                                            overflowX: "visible",
                                            overflowY: "visible"
                                        })
                                    } else a.css("max-width", this.opts.subMenusMaxWidth), c > a.width() ? a.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth) : a.width(c)
                                } else a.width(a.width());
                                a.children().css("styleFloat", "left")
                            } else if (a.css({
                                width: "auto",
                                minWidth: "",
                                maxWidth: ""
                            }).addClass("sm-nowrap"), this.opts.subMenusMinWidth && a.css("min-width", this.opts.subMenusMinWidth), this.opts.subMenusMaxWidth) {
                            var c = this.getWidth(a);
                            a.css("max-width", this.opts.subMenusMaxWidth), c > this.getWidth(a) && a.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                        }
                        this.menuPosition(a), a.dataSM("ie-shim") && a.dataSM("ie-shim").insertBefore(a);
                        var h = function() {
                            a.css("overflow", "")
                        };
                        this.isCollapsible() ? this.opts.collapsibleShowFunction ? this.opts.collapsibleShowFunction.call(this, a, h) : a.show(this.opts.collapsibleShowDuration, h) : this.opts.showFunction ? this.opts.showFunction.call(this, a, h) : a.show(this.opts.showDuration, h), this.visibleSubMenus[a.dataSM("level") - 1] = a, this.$root.triggerHandler("show.smapi", a[0])
                    }
                },
                popupHide: function(a) {
                    this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                    var b = this;
                    this.hideTimeout = setTimeout(function() {
                        b.menuHideAll()
                    }, a ? 1 : this.opts.hideTimeout)
                },
                popupShow: function(a, b) {
                    return this.opts.isPopup ? (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), this.menuFixLayout(this.$root), this.$root.stop(!0, !0), void(this.$root.is(":visible") || (this.$root.css({
                        left: a,
                        top: b
                    }), this.menuIframeShim(this.$root), this.$root.dataSM("ie-shim") && this.$root.dataSM("ie-shim").css({
                        zIndex: this.$root.css("z-index"),
                        width: this.getWidth(this.$root),
                        height: this.getHeight(this.$root),
                        left: a,
                        top: b
                    }).insertBefore(this.$root), this.opts.showFunction ? this.opts.showFunction.call(this, this.$root) : this.$root.show(this.opts.showDuration), this.visibleSubMenus[0] = this.$root))) : void alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.')
                },
                refresh: function() {
                    this.menuHideAll(), this.$root.find("ul").each(function() {
                        var b = a(this);
                        b.dataSM("scroll-arrows") && b.dataSM("scroll-arrows").remove()
                    }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired"), this.$root.find("a.has-submenu").removeClass("has-submenu").parent().removeDataSM("sub"), this.opts.subIndicators && this.$root.find("span.sub-arrow").remove(), this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"), this.subMenus = [], this.init(!0)
                },
                rootOut: function(a) {
                    if (this.handleEvents() && !this.isTouchMode() && a.target != this.$root[0] && (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), !this.opts.showOnClick || !this.opts.hideOnClick)) {
                        var b = this;
                        this.hideTimeout = setTimeout(function() {
                            b.menuHideAll()
                        }, this.opts.hideTimeout)
                    }
                },
                rootOver: function(a) {
                    this.handleEvents() && !this.isTouchMode() && a.target != this.$root[0] && this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
                },
                winResize: function(a) {
                    if (this.handleEvents()) this.isCollapsible() || "onorientationchange" in window && "orientationchange" != a.type || (this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0].blur(), this.menuHideAll());
                    else if (this.$disableOverlay) {
                        var b = this.$root.offset();
                        this.$disableOverlay.css({
                            top: b.top,
                            left: b.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight()
                        })
                    }
                }
            }
        }), a.fn.dataSM = function(a, b) {
            return b ? this.data(a + "_smartmenus", b) : this.data(a + "_smartmenus")
        }, a.fn.removeDataSM = function(a) {
            return this.removeData(a + "_smartmenus")
        }, a.fn.smartmenus = function(b) {
            if ("string" == typeof b) {
                var c = arguments,
                    d = b;
                return Array.prototype.shift.call(c), this.each(function() {
                    var b = a(this).data("smartmenus");
                    b && b[d] && b[d].apply(b, c)
                })
            }
            var e = a.extend({}, a.fn.smartmenus.defaults, b);
            return this.each(function() {
                new a.SmartMenus(this, e)
            })
        }, a.fn.smartmenus.defaults = {
            isPopup: !1,
            mainMenuSubOffsetX: 0,
            mainMenuSubOffsetY: 0,
            subMenusSubOffsetX: 0,
            subMenusSubOffsetY: 0,
            subMenusMinWidth: "10em",
            subMenusMaxWidth: "20em",
            subIndicators: !0,
            subIndicatorsPos: "prepend",
            subIndicatorsText: "+",
            scrollStep: 30,
            scrollInterval: 30,
            scrollAccelerate: !0,
            showTimeout: 250,
            hideTimeout: 500,
            showDuration: 0,
            showFunction: null,
            hideDuration: 0,
            hideFunction: function(a, b) {
                a.fadeOut(200, b)
            },
            collapsibleShowDuration: 0,
            collapsibleShowFunction: function(a, b) {
                a.slideDown(200, b)
            },
            collapsibleHideDuration: 0,
            collapsibleHideFunction: function(a, b) {
                a.slideUp(200, b)
            },
            showOnClick: !0,
            hideOnClick: !0,
            keepInViewport: !0,
            keepHighlighted: !0,
            markCurrentItem: !1,
            markCurrentTree: !0,
            rightToLeftSubMenus: !1,
            bottomToTopSubMenus: !1,
            overlapControlsInIE: !0
        }
    }(jQuery),
    function(a) {
        a(function() {
            a("ul.navbar-nav").each(function() {
                var b = a(this);
                b.addClass("sm").smartmenus({
                    subMenusSubOffsetX: 2,
                    subMenusSubOffsetY: -6,
                    subIndicatorsPos: "append",
                    subIndicatorsText: "...",
                    collapsibleShowFunction: null,
                    collapsibleHideFunction: null,
                    rightToLeftSubMenus: b.hasClass("navbar-right"),
                    bottomToTopSubMenus: b.closest(".navbar").hasClass("navbar-fixed-bottom")
                }).find("a.current").parent().addClass("active")
            }).bind({
                "show.smapi": function(b, c) {
                    var d = a(c),
                        e = d.dataSM("scroll-arrows"),
                        f = a(this).data("smartmenus");
                    e && e.css("background-color", a(document.body).css("background-color")), d.parent().addClass("open" + (f.isCollapsible() ? " collapsible" : ""))
                },
                "hide.smapi": function(b, c) {
                    a(c).parent().removeClass("open collapsible")
                },
                "click.smapi": function(b, c) {
                    var d = a(this).data("smartmenus");
                    if (d.isCollapsible()) {
                        var e = a(c),
                            f = e.parent().dataSM("sub");
                        if (f && f.dataSM("shown-before") && f.is(":visible")) return d.itemActivate(e), d.menuHide(f), !1
                    }
                }
            })
        }), a.SmartMenus.prototype.isCollapsible = function() {
            return "left" != this.$firstLink.parent().css("float")
        }
    }(jQuery),
    function(a, b, c) {
        "use strict";
        var d = function() {
                b(".rrssb-buttons").each(function() {
                    var a = b(this),
                        c = b("li", a).length,
                        d = 100 / c;
                    b("li", a).css("width", d + "%").attr("data-initwidth", d)
                })
            },
            e = function() {
                b(".rrssb-buttons").each(function() {
                    var a = b(this),
                        c = parseFloat(b(a).width()),
                        d = b("li", a).not(".small").first().width(),
                        e = b("li.small", a).length;
                    d > 170 && 1 > e ? b(a).addClass("large-format") : b(a).removeClass("large-format"), 200 > c ? b(a).removeClass("small-format").addClass("tiny-format") : b(a).removeClass("tiny-format")
                })
            },
            f = function() {
                b(".rrssb-buttons").each(function() {
                    var a, c, d = b(this),
                        e = 0,
                        f = 0,
                        g = b("li.small", d).length;
                    if (g === b("li", d).length) {
                        var i = 42 * g,
                            j = parseFloat(b(d).width());
                        a = b("li.small", d).first(), c = parseFloat(b(a).attr("data-size")) + 55, j > i + c && (b(d).removeClass("small-format"), b("li.small", d).first().removeClass("small"), h())
                    } else {
                        b("li", d).not(".small").each(function() {
                            var a = parseFloat(b(this).attr("data-size")) + 55,
                                c = parseFloat(b(this).width());
                            e += c, f += a
                        });
                        var k = e - f;
                        a = b("li.small", d).first(), c = parseFloat(b(a).attr("data-size")) + 55, k > c && (b(a).removeClass("small"), h())
                    }
                })
            },
            g = function(a) {
                b(".rrssb-buttons").each(function() {
                    {
                        var a = b(this),
                            c = b("li", a).nextAll();
                        c.length
                    }
                    b(b("li", a).get().reverse()).each(function(c, d) {
                        if (b(this).hasClass("small") === !1) {
                            var e = parseFloat(b(this).attr("data-size")) + 55,
                                g = parseFloat(b(this).width());
                            if (e > g) {
                                var i = b("li", a).not(".small").last();
                                b(i).addClass("small"), h()
                            }
                        }--d || f()
                    })
                }), a === !0 && j(h)
            },
            h = function() {
                b(".rrssb-buttons").each(function() {
                    var a, c, e, f, g, h = b(this),
                        i = b("li.small", h).length;
                    i > 0 && i !== b("li", h).length ? (b(h).removeClass("small-format"), b("li.small", h).css("width", "42px"), e = 42 * i, a = b("li", h).not(".small").length, c = 100 / a, g = e / a, f = navigator.userAgent.indexOf("Chrome") >= 0 || navigator.userAgent.indexOf("Safari") >= 0 ? "-webkit-calc(" + c + "% - " + g + "px)" : navigator.userAgent.indexOf("Firefox") >= 0 ? "-moz-calc(" + c + "% - " + g + "px)" : "calc(" + c + "% - " + g + "px)", b("li", h).not(".small").css("width", f)) : i === b("li", h).length ? (b(h).addClass("small-format"), d()) : (b(h).removeClass("small-format"), d())
                }), e()
            },
            i = function() {
                b(".rrssb-buttons").each(function(a) {
                    b(this).addClass("rrssb-" + (a + 1))
                }), d(), b(".rrssb-buttons li .text").each(function() {
                    var a = parseFloat(b(this).width());
                    b(this).closest("li").attr("data-size", a)
                }), g(!0)
            },
            j = function(a) {
                b(".rrssb-buttons li.small").removeClass("small"), g(), a()
            },
            k = function(b, d, e, f) {
                var g = a.screenLeft !== c ? a.screenLeft : screen.left,
                    h = a.screenTop !== c ? a.screenTop : screen.top,
                    i = a.innerWidth ? a.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                    j = a.innerHeight ? a.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                    k = i / 2 - e / 2 + g,
                    l = j / 3 - f / 3 + h,
                    m = a.open(b, d, "scrollbars=yes, width=" + e + ", height=" + f + ", top=" + l + ", left=" + k);
                a.focus && m.focus()
            },
            l = function() {
                var a = {};
                return function(b, c, d) {
                    d || (d = "Don't call this twice without a uniqueId"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
                }
            }();
        b(".rrssb-buttons a.popup").on("click", function(a) {
            var c = b(this);
            k(c.attr("href"), c.find(".text").html(), 580, 470), a.preventDefault()
        }), b(a).resize(function() {
            j(h), l(function() {
                j(h)
            }, 200, "finished resizing")
        }), b(document).ready(function() {
            i()
        })
    }(window, jQuery),
    function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.NProgress = b()
    }(this, function() {
        function a(a, b, c) {
            return b > a ? b : a > c ? c : a
        }

        function b(a) {
            return 100 * (-1 + a)
        }

        function c(a, c, d) {
            var e;
            return e = "translate3d" === j.positionUsing ? {
                transform: "translate3d(" + b(a) + "%,0,0)"
            } : "translate" === j.positionUsing ? {
                transform: "translate(" + b(a) + "%,0)"
            } : {
                "margin-left": b(a) + "%"
            }, e.transition = "all " + c + "ms " + d, e
        }

        function d(a, b) {
            var c = "string" == typeof a ? a : g(a);
            return c.indexOf(" " + b + " ") >= 0
        }

        function e(a, b) {
            var c = g(a),
                e = c + b;
            d(c, b) || (a.className = e.substring(1))
        }

        function f(a, b) {
            var c, e = g(a);
            d(a, b) && (c = e.replace(" " + b + " ", " "), a.className = c.substring(1, c.length - 1))
        }

        function g(a) {
            return (" " + (a.className || "") + " ").replace(/\s+/gi, " ")
        }

        function h(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        var i = {};
        i.version = "0.1.6";
        var j = i.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        i.configure = function(a) {
                var b, c;
                for (b in a) c = a[b], void 0 !== c && a.hasOwnProperty(b) && (j[b] = c);
                return this
            }, i.status = null, i.set = function(b) {
                var d = i.isStarted();
                b = a(b, j.minimum, 1), i.status = 1 === b ? null : b;
                var e = i.render(!d),
                    f = e.querySelector(j.barSelector),
                    g = j.speed,
                    h = j.easing;
                return e.offsetWidth, k(function(a) {
                    "" === j.positionUsing && (j.positionUsing = i.getPositioningCSS()), l(f, c(b, g, h)), 1 === b ? (l(e, {
                        transition: "none",
                        opacity: 1
                    }), e.offsetWidth, setTimeout(function() {
                        l(e, {
                            transition: "all " + g + "ms linear",
                            opacity: 0
                        }), setTimeout(function() {
                            i.remove(), a()
                        }, g)
                    }, g)) : setTimeout(a, g)
                }), this
            }, i.isStarted = function() {
                return "number" == typeof i.status
            }, i.start = function() {
                i.status || i.set(0);
                var a = function() {
                    setTimeout(function() {
                        i.status && (i.trickle(), a())
                    }, j.trickleSpeed)
                };
                return j.trickle && a(), this
            }, i.done = function(a) {
                return a || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this
            }, i.inc = function(b) {
                var c = i.status;
                return c ? ("number" != typeof b && (b = (1 - c) * a(Math.random() * c, .1, .95)), c = a(c + b, 0, .994), i.set(c)) : i.start()
            }, i.trickle = function() {
                return i.inc(Math.random() * j.trickleRate)
            },
            function() {
                var a = 0,
                    b = 0;
                i.promise = function(c) {
                    return c && "resolved" != c.state() ? (0 == b && i.start(), a++, b++, c.always(function() {
                        b--, 0 == b ? (a = 0, i.done()) : i.set((a - b) / a)
                    }), this) : this
                }
            }(), i.render = function(a) {
                if (i.isRendered()) return document.getElementById("nprogress");
                e(document.documentElement, "nprogress-busy");
                var c = document.createElement("div");
                c.id = "nprogress", c.innerHTML = j.template;
                var d, f = c.querySelector(j.barSelector),
                    g = a ? "-100" : b(i.status || 0),
                    k = document.querySelector(j.parent);
                return l(f, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + g + "%,0,0)"
                }), j.showSpinner || (d = c.querySelector(j.spinnerSelector), d && h(d)), k != document.body && e(k, "nprogress-custom-parent"), k.appendChild(c), c
            }, i.remove = function() {
                f(document.documentElement, "nprogress-busy"), f(document.querySelector(j.parent), "nprogress-custom-parent");
                var a = document.getElementById("nprogress");
                a && h(a)
            }, i.isRendered = function() {
                return !!document.getElementById("nprogress")
            }, i.getPositioningCSS = function() {
                var a = document.body.style,
                    b = "WebkitTransform" in a ? "Webkit" : "MozTransform" in a ? "Moz" : "msTransform" in a ? "ms" : "OTransform" in a ? "O" : "";
                return b + "Perspective" in a ? "translate3d" : b + "Transform" in a ? "translate" : "margin"
            };
        var k = function() {
                function a() {
                    var c = b.shift();
                    c && c(a)
                }
                var b = [];
                return function(c) {
                    b.push(c), 1 == b.length && a()
                }
            }(),
            l = function() {
                function a(a) {
                    return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(a, b) {
                        return b.toUpperCase()
                    })
                }

                function b(a) {
                    var b = document.body.style;
                    if (a in b) return a;
                    for (var c, d = e.length, f = a.charAt(0).toUpperCase() + a.slice(1); d--;)
                        if (c = e[d] + f, c in b) return c;
                    return a
                }

                function c(c) {
                    return c = a(c), f[c] || (f[c] = b(c))
                }

                function d(a, b, d) {
                    b = c(b), a.style[b] = d
                }
                var e = ["Webkit", "O", "Moz", "ms"],
                    f = {};
                return function(a, b) {
                    var c, e, f = arguments;
                    if (2 == f.length)
                        for (c in b) e = b[c], void 0 !== e && b.hasOwnProperty(c) && d(a, c, e);
                    else d(a, f[1], f[2])
                }
            }();
        return i
    }),
    function() {
        function a() {
            var a = {};
            return a.FRAMERATE = 30, a.MAX_VIRTUAL_PIXELS = 3e4, a.init = function(b) {
                a.Definitions = {}, a.Styles = {}, a.Animations = [], a.Images = [], a.ctx = b, a.ViewPort = new function() {
                    this.viewPorts = [], this.Clear = function() {
                        this.viewPorts = []
                    }, this.SetCurrent = function(a, b) {
                        this.viewPorts.push({
                            width: a,
                            height: b
                        })
                    }, this.RemoveCurrent = function() {
                        this.viewPorts.pop()
                    }, this.Current = function() {
                        return this.viewPorts[this.viewPorts.length - 1]
                    }, this.width = function() {
                        return this.Current().width
                    }, this.height = function() {
                        return this.Current().height
                    }, this.ComputeSize = function(a) {
                        return null != a && "number" == typeof a ? a : "x" == a ? this.width() : "y" == a ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
                    }
                }
            }, a.init(), a.ImagesLoaded = function() {
                for (var b = 0; b < a.Images.length; b++)
                    if (!a.Images[b].loaded) return !1;
                return !0
            }, a.trim = function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            }, a.compressSpaces = function(a) {
                return a.replace(/[\s\r\t\n]+/gm, " ")
            }, a.ajax = function(a) {
                var b;
                return b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), b ? (b.open("GET", a, !1), b.send(null), b.responseText) : null
            }, a.parseXml = function(a) {
                if (window.DOMParser) {
                    var b = new DOMParser;
                    return b.parseFromString(a, "text/xml")
                }
                a = a.replace(/<!DOCTYPE svg[^>]*>/, "");
                var c = new ActiveXObject("Microsoft.XMLDOM");
                return c.async = "false", c.loadXML(a), c
            }, a.Property = function(a, b) {
                this.name = a, this.value = b
            }, a.Property.prototype.getValue = function() {
                return this.value
            }, a.Property.prototype.hasValue = function() {
                return null != this.value && "" !== this.value
            }, a.Property.prototype.numValue = function() {
                if (!this.hasValue()) return 0;
                var a = parseFloat(this.value);
                return (this.value + "").match(/%$/) && (a /= 100), a
            }, a.Property.prototype.valueOrDefault = function(a) {
                return this.hasValue() ? this.value : a
            }, a.Property.prototype.numValueOrDefault = function(a) {
                return this.hasValue() ? this.numValue() : a
            }, a.Property.prototype.addOpacity = function(b) {
                var c = this.value;
                if (null != b && "" != b && "string" == typeof this.value) {
                    var d = new RGBColor(this.value);
                    d.ok && (c = "rgba(" + d.r + ", " + d.g + ", " + d.b + ", " + b + ")")
                }
                return new a.Property(this.name, c)
            }, a.Property.prototype.getDefinition = function() {
                var b = this.value.replace(/^(url\()?#([^\)]+)\)?$/, "$2");
                return a.Definitions[b]
            }, a.Property.prototype.isUrlDefinition = function() {
                return 0 == this.value.indexOf("url(")
            }, a.Property.prototype.getFillStyleDefinition = function(b) {
                var c = this.getDefinition();
                return null != c && c.createGradient ? c.createGradient(a.ctx, b) : null != c && c.createPattern ? c.createPattern(a.ctx, b) : null
            }, a.Property.prototype.getDPI = function() {
                return 96
            }, a.Property.prototype.getEM = function(b) {
                var c = 12,
                    d = new a.Property("fontSize", a.Font.Parse(a.ctx.font).fontSize);
                return d.hasValue() && (c = d.toPixels(b)), c
            }, a.Property.prototype.getUnits = function() {
                var a = this.value + "";
                return a.replace(/[0-9\.\-]/g, "")
            }, a.Property.prototype.toPixels = function(b) {
                if (!this.hasValue()) return 0;
                var c = this.value + "";
                return c.match(/em$/) ? this.numValue() * this.getEM(b) : c.match(/ex$/) ? this.numValue() * this.getEM(b) / 2 : c.match(/px$/) ? this.numValue() : c.match(/pt$/) ? this.numValue() * this.getDPI(b) * (1 / 72) : c.match(/pc$/) ? 15 * this.numValue() : c.match(/cm$/) ? this.numValue() * this.getDPI(b) / 2.54 : c.match(/mm$/) ? this.numValue() * this.getDPI(b) / 25.4 : c.match(/in$/) ? this.numValue() * this.getDPI(b) : c.match(/%$/) ? this.numValue() * a.ViewPort.ComputeSize(b) : this.numValue()
            }, a.Property.prototype.toMilliseconds = function() {
                if (!this.hasValue()) return 0;
                var a = this.value + "";
                return a.match(/s$/) ? 1e3 * this.numValue() : (a.match(/ms$/), this.numValue())
            }, a.Property.prototype.toRadians = function() {
                if (!this.hasValue()) return 0;
                var a = this.value + "";
                return a.match(/deg$/) ? this.numValue() * (Math.PI / 180) : a.match(/grad$/) ? this.numValue() * (Math.PI / 200) : a.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
            }, a.Font = new function() {
                this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function(b, c, d, e, f, g) {
                    var h = null != g ? this.Parse(g) : this.CreateFont("", "", "", "", "", a.ctx.font);
                    return {
                        fontFamily: f || h.fontFamily,
                        fontSize: e || h.fontSize,
                        fontStyle: b || h.fontStyle,
                        fontWeight: d || h.fontWeight,
                        fontVariant: c || h.fontVariant,
                        toString: function() {
                            return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
                        }
                    }
                };
                var b = this;
                this.Parse = function(c) {
                    for (var d = {}, e = a.trim(a.compressSpaces(c || "")).split(" "), f = {
                            fontSize: !1,
                            fontStyle: !1,
                            fontWeight: !1,
                            fontVariant: !1
                        }, g = "", h = 0; h < e.length; h++) f.fontStyle || -1 == b.Styles.indexOf(e[h]) ? f.fontVariant || -1 == b.Variants.indexOf(e[h]) ? f.fontWeight || -1 == b.Weights.indexOf(e[h]) ? f.fontSize ? "inherit" != e[h] && (g += e[h]) : ("inherit" != e[h] && (d.fontSize = e[h].split("/")[0]), f.fontStyle = f.fontVariant = f.fontWeight = f.fontSize = !0) : ("inherit" != e[h] && (d.fontWeight = e[h]), f.fontStyle = f.fontVariant = f.fontWeight = !0) : ("inherit" != e[h] && (d.fontVariant = e[h]), f.fontStyle = f.fontVariant = !0) : ("inherit" != e[h] && (d.fontStyle = e[h]), f.fontStyle = !0);
                    return "" != g && (d.fontFamily = g), d
                }
            }, a.ToNumberArray = function(b) {
                for (var c = a.trim(a.compressSpaces((b || "").replace(/,/g, " "))).split(" "), d = 0; d < c.length; d++) c[d] = parseFloat(c[d]);
                return c
            }, a.Point = function(a, b) {
                this.x = a, this.y = b
            }, a.Point.prototype.angleTo = function(a) {
                return Math.atan2(a.y - this.y, a.x - this.x)
            }, a.Point.prototype.applyTransform = function(a) {
                var b = this.x * a[0] + this.y * a[2] + a[4],
                    c = this.x * a[1] + this.y * a[3] + a[5];
                this.x = b, this.y = c
            }, a.CreatePoint = function(b) {
                var c = a.ToNumberArray(b);
                return new a.Point(c[0], c[1])
            }, a.CreatePath = function(b) {
                for (var c = a.ToNumberArray(b), d = [], e = 0; e < c.length; e += 2) d.push(new a.Point(c[e], c[e + 1]));
                return d
            }, a.BoundingBox = function(a, b, c, d) {
                this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function() {
                    return this.x1
                }, this.y = function() {
                    return this.y1
                }, this.width = function() {
                    return this.x2 - this.x1
                }, this.height = function() {
                    return this.y2 - this.y1
                }, this.addPoint = function(a, b) {
                    null != a && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = a, this.x2 = a), a < this.x1 && (this.x1 = a), a > this.x2 && (this.x2 = a)), null != b && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = b, this.y2 = b), b < this.y1 && (this.y1 = b), b > this.y2 && (this.y2 = b))
                }, this.addX = function(a) {
                    this.addPoint(a, null)
                }, this.addY = function(a) {
                    this.addPoint(null, a)
                }, this.addBoundingBox = function(a) {
                    this.addPoint(a.x1, a.y1), this.addPoint(a.x2, a.y2)
                }, this.addQuadraticCurve = function(a, b, c, d, e, f) {
                    var g = a + 2 / 3 * (c - a),
                        h = b + 2 / 3 * (d - b),
                        i = g + 1 / 3 * (e - a),
                        j = h + 1 / 3 * (f - b);
                    this.addBezierCurve(a, b, g, i, h, j, e, f)
                }, this.addBezierCurve = function(a, b, c, d, e, f, g, h) {
                    var j = [a, b],
                        k = [c, d],
                        l = [e, f],
                        m = [g, h];
                    for (this.addPoint(j[0], j[1]), this.addPoint(m[0], m[1]), i = 0; 1 >= i; i++) {
                        var n = function(a) {
                                return Math.pow(1 - a, 3) * j[i] + 3 * Math.pow(1 - a, 2) * a * k[i] + 3 * (1 - a) * Math.pow(a, 2) * l[i] + Math.pow(a, 3) * m[i]
                            },
                            o = 6 * j[i] - 12 * k[i] + 6 * l[i],
                            p = -3 * j[i] + 9 * k[i] - 9 * l[i] + 3 * m[i],
                            q = 3 * k[i] - 3 * j[i];
                        if (0 != p) {
                            var r = Math.pow(o, 2) - 4 * q * p;
                            if (!(0 > r)) {
                                var s = (-o + Math.sqrt(r)) / (2 * p);
                                s > 0 && 1 > s && (0 == i && this.addX(n(s)), 1 == i && this.addY(n(s)));
                                var t = (-o - Math.sqrt(r)) / (2 * p);
                                t > 0 && 1 > t && (0 == i && this.addX(n(t)), 1 == i && this.addY(n(t)))
                            }
                        } else {
                            if (0 == o) continue;
                            var u = -q / o;
                            u > 0 && 1 > u && (0 == i && this.addX(n(u)), 1 == i && this.addY(n(u)))
                        }
                    }
                }, this.isPointInBox = function(a, b) {
                    return this.x1 <= a && a <= this.x2 && this.y1 <= b && b <= this.y2
                }, this.addPoint(a, b), this.addPoint(c, d)
            }, a.Transform = function(b) {
                var c = this;
                this.Type = {}, this.Type.translate = function(b) {
                    this.p = a.CreatePoint(b), this.apply = function(a) {
                        a.translate(this.p.x || 0, this.p.y || 0)
                    }, this.applyToPoint = function(a) {
                        a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
                    }
                }, this.Type.rotate = function(b) {
                    var c = a.ToNumberArray(b);
                    this.angle = new a.Property("angle", c[0]), this.cx = c[1] || 0, this.cy = c[2] || 0, this.apply = function(a) {
                        a.translate(this.cx, this.cy), a.rotate(this.angle.toRadians()), a.translate(-this.cx, -this.cy)
                    }, this.applyToPoint = function(a) {
                        var b = this.angle.toRadians();
                        a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), a.applyTransform([Math.cos(b), Math.sin(b), -Math.sin(b), Math.cos(b), 0, 0]), a.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
                    }
                }, this.Type.scale = function(b) {
                    this.p = a.CreatePoint(b), this.apply = function(a) {
                        a.scale(this.p.x || 1, this.p.y || this.p.x || 1)
                    }, this.applyToPoint = function(a) {
                        a.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
                    }
                }, this.Type.matrix = function(b) {
                    this.m = a.ToNumberArray(b), this.apply = function(a) {
                        a.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
                    }, this.applyToPoint = function(a) {
                        a.applyTransform(this.m)
                    }
                }, this.Type.SkewBase = function(b) {
                    this.base = c.Type.matrix, this.base(b), this.angle = new a.Property("angle", b)
                }, this.Type.SkewBase.prototype = new this.Type.matrix, this.Type.skewX = function(a) {
                    this.base = c.Type.SkewBase, this.base(a), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
                }, this.Type.skewX.prototype = new this.Type.SkewBase, this.Type.skewY = function(a) {
                    this.base = c.Type.SkewBase, this.base(a), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
                }, this.Type.skewY.prototype = new this.Type.SkewBase, this.transforms = [], this.apply = function(a) {
                    for (var b = 0; b < this.transforms.length; b++) this.transforms[b].apply(a)
                }, this.applyToPoint = function(a) {
                    for (var b = 0; b < this.transforms.length; b++) this.transforms[b].applyToPoint(a)
                };
                for (var d = a.trim(a.compressSpaces(b)).split(/\s(?=[a-z])/), e = 0; e < d.length; e++) {
                    var f = d[e].split("(")[0],
                        g = d[e].split("(")[1].replace(")", ""),
                        h = new this.Type[f](g);
                    this.transforms.push(h)
                }
            }, a.AspectRatio = function(b, c, d, e, f, g, h, i, j, k) {
                c = a.compressSpaces(c), c = c.replace(/^defer\s/, "");
                var l = c.split(" ")[0] || "xMidYMid",
                    m = c.split(" ")[1] || "meet",
                    n = d / e,
                    o = f / g,
                    p = Math.min(n, o),
                    q = Math.max(n, o);
                "meet" == m && (e *= p, g *= p), "slice" == m && (e *= q, g *= q), j = new a.Property("refX", j), k = new a.Property("refY", k), j.hasValue() && k.hasValue() ? b.translate(-p * j.toPixels("x"), -p * k.toPixels("y")) : (l.match(/^xMid/) && ("meet" == m && p == o || "slice" == m && q == o) && b.translate(d / 2 - e / 2, 0), l.match(/YMid$/) && ("meet" == m && p == n || "slice" == m && q == n) && b.translate(0, f / 2 - g / 2), l.match(/^xMax/) && ("meet" == m && p == o || "slice" == m && q == o) && b.translate(d - e, 0), l.match(/YMax$/) && ("meet" == m && p == n || "slice" == m && q == n) && b.translate(0, f - g)), "none" == l ? b.scale(n, o) : "meet" == m ? b.scale(p, p) : "slice" == m && b.scale(q, q), b.translate(null == h ? 0 : -h, null == i ? 0 : -i)
            }, a.Element = {}, a.EmptyProperty = new a.Property("EMPTY", ""), a.Element.ElementBase = function(b) {
                if (this.attributes = {}, this.styles = {}, this.children = [], this.attribute = function(b, c) {
                        var d = this.attributes[b];
                        return null != d ? d : (1 == c && (d = new a.Property(b, ""), this.attributes[b] = d), d || a.EmptyProperty)
                    }, this.style = function(b, c) {
                        var d = this.styles[b];
                        if (null != d) return d;
                        var e = this.attribute(b);
                        if (null != e && e.hasValue()) return this.styles[b] = e, e;
                        var f = this.parent;
                        if (null != f) {
                            var g = f.style(b);
                            if (null != g && g.hasValue()) return g
                        }
                        return 1 == c && (d = new a.Property(b, ""), this.styles[b] = d), d || a.EmptyProperty
                    }, this.render = function(a) {
                        if ("none" != this.style("display").value && "hidden" != this.attribute("visibility").value) {
                            if (a.save(), this.setContext(a), this.attribute("mask").hasValue()) {
                                var b = this.attribute("mask").getDefinition();
                                null != b && b.apply(a, this)
                            } else if (this.style("filter").hasValue()) {
                                var c = this.style("filter").getDefinition();
                                null != c && c.apply(a, this)
                            } else this.renderChildren(a);
                            this.clearContext(a), a.restore()
                        }
                    }, this.setContext = function() {}, this.clearContext = function() {}, this.renderChildren = function(a) {
                        for (var b = 0; b < this.children.length; b++) this.children[b].render(a)
                    }, this.addChild = function(b, c) {
                        var d = b;
                        c && (d = a.CreateElement(b)), d.parent = this, this.children.push(d)
                    }, null != b && 1 == b.nodeType) {
                    for (var c = 0; c < b.childNodes.length; c++) {
                        var d = b.childNodes[c];
                        1 == d.nodeType && this.addChild(d, !0)
                    }
                    for (var c = 0; c < b.attributes.length; c++) {
                        var e = b.attributes[c];
                        this.attributes[e.nodeName] = new a.Property(e.nodeName, e.nodeValue)
                    }
                    var f = a.Styles[b.nodeName];
                    if (null != f)
                        for (var g in f) this.styles[g] = f[g];
                    if (this.attribute("class").hasValue())
                        for (var h = a.compressSpaces(this.attribute("class").value).split(" "), i = 0; i < h.length; i++) {
                            if (f = a.Styles["." + h[i]], null != f)
                                for (var g in f) this.styles[g] = f[g];
                            if (f = a.Styles[b.nodeName + "." + h[i]], null != f)
                                for (var g in f) this.styles[g] = f[g]
                        }
                    if (this.attribute("id").hasValue()) {
                        var f = a.Styles["#" + this.attribute("id").value];
                        if (null != f)
                            for (var g in f) this.styles[g] = f[g]
                    }
                    if (this.attribute("style").hasValue())
                        for (var f = this.attribute("style").value.split(";"), c = 0; c < f.length; c++)
                            if ("" != a.trim(f[c])) {
                                var j = f[c].split(":"),
                                    g = a.trim(j[0]),
                                    k = a.trim(j[1]);
                                this.styles[g] = new a.Property(g, k)
                            }
                    this.attribute("id").hasValue() && null == a.Definitions[this.attribute("id").value] && (a.Definitions[this.attribute("id").value] = this)
                }
            }, a.Element.RenderedElementBase = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.setContext = function(b) {
                    if (this.style("fill").isUrlDefinition()) {
                        var c = this.style("fill").getFillStyleDefinition(this);
                        null != c && (b.fillStyle = c)
                    } else if (this.style("fill").hasValue()) {
                        var d = this.style("fill");
                        "currentColor" == d.value && (d.value = this.style("color").value), b.fillStyle = "none" == d.value ? "rgba(0,0,0,0)" : d.value
                    }
                    if (this.style("fill-opacity").hasValue()) {
                        var d = new a.Property("fill", b.fillStyle);
                        d = d.addOpacity(this.style("fill-opacity").value), b.fillStyle = d.value
                    }
                    if (this.style("stroke").isUrlDefinition()) {
                        var c = this.style("stroke").getFillStyleDefinition(this);
                        null != c && (b.strokeStyle = c)
                    } else if (this.style("stroke").hasValue()) {
                        var e = this.style("stroke");
                        "currentColor" == e.value && (e.value = this.style("color").value), b.strokeStyle = "none" == e.value ? "rgba(0,0,0,0)" : e.value
                    }
                    if (this.style("stroke-opacity").hasValue()) {
                        var e = new a.Property("stroke", b.strokeStyle);
                        e = e.addOpacity(this.style("stroke-opacity").value), b.strokeStyle = e.value
                    }
                    if (this.style("stroke-width").hasValue() && (b.lineWidth = this.style("stroke-width").toPixels()), this.style("stroke-linecap").hasValue() && (b.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (b.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (b.miterLimit = this.style("stroke-miterlimit").value), "undefined" != typeof b.font && (b.font = a.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString()), this.attribute("transform").hasValue()) {
                        var f = new a.Transform(this.attribute("transform").value);
                        f.apply(b)
                    }
                    if (this.attribute("clip-path").hasValue()) {
                        var g = this.attribute("clip-path").getDefinition();
                        null != g && g.apply(b)
                    }
                    this.style("opacity").hasValue() && (b.globalAlpha = this.style("opacity").numValue())
                }
            }, a.Element.RenderedElementBase.prototype = new a.Element.ElementBase, a.Element.PathElementBase = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b), this.path = function(b) {
                    return null != b && b.beginPath(), new a.BoundingBox
                }, this.renderChildren = function(b) {
                    this.path(b), a.Mouse.checkPath(this, b), "" != b.fillStyle && b.fill(), "" != b.strokeStyle && b.stroke();
                    var c = this.getMarkers();
                    if (null != c) {
                        if (this.style("marker-start").isUrlDefinition()) {
                            var d = this.style("marker-start").getDefinition();
                            d.render(b, c[0][0], c[0][1])
                        }
                        if (this.style("marker-mid").isUrlDefinition())
                            for (var d = this.style("marker-mid").getDefinition(), e = 1; e < c.length - 1; e++) d.render(b, c[e][0], c[e][1]);
                        if (this.style("marker-end").isUrlDefinition()) {
                            var d = this.style("marker-end").getDefinition();
                            d.render(b, c[c.length - 1][0], c[c.length - 1][1])
                        }
                    }
                }, this.getBoundingBox = function() {
                    return this.path()
                }, this.getMarkers = function() {
                    return null
                }
            }, a.Element.PathElementBase.prototype = new a.Element.RenderedElementBase, a.Element.svg = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b), this.baseClearContext = this.clearContext, this.clearContext = function(b) {
                    this.baseClearContext(b), a.ViewPort.RemoveCurrent()
                }, this.baseSetContext = this.setContext, this.setContext = function(b) {
                    b.strokeStyle = "rgba(0,0,0,0)", b.lineCap = "butt", b.lineJoin = "miter", b.miterLimit = 4, this.baseSetContext(b), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), b.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
                    var c = a.ViewPort.width(),
                        d = a.ViewPort.height();
                    if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), "undefined" == typeof this.root) {
                        c = this.attribute("width").toPixels("x"), d = this.attribute("height").toPixels("y");
                        var e = 0,
                            f = 0;
                        this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (e = -this.attribute("refX").toPixels("x"), f = -this.attribute("refY").toPixels("y")), b.beginPath(), b.moveTo(e, f), b.lineTo(c, f), b.lineTo(c, d), b.lineTo(e, d), b.closePath(), b.clip()
                    }
                    if (a.ViewPort.SetCurrent(c, d), this.attribute("viewBox").hasValue()) {
                        var g = a.ToNumberArray(this.attribute("viewBox").value),
                            h = g[0],
                            i = g[1];
                        c = g[2], d = g[3], a.AspectRatio(b, this.attribute("preserveAspectRatio").value, a.ViewPort.width(), c, a.ViewPort.height(), d, h, i, this.attribute("refX").value, this.attribute("refY").value), a.ViewPort.RemoveCurrent(), a.ViewPort.SetCurrent(g[2], g[3])
                    }
                }
            }, a.Element.svg.prototype = new a.Element.RenderedElementBase, a.Element.rect = function(b) {
                this.base = a.Element.PathElementBase, this.base(b), this.path = function(b) {
                    var c = this.attribute("x").toPixels("x"),
                        d = this.attribute("y").toPixels("y"),
                        e = this.attribute("width").toPixels("x"),
                        f = this.attribute("height").toPixels("y"),
                        g = this.attribute("rx").toPixels("x"),
                        h = this.attribute("ry").toPixels("y");
                    return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (h = g), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (g = h), null != b && (b.beginPath(), b.moveTo(c + g, d), b.lineTo(c + e - g, d), b.quadraticCurveTo(c + e, d, c + e, d + h), b.lineTo(c + e, d + f - h), b.quadraticCurveTo(c + e, d + f, c + e - g, d + f), b.lineTo(c + g, d + f), b.quadraticCurveTo(c, d + f, c, d + f - h), b.lineTo(c, d + h), b.quadraticCurveTo(c, d, c + g, d), b.closePath()), new a.BoundingBox(c, d, c + e, d + f)
                }
            }, a.Element.rect.prototype = new a.Element.PathElementBase, a.Element.circle = function(b) {
                this.base = a.Element.PathElementBase, this.base(b), this.path = function(b) {
                    var c = this.attribute("cx").toPixels("x"),
                        d = this.attribute("cy").toPixels("y"),
                        e = this.attribute("r").toPixels();
                    return null != b && (b.beginPath(), b.arc(c, d, e, 0, 2 * Math.PI, !0), b.closePath()), new a.BoundingBox(c - e, d - e, c + e, d + e)
                }
            }, a.Element.circle.prototype = new a.Element.PathElementBase, a.Element.ellipse = function(b) {
                this.base = a.Element.PathElementBase, this.base(b), this.path = function(b) {
                    var c = 4 * ((Math.sqrt(2) - 1) / 3),
                        d = this.attribute("rx").toPixels("x"),
                        e = this.attribute("ry").toPixels("y"),
                        f = this.attribute("cx").toPixels("x"),
                        g = this.attribute("cy").toPixels("y");
                    return null != b && (b.beginPath(), b.moveTo(f, g - e), b.bezierCurveTo(f + c * d, g - e, f + d, g - c * e, f + d, g), b.bezierCurveTo(f + d, g + c * e, f + c * d, g + e, f, g + e), b.bezierCurveTo(f - c * d, g + e, f - d, g + c * e, f - d, g), b.bezierCurveTo(f - d, g - c * e, f - c * d, g - e, f, g - e), b.closePath()), new a.BoundingBox(f - d, g - e, f + d, g + e)
                }
            }, a.Element.ellipse.prototype = new a.Element.PathElementBase, a.Element.line = function(b) {
                this.base = a.Element.PathElementBase, this.base(b), this.getPoints = function() {
                    return [new a.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new a.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
                }, this.path = function(b) {
                    var c = this.getPoints();
                    return null != b && (b.beginPath(), b.moveTo(c[0].x, c[0].y), b.lineTo(c[1].x, c[1].y)), new a.BoundingBox(c[0].x, c[0].y, c[1].x, c[1].y)
                }, this.getMarkers = function() {
                    var a = this.getPoints(),
                        b = a[0].angleTo(a[1]);
                    return [
                        [a[0], b],
                        [a[1], b]
                    ]
                }
            }, a.Element.line.prototype = new a.Element.PathElementBase, a.Element.polyline = function(b) {
                this.base = a.Element.PathElementBase, this.base(b), this.points = a.CreatePath(this.attribute("points").value), this.path = function(b) {
                    var c = new a.BoundingBox(this.points[0].x, this.points[0].y);
                    null != b && (b.beginPath(), b.moveTo(this.points[0].x, this.points[0].y));
                    for (var d = 1; d < this.points.length; d++) c.addPoint(this.points[d].x, this.points[d].y), null != b && b.lineTo(this.points[d].x, this.points[d].y);
                    return c
                }, this.getMarkers = function() {
                    for (var a = [], b = 0; b < this.points.length - 1; b++) a.push([this.points[b], this.points[b].angleTo(this.points[b + 1])]);
                    return a.push([this.points[this.points.length - 1], a[a.length - 1][1]]), a
                }
            }, a.Element.polyline.prototype = new a.Element.PathElementBase, a.Element.polygon = function(b) {
                this.base = a.Element.polyline, this.base(b), this.basePath = this.path, this.path = function(a) {
                    var b = this.basePath(a);
                    return null != a && (a.lineTo(this.points[0].x, this.points[0].y), a.closePath()), b
                }
            }, a.Element.polygon.prototype = new a.Element.polyline, a.Element.path = function(b) {
                this.base = a.Element.PathElementBase, this.base(b);
                var c = this.attribute("d").value;
                c = c.replace(/,/gm, " "), c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2"), c = c.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), c = c.replace(/([0-9])([+\-])/gm, "$1 $2"), c = c.replace(/(\.[0-9]*)(\.)/gm, "$1 $2"), c = c.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), c = a.compressSpaces(c), c = a.trim(c), this.PathParser = new function(b) {
                    this.tokens = b.split(" "), this.reset = function() {
                        this.i = -1, this.command = "", this.previousCommand = "", this.start = new a.Point(0, 0), this.control = new a.Point(0, 0), this.current = new a.Point(0, 0), this.points = [], this.angles = []
                    }, this.isEnd = function() {
                        return this.i >= this.tokens.length - 1
                    }, this.isCommandOrEnd = function() {
                        return this.isEnd() ? !0 : null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
                    }, this.isRelativeCommand = function() {
                        switch (this.command) {
                            case "m":
                            case "l":
                            case "h":
                            case "v":
                            case "c":
                            case "s":
                            case "q":
                            case "t":
                            case "a":
                            case "z":
                                return !0
                        }
                        return !1
                    }, this.getToken = function() {
                        return this.i++, this.tokens[this.i]
                    }, this.getScalar = function() {
                        return parseFloat(this.getToken())
                    }, this.nextCommand = function() {
                        this.previousCommand = this.command, this.command = this.getToken()
                    }, this.getPoint = function() {
                        var b = new a.Point(this.getScalar(), this.getScalar());
                        return this.makeAbsolute(b)
                    }, this.getAsControlPoint = function() {
                        var a = this.getPoint();
                        return this.control = a, a
                    }, this.getAsCurrentPoint = function() {
                        var a = this.getPoint();
                        return this.current = a, a
                    }, this.getReflectedControlPoint = function() {
                        if ("c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase()) return this.current;
                        var b = new a.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
                        return b
                    }, this.makeAbsolute = function(a) {
                        return this.isRelativeCommand() && (a.x += this.current.x, a.y += this.current.y), a
                    }, this.addMarker = function(a, b, c) {
                        null != c && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(c)), this.addMarkerAngle(a, null == b ? null : b.angleTo(a))
                    }, this.addMarkerAngle = function(a, b) {
                        this.points.push(a), this.angles.push(b)
                    }, this.getMarkerPoints = function() {
                        return this.points
                    }, this.getMarkerAngles = function() {
                        for (var a = 0; a < this.angles.length; a++)
                            if (null == this.angles[a])
                                for (var b = a + 1; b < this.angles.length; b++)
                                    if (null != this.angles[b]) {
                                        this.angles[a] = this.angles[b];
                                        break
                                    }
                        return this.angles
                    }
                }(c), this.path = function(b) {
                    var c = this.PathParser;
                    c.reset();
                    var d = new a.BoundingBox;
                    for (null != b && b.beginPath(); !c.isEnd();) switch (c.nextCommand(), c.command) {
                        case "M":
                        case "m":
                            var e = c.getAsCurrentPoint();
                            for (c.addMarker(e), d.addPoint(e.x, e.y), null != b && b.moveTo(e.x, e.y), c.start = c.current; !c.isCommandOrEnd();) {
                                var e = c.getAsCurrentPoint();
                                c.addMarker(e, c.start), d.addPoint(e.x, e.y), null != b && b.lineTo(e.x, e.y)
                            }
                            break;
                        case "L":
                        case "l":
                            for (; !c.isCommandOrEnd();) {
                                var f = c.current,
                                    e = c.getAsCurrentPoint();
                                c.addMarker(e, f), d.addPoint(e.x, e.y), null != b && b.lineTo(e.x, e.y)
                            }
                            break;
                        case "H":
                        case "h":
                            for (; !c.isCommandOrEnd();) {
                                var g = new a.Point((c.isRelativeCommand() ? c.current.x : 0) + c.getScalar(), c.current.y);
                                c.addMarker(g, c.current), c.current = g, d.addPoint(c.current.x, c.current.y), null != b && b.lineTo(c.current.x, c.current.y)
                            }
                            break;
                        case "V":
                        case "v":
                            for (; !c.isCommandOrEnd();) {
                                var g = new a.Point(c.current.x, (c.isRelativeCommand() ? c.current.y : 0) + c.getScalar());
                                c.addMarker(g, c.current), c.current = g, d.addPoint(c.current.x, c.current.y), null != b && b.lineTo(c.current.x, c.current.y)
                            }
                            break;
                        case "C":
                        case "c":
                            for (; !c.isCommandOrEnd();) {
                                var h = c.current,
                                    i = c.getPoint(),
                                    j = c.getAsControlPoint(),
                                    k = c.getAsCurrentPoint();
                                c.addMarker(k, j, i), d.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y), null != b && b.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
                            }
                            break;
                        case "S":
                        case "s":
                            for (; !c.isCommandOrEnd();) {
                                var h = c.current,
                                    i = c.getReflectedControlPoint(),
                                    j = c.getAsControlPoint(),
                                    k = c.getAsCurrentPoint();
                                c.addMarker(k, j, i), d.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y), null != b && b.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
                            }
                            break;
                        case "Q":
                        case "q":
                            for (; !c.isCommandOrEnd();) {
                                var h = c.current,
                                    j = c.getAsControlPoint(),
                                    k = c.getAsCurrentPoint();
                                c.addMarker(k, j, j), d.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y), null != b && b.quadraticCurveTo(j.x, j.y, k.x, k.y)
                            }
                            break;
                        case "T":
                        case "t":
                            for (; !c.isCommandOrEnd();) {
                                var h = c.current,
                                    j = c.getReflectedControlPoint();
                                c.control = j;
                                var k = c.getAsCurrentPoint();
                                c.addMarker(k, j, j), d.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y), null != b && b.quadraticCurveTo(j.x, j.y, k.x, k.y)
                            }
                            break;
                        case "A":
                        case "a":
                            for (; !c.isCommandOrEnd();) {
                                var h = c.current,
                                    l = c.getScalar(),
                                    m = c.getScalar(),
                                    n = c.getScalar() * (Math.PI / 180),
                                    o = c.getScalar(),
                                    p = c.getScalar(),
                                    k = c.getAsCurrentPoint(),
                                    q = new a.Point(Math.cos(n) * (h.x - k.x) / 2 + Math.sin(n) * (h.y - k.y) / 2, -Math.sin(n) * (h.x - k.x) / 2 + Math.cos(n) * (h.y - k.y) / 2),
                                    r = Math.pow(q.x, 2) / Math.pow(l, 2) + Math.pow(q.y, 2) / Math.pow(m, 2);
                                r > 1 && (l *= Math.sqrt(r), m *= Math.sqrt(r));
                                var s = (o == p ? -1 : 1) * Math.sqrt((Math.pow(l, 2) * Math.pow(m, 2) - Math.pow(l, 2) * Math.pow(q.y, 2) - Math.pow(m, 2) * Math.pow(q.x, 2)) / (Math.pow(l, 2) * Math.pow(q.y, 2) + Math.pow(m, 2) * Math.pow(q.x, 2)));
                                isNaN(s) && (s = 0);
                                var t = new a.Point(s * l * q.y / m, s * -m * q.x / l),
                                    u = new a.Point((h.x + k.x) / 2 + Math.cos(n) * t.x - Math.sin(n) * t.y, (h.y + k.y) / 2 + Math.sin(n) * t.x + Math.cos(n) * t.y),
                                    v = function(a) {
                                        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
                                    },
                                    w = function(a, b) {
                                        return (a[0] * b[0] + a[1] * b[1]) / (v(a) * v(b))
                                    },
                                    x = function(a, b) {
                                        return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(w(a, b))
                                    },
                                    y = x([1, 0], [(q.x - t.x) / l, (q.y - t.y) / m]),
                                    z = [(q.x - t.x) / l, (q.y - t.y) / m],
                                    A = [(-q.x - t.x) / l, (-q.y - t.y) / m],
                                    B = x(z, A);
                                w(z, A) <= -1 && (B = Math.PI), w(z, A) >= 1 && (B = 0), 0 == p && B > 0 && (B -= 2 * Math.PI), 1 == p && 0 > B && (B += 2 * Math.PI);
                                var C = new a.Point(u.x + l * Math.cos((y + (y + B)) / 2), u.y + m * Math.sin((y + (y + B)) / 2));
                                if (c.addMarkerAngle(C, (y + (y + B)) / 2 + (0 == p ? -1 : 1) * Math.PI / 2), c.addMarkerAngle(k, y + B + (0 == p ? -1 : 1) * Math.PI / 2), d.addPoint(k.x, k.y), null != b) {
                                    var w = l > m ? l : m,
                                        D = l > m ? 1 : l / m,
                                        E = l > m ? m / l : 1;
                                    b.translate(u.x, u.y), b.rotate(n), b.scale(D, E), b.arc(0, 0, w, y, y + B, 1 - p), b.scale(1 / D, 1 / E), b.rotate(-n), b.translate(-u.x, -u.y)
                                }
                            }
                            break;
                        case "Z":
                        case "z":
                            null != b && b.closePath(), c.current = c.start
                    }
                    return d
                }, this.getMarkers = function() {
                    for (var a = this.PathParser.getMarkerPoints(), b = this.PathParser.getMarkerAngles(), c = [], d = 0; d < a.length; d++) c.push([a[d], b[d]]);
                    return c
                }
            }, a.Element.path.prototype = new a.Element.PathElementBase, a.Element.pattern = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.createPattern = function(b) {
                    var c = new a.Element.svg;
                    c.attributes.viewBox = new a.Property("viewBox", this.attribute("viewBox").value), c.attributes.x = new a.Property("x", this.attribute("x").value), c.attributes.y = new a.Property("y", this.attribute("y").value), c.attributes.width = new a.Property("width", this.attribute("width").value), c.attributes.height = new a.Property("height", this.attribute("height").value), c.children = this.children;
                    var d = document.createElement("canvas");
                    return document.body.appendChild(d), d.width = this.attribute("width").toPixels("x") + this.attribute("x").toPixels("x"), d.height = this.attribute("height").toPixels("y") + this.attribute("y").toPixels("y"), c.render(d.getContext("2d")), b.createPattern(d, "repeat")
                }
            }, a.Element.pattern.prototype = new a.Element.ElementBase, a.Element.marker = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.baseRender = this.render, this.render = function(b, c, d) {
                    b.translate(c.x, c.y), "auto" == this.attribute("orient").valueOrDefault("auto") && b.rotate(d), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && b.scale(b.lineWidth, b.lineWidth), b.save();
                    var e = new a.Element.svg;
                    e.attributes.viewBox = new a.Property("viewBox", this.attribute("viewBox").value), e.attributes.refX = new a.Property("refX", this.attribute("refX").value), e.attributes.refY = new a.Property("refY", this.attribute("refY").value), e.attributes.width = new a.Property("width", this.attribute("markerWidth").value), e.attributes.height = new a.Property("height", this.attribute("markerHeight").value), e.attributes.fill = new a.Property("fill", this.attribute("fill").valueOrDefault("black")), e.attributes.stroke = new a.Property("stroke", this.attribute("stroke").valueOrDefault("none")), e.children = this.children, e.render(b), b.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && b.scale(1 / b.lineWidth, 1 / b.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && b.rotate(-d), b.translate(-c.x, -c.y)
                }
            }, a.Element.marker.prototype = new a.Element.ElementBase, a.Element.defs = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.render = function() {}
            }, a.Element.defs.prototype = new a.Element.ElementBase, a.Element.GradientBase = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.gradientUnits = this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"), this.stops = [];
                for (var c = 0; c < this.children.length; c++) {
                    var d = this.children[c];
                    this.stops.push(d)
                }
                this.getGradient = function() {}, this.createGradient = function(b, c) {
                    var d = this;
                    this.attribute("xlink:href").hasValue() && (d = this.attribute("xlink:href").getDefinition());
                    var e = this.getGradient(b, c);
                    if (null == e) return d.stops[d.stops.length - 1].color;
                    for (var f = 0; f < d.stops.length; f++) e.addColorStop(d.stops[f].offset, d.stops[f].color);
                    if (this.attribute("gradientTransform").hasValue()) {
                        var g = a.ViewPort.viewPorts[0],
                            h = new a.Element.rect;
                        h.attributes.x = new a.Property("x", -a.MAX_VIRTUAL_PIXELS / 3), h.attributes.y = new a.Property("y", -a.MAX_VIRTUAL_PIXELS / 3), h.attributes.width = new a.Property("width", a.MAX_VIRTUAL_PIXELS), h.attributes.height = new a.Property("height", a.MAX_VIRTUAL_PIXELS);
                        var i = new a.Element.g;
                        i.attributes.transform = new a.Property("transform", this.attribute("gradientTransform").value), i.children = [h];
                        var j = new a.Element.svg;
                        j.attributes.x = new a.Property("x", 0), j.attributes.y = new a.Property("y", 0), j.attributes.width = new a.Property("width", g.width), j.attributes.height = new a.Property("height", g.height), j.children = [i];
                        var k = document.createElement("canvas");
                        k.width = g.width, k.height = g.height;
                        var l = k.getContext("2d");
                        return l.fillStyle = e, j.render(l), l.createPattern(k, "no-repeat")
                    }
                    return e
                }
            }, a.Element.GradientBase.prototype = new a.Element.ElementBase, a.Element.linearGradient = function(b) {
                this.base = a.Element.GradientBase, this.base(b), this.getGradient = function(a, b) {
                    var c = b.getBoundingBox(),
                        d = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
                        e = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
                        f = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
                        g = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
                    return d == f && e == g ? null : a.createLinearGradient(d, e, f, g)
                }
            }, a.Element.linearGradient.prototype = new a.Element.GradientBase, a.Element.radialGradient = function(b) {
                this.base = a.Element.GradientBase, this.base(b), this.getGradient = function(a, b) {
                    var c = b.getBoundingBox();
                    this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
                    var d = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
                        e = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
                        f = d,
                        g = e;
                    this.attribute("fx").hasValue() && (f = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (g = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
                    var h = "objectBoundingBox" == this.gradientUnits ? (c.width() + c.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
                    return a.createRadialGradient(f, g, 0, d, e, h)
                }
            }, a.Element.radialGradient.prototype = new a.Element.GradientBase, a.Element.stop = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.offset = this.attribute("offset").numValue();
                var c = this.style("stop-color");
                this.style("stop-opacity").hasValue() && (c = c.addOpacity(this.style("stop-opacity").value)), this.color = c.value
            }, a.Element.stop.prototype = new a.Element.ElementBase, a.Element.AnimateBase = function(b) {
                this.base = a.Element.ElementBase, this.base(b), a.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function() {
                    var a = this.attribute("attributeType").value,
                        b = this.attribute("attributeName").value;
                    return "CSS" == a ? this.parent.style(b, !0) : this.parent.attribute(b, !0)
                }, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function() {
                    return ""
                }, this.update = function(a) {
                    if (null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) {
                        if ("indefinite" != this.attribute("repeatCount").value) return "remove" != this.attribute("fill").valueOrDefault("remove") || this.removed ? !1 : (this.removed = !0, this.getProperty().value = this.initialValue, !0);
                        this.duration = 0
                    }
                    this.duration = this.duration + a;
                    var b = !1;
                    if (this.begin < this.duration) {
                        var c = this.calcValue();
                        if (this.attribute("type").hasValue()) {
                            var d = this.attribute("type").value;
                            c = d + "(" + c + ")"
                        }
                        this.getProperty().value = c, b = !0
                    }
                    return b
                }, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function() {
                    var b = {
                        progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                    };
                    if (this.values.hasValue()) {
                        var c = b.progress * (this.values.value.length - 1),
                            d = Math.floor(c),
                            e = Math.ceil(c);
                        b.from = new a.Property("from", parseFloat(this.values.value[d])), b.to = new a.Property("to", parseFloat(this.values.value[e])), b.progress = (c - d) / (e - d)
                    } else b.from = this.from, b.to = this.to;
                    return b
                }
            }, a.Element.AnimateBase.prototype = new a.Element.ElementBase, a.Element.animate = function(b) {
                this.base = a.Element.AnimateBase, this.base(b), this.calcValue = function() {
                    var a = this.progress(),
                        b = a.from.numValue() + (a.to.numValue() - a.from.numValue()) * a.progress;
                    return b + this.initialUnits
                }
            }, a.Element.animate.prototype = new a.Element.AnimateBase, a.Element.animateColor = function(b) {
                this.base = a.Element.AnimateBase, this.base(b), this.calcValue = function() {
                    var a = this.progress(),
                        b = new RGBColor(a.from.value),
                        c = new RGBColor(a.to.value);
                    if (b.ok && c.ok) {
                        var d = b.r + (c.r - b.r) * a.progress,
                            e = b.g + (c.g - b.g) * a.progress,
                            f = b.b + (c.b - b.b) * a.progress;
                        return "rgb(" + parseInt(d, 10) + "," + parseInt(e, 10) + "," + parseInt(f, 10) + ")"
                    }
                    return this.attribute("from").value
                }
            }, a.Element.animateColor.prototype = new a.Element.AnimateBase, a.Element.animateTransform = function(b) {
                this.base = a.Element.animate, this.base(b)
            }, a.Element.animateTransform.prototype = new a.Element.animate, a.Element.font = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = [];
                for (var c = 0; c < this.children.length; c++) {
                    var d = this.children[c];
                    "font-face" == d.type ? (this.fontFace = d, d.style("font-family").hasValue() && (a.Definitions[d.style("font-family").value] = this)) : "missing-glyph" == d.type ? this.missingGlyph = d : "glyph" == d.type && ("" != d.arabicForm ? (this.isRTL = !0, this.isArabic = !0, "undefined" == typeof this.glyphs[d.unicode] && (this.glyphs[d.unicode] = []), this.glyphs[d.unicode][d.arabicForm] = d) : this.glyphs[d.unicode] = d)
                }
            }, a.Element.font.prototype = new a.Element.ElementBase, a.Element.fontface = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue()
            }, a.Element.fontface.prototype = new a.Element.ElementBase, a.Element.missingglyph = function(b) {
                this.base = a.Element.path, this.base(b), this.horizAdvX = 0
            }, a.Element.missingglyph.prototype = new a.Element.path, a.Element.glyph = function(b) {
                this.base = a.Element.path, this.base(b), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value
            }, a.Element.glyph.prototype = new a.Element.path, a.Element.text = function(b) {
                if (this.base = a.Element.RenderedElementBase, this.base(b), null != b) {
                    this.children = [];
                    for (var c = 0; c < b.childNodes.length; c++) {
                        var d = b.childNodes[c];
                        1 == d.nodeType ? this.addChild(d, !0) : 3 == d.nodeType && this.addChild(new a.Element.tspan(d), !1)
                    }
                }
                this.baseSetContext = this.setContext, this.setContext = function(a) {
                    this.baseSetContext(a), this.style("dominant-baseline").hasValue() && (a.textBaseline = this.style("dominant-baseline").value), this.style("alignment-baseline").hasValue() && (a.textBaseline = this.style("alignment-baseline").value)
                }, this.renderChildren = function(a) {
                    for (var b = this.style("text-anchor").valueOrDefault("start"), c = this.attribute("x").toPixels("x"), d = this.attribute("y").toPixels("y"), e = 0; e < this.children.length; e++) {
                        var f = this.children[e];
                        f.attribute("x").hasValue() ? f.x = f.attribute("x").toPixels("x") : (this.attribute("dx").hasValue() && (d += this.attribute("dx").toPixels("x")), f.attribute("dx").hasValue() && (c += f.attribute("dx").toPixels("x")), f.x = c);
                        var g = f.measureText(a);
                        if ("start" != b && (0 == e || f.attribute("x").hasValue())) {
                            for (var h = g, i = e + 1; i < this.children.length; i++) {
                                var j = this.children[i];
                                if (j.attribute("x").hasValue()) break;
                                h += j.measureText(a)
                            }
                            f.x -= "end" == b ? h : h / 2
                        }
                        c = f.x + g, f.attribute("y").hasValue() ? f.y = f.attribute("y").toPixels("y") : (this.attribute("dy").hasValue() && (d += this.attribute("dy").toPixels("y")), f.attribute("dy").hasValue() && (d += f.attribute("dy").toPixels("y")), f.y = d), d = f.y, f.render(a)
                    }
                }
            }, a.Element.text.prototype = new a.Element.RenderedElementBase, a.Element.TextElementBase = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b), this.getGlyph = function(a, b, c) {
                    var d = b[c],
                        e = null;
                    if (a.isArabic) {
                        var f = "isolated";
                        (0 == c || " " == b[c - 1]) && c < b.length - 2 && " " != b[c + 1] && (f = "terminal"), c > 0 && " " != b[c - 1] && c < b.length - 2 && " " != b[c + 1] && (f = "medial"), c > 0 && " " != b[c - 1] && (c == b.length - 1 || " " == b[c + 1]) && (f = "initial"), "undefined" != typeof a.glyphs[d] && (e = a.glyphs[d][f], null == e && "glyph" == a.glyphs[d].type && (e = a.glyphs[d]))
                    } else e = a.glyphs[d];
                    return null == e && (e = a.missingGlyph), e
                }, this.renderChildren = function(b) {
                    var c = this.parent.style("font-family").getDefinition();
                    if (null == c) "" != b.strokeStyle && b.strokeText(a.compressSpaces(this.getText()), this.x, this.y), "" != b.fillStyle && b.fillText(a.compressSpaces(this.getText()), this.x, this.y);
                    else {
                        var d = this.parent.style("font-size").numValueOrDefault(a.Font.Parse(a.ctx.font).fontSize),
                            e = this.parent.style("font-style").valueOrDefault(a.Font.Parse(a.ctx.font).fontStyle),
                            f = this.getText();
                        c.isRTL && (f = f.split("").reverse().join(""));
                        for (var g = a.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < f.length; h++) {
                            var i = this.getGlyph(c, f, h),
                                j = d / c.fontFace.unitsPerEm;
                            b.translate(this.x, this.y), b.scale(j, -j);
                            var k = b.lineWidth;
                            b.lineWidth = b.lineWidth * c.fontFace.unitsPerEm / d, "italic" == e && b.transform(1, 0, .4, 1, 0, 0), i.render(b), "italic" == e && b.transform(1, 0, -.4, 1, 0, 0), b.lineWidth = k, b.scale(1 / j, -1 / j), b.translate(-this.x, -this.y), this.x += d * (i.horizAdvX || c.horizAdvX) / c.fontFace.unitsPerEm, "undefined" == typeof g[h] || isNaN(g[h]) || (this.x += g[h])
                        }
                    }
                }, this.getText = function() {}, this.measureText = function(b) {
                    var c = this.parent.style("font-family").getDefinition();
                    if (null != c) {
                        var d = this.parent.style("font-size").numValueOrDefault(a.Font.Parse(a.ctx.font).fontSize),
                            e = 0,
                            f = this.getText();
                        c.isRTL && (f = f.split("").reverse().join(""));
                        for (var g = a.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < f.length; h++) {
                            var i = this.getGlyph(c, f, h);
                            e += (i.horizAdvX || c.horizAdvX) * d / c.fontFace.unitsPerEm, "undefined" == typeof g[h] || isNaN(g[h]) || (e += g[h])
                        }
                        return e
                    }
                    var j = a.compressSpaces(this.getText());
                    if (!b.measureText) return 10 * j.length;
                    b.save(), this.setContext(b);
                    var k = b.measureText(j).width;
                    return b.restore(), k
                }
            }, a.Element.TextElementBase.prototype = new a.Element.RenderedElementBase, a.Element.tspan = function(b) {
                this.base = a.Element.TextElementBase, this.base(b), this.text = 3 == b.nodeType ? b.nodeValue : b.childNodes.length > 0 ? b.childNodes[0].nodeValue : b.text, this.getText = function() {
                    return this.text
                }
            }, a.Element.tspan.prototype = new a.Element.TextElementBase, a.Element.tref = function(b) {
                this.base = a.Element.TextElementBase, this.base(b), this.getText = function() {
                    var a = this.attribute("xlink:href").getDefinition();
                    return null != a ? a.children[0].getText() : void 0
                }
            }, a.Element.tref.prototype = new a.Element.TextElementBase, a.Element.a = function(b) {
                this.base = a.Element.TextElementBase, this.base(b), this.hasText = !0;
                for (var c = 0; c < b.childNodes.length; c++) 3 != b.childNodes[c].nodeType && (this.hasText = !1);
                this.text = this.hasText ? b.childNodes[0].nodeValue : "", this.getText = function() {
                    return this.text
                }, this.baseRenderChildren = this.renderChildren, this.renderChildren = function(b) {
                    if (this.hasText) {
                        this.baseRenderChildren(b);
                        var c = new a.Property("fontSize", a.Font.Parse(a.ctx.font).fontSize);
                        a.Mouse.checkBoundingBox(this, new a.BoundingBox(this.x, this.y - c.toPixels("y"), this.x + this.measureText(b), this.y))
                    } else {
                        var d = new a.Element.g;
                        d.children = this.children, d.parent = this, d.render(b)
                    }
                }, this.onclick = function() {
                    window.open(this.attribute("xlink:href").value)
                }, this.onmousemove = function() {
                    a.ctx.canvas.style.cursor = "pointer"
                }
            }, a.Element.a.prototype = new a.Element.TextElementBase, a.Element.image = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b);
                var c = this.attribute("xlink:href").value,
                    d = c.match(/\.svg$/);
                if (a.Images.push(this), this.loaded = !1, d) this.img = a.ajax(c), this.loaded = !0;
                else {
                    this.img = document.createElement("img");
                    var e = this;
                    this.img.onload = function() {
                        e.loaded = !0
                    }, this.img.onerror = function() {
                        console && console.log('ERROR: image "' + c + '" not found'), e.loaded = !0
                    }, this.img.src = c
                }
                this.renderChildren = function(b) {
                    var c = this.attribute("x").toPixels("x"),
                        e = this.attribute("y").toPixels("y"),
                        f = this.attribute("width").toPixels("x"),
                        g = this.attribute("height").toPixels("y");
                    0 != f && 0 != g && (b.save(), d ? b.drawSvg(this.img, c, e, f, g) : (b.translate(c, e), a.AspectRatio(b, this.attribute("preserveAspectRatio").value, f, this.img.width, g, this.img.height, 0, 0), b.drawImage(this.img, 0, 0)), b.restore())
                }
            }, a.Element.image.prototype = new a.Element.RenderedElementBase, a.Element.g = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b), this.getBoundingBox = function() {
                    for (var b = new a.BoundingBox, c = 0; c < this.children.length; c++) b.addBoundingBox(this.children[c].getBoundingBox());
                    return b
                }
            }, a.Element.g.prototype = new a.Element.RenderedElementBase, a.Element.symbol = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b), this.baseSetContext = this.setContext, this.setContext = function(b) {
                    if (this.baseSetContext(b), this.attribute("viewBox").hasValue()) {
                        var c = a.ToNumberArray(this.attribute("viewBox").value),
                            d = c[0],
                            e = c[1];
                        width = c[2], height = c[3], a.AspectRatio(b, this.attribute("preserveAspectRatio").value, this.attribute("width").toPixels("x"), width, this.attribute("height").toPixels("y"), height, d, e), a.ViewPort.SetCurrent(c[2], c[3])
                    }
                }
            }, a.Element.symbol.prototype = new a.Element.RenderedElementBase, a.Element.style = function(b) {
                this.base = a.Element.ElementBase, this.base(b);
                var c = b.childNodes[0].nodeValue + (b.childNodes.length > 1 ? b.childNodes[1].nodeValue : "");
                c = c.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""), c = a.compressSpaces(c);
                for (var d = c.split("}"), e = 0; e < d.length; e++)
                    if ("" != a.trim(d[e]))
                        for (var f = d[e].split("{"), g = f[0].split(","), h = f[1].split(";"), i = 0; i < g.length; i++) {
                            var j = a.trim(g[i]);
                            if ("" != j) {
                                for (var k = {}, l = 0; l < h.length; l++) {
                                    var m = h[l].indexOf(":"),
                                        n = h[l].substr(0, m),
                                        o = h[l].substr(m + 1, h[l].length - m);
                                    null != n && null != o && (k[a.trim(n)] = new a.Property(a.trim(n), a.trim(o)))
                                }
                                if (a.Styles[j] = k, "@font-face" == j)
                                    for (var p = k["font-family"].value.replace(/"/g, ""), q = k.src.value.split(","), r = 0; r < q.length; r++)
                                        if (q[r].indexOf('format("svg")') > 0)
                                            for (var s = q[r].indexOf("url"), t = q[r].indexOf(")", s), u = q[r].substr(s + 5, t - s - 6), v = a.parseXml(a.ajax(u)), w = v.getElementsByTagName("font"), x = 0; x < w.length; x++) {
                                                var y = a.CreateElement(w[x]);
                                                a.Definitions[p] = y
                                            }
                            }
                        }
            }, a.Element.style.prototype = new a.Element.ElementBase, a.Element.use = function(b) {
                this.base = a.Element.RenderedElementBase, this.base(b), this.baseSetContext = this.setContext, this.setContext = function(a) {
                    this.baseSetContext(a), this.attribute("x").hasValue() && a.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && a.translate(0, this.attribute("y").toPixels("y"))
                }, this.getDefinition = function() {
                    var a = this.attribute("xlink:href").getDefinition();
                    return this.attribute("width").hasValue() && (a.attribute("width", !0).value = this.attribute("width").value), this.attribute("height").hasValue() && (a.attribute("height", !0).value = this.attribute("height").value), a
                }, this.path = function(a) {
                    var b = this.getDefinition();
                    null != b && b.path(a)
                }, this.renderChildren = function(a) {
                    var b = this.getDefinition();
                    if (null != b) {
                        var c = b.parent;
                        b.parent = null, b.render(a), b.parent = c
                    }
                }
            }, a.Element.use.prototype = new a.Element.RenderedElementBase, a.Element.mask = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.apply = function(a, b) {
                    var c = this.attribute("x").toPixels("x"),
                        d = this.attribute("y").toPixels("y"),
                        e = this.attribute("width").toPixels("x"),
                        f = this.attribute("height").toPixels("y"),
                        g = b.attribute("mask").value;
                    b.attribute("mask").value = "";
                    var h = document.createElement("canvas");
                    h.width = c + e, h.height = d + f;
                    var i = h.getContext("2d");
                    this.renderChildren(i);
                    var j = document.createElement("canvas");
                    j.width = c + e, j.height = d + f;
                    var k = j.getContext("2d");
                    b.render(k), k.globalCompositeOperation = "destination-in", k.fillStyle = i.createPattern(h, "no-repeat"), k.fillRect(0, 0, c + e, d + f), a.fillStyle = k.createPattern(j, "no-repeat"), a.fillRect(0, 0, c + e, d + f), b.attribute("mask").value = g
                }, this.render = function() {}
            }, a.Element.mask.prototype = new a.Element.ElementBase, a.Element.clipPath = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.apply = function(a) {
                    for (var b = 0; b < this.children.length; b++) this.children[b].path && (this.children[b].path(a), a.clip())
                }, this.render = function() {}
            }, a.Element.clipPath.prototype = new a.Element.ElementBase, a.Element.filter = function(b) {
                this.base = a.Element.ElementBase, this.base(b), this.apply = function(a, b) {
                    var c = b.getBoundingBox(),
                        d = this.attribute("x").toPixels("x"),
                        e = this.attribute("y").toPixels("y");
                    (0 == d || 0 == e) && (d = c.x1, e = c.y1);
                    var f = this.attribute("width").toPixels("x"),
                        g = this.attribute("height").toPixels("y");
                    (0 == f || 0 == g) && (f = c.width(), g = c.height());
                    var h = b.style("filter").value;
                    b.style("filter").value = "";
                    var i = .2,
                        j = i * f,
                        k = i * g,
                        l = document.createElement("canvas");
                    l.width = f + 2 * j, l.height = g + 2 * k;
                    var m = l.getContext("2d");
                    m.translate(-d + j, -e + k), b.render(m);
                    for (var n = 0; n < this.children.length; n++) this.children[n].apply(m, 0, 0, f + 2 * j, g + 2 * k);
                    a.drawImage(l, 0, 0, f + 2 * j, g + 2 * k, d - j, e - k, f + 2 * j, g + 2 * k), b.style("filter", !0).value = h
                }, this.render = function() {}
            }, a.Element.filter.prototype = new a.Element.ElementBase, a.Element.feGaussianBlur = function(b) {
                function c(a) {
                    a = Math.max(a, .01);
                    var b = Math.ceil(4 * a) + 1;
                    mask = [];
                    for (var c = 0; b > c; c++) mask[c] = Math.exp(-.5 * (c / a) * (c / a));
                    return mask
                }

                function d(a) {
                    for (var b = 0, c = 1; c < a.length; c++) b += Math.abs(a[c]);
                    b = 2 * b + Math.abs(a[0]);
                    for (var c = 0; c < a.length; c++) a[c] /= b;
                    return a
                }

                function e(a, b, c, d, e) {
                    for (var h = 0; e > h; h++)
                        for (var i = 0; d > i; i++)
                            for (var j = f(a, i, h, d, e, 3) / 255, k = 0; 4 > k; k++) {
                                for (var l = c[0] * (0 == j ? 255 : f(a, i, h, d, e, k)) * (0 == j || 3 == k ? 1 : j), m = 1; m < c.length; m++) {
                                    var n = f(a, Math.max(i - m, 0), h, d, e, 3) / 255,
                                        o = f(a, Math.min(i + m, d - 1), h, d, e, 3) / 255;
                                    l += c[m] * ((0 == n ? 255 : f(a, Math.max(i - m, 0), h, d, e, k)) * (0 == n || 3 == k ? 1 : n) + (0 == o ? 255 : f(a, Math.min(i + m, d - 1), h, d, e, k)) * (0 == o || 3 == k ? 1 : o))
                                }
                                g(b, h, i, e, d, k, l)
                            }
                }

                function f(a, b, c, d, e, f) {
                    return a[c * d * 4 + 4 * b + f]
                }

                function g(a, b, c, d, e, f, g) {
                    a[c * d * 4 + 4 * b + f] = g
                }

                function h(a, b, f, g) {
                    var h = a.getImageData(0, 0, b, f),
                        i = c(g);
                    i = d(i), tmp = [], e(h.data, tmp, i, b, f), e(tmp, h.data, i, f, b), a.clearRect(0, 0, b, f), a.putImageData(h, 0, 0)
                }
                this.base = a.Element.ElementBase, this.base(b), this.apply = function(a, b, c, d, e) {
                    h(a, d, e, this.attribute("stdDeviation").numValue())
                }
            }, a.Element.filter.prototype = new a.Element.feGaussianBlur, a.Element.title = function() {}, a.Element.title.prototype = new a.Element.ElementBase, a.Element.desc = function() {}, a.Element.desc.prototype = new a.Element.ElementBase, a.Element.MISSING = function(a) {
                console && console.log("ERROR: Element '" + a.nodeName + "' not yet implemented.")
            }, a.Element.MISSING.prototype = new a.Element.ElementBase, a.CreateElement = function(b) {
                var c = b.nodeName.replace(/^[^:]+:/, "");
                c = c.replace(/\-/g, "");
                var d = null;
                return d = "undefined" != typeof a.Element[c] ? new a.Element[c](b) : new a.Element.MISSING(b), d.type = b.nodeName, d
            }, a.load = function(b, c) {
                a.loadXml(b, a.ajax(c))
            }, a.loadXml = function(b, c) {
                a.loadXmlDoc(b, a.parseXml(c))
            }, a.loadXmlDoc = function(b, c) {
                a.init(b);
                var d = function(a) {
                    for (var c = b.canvas; c;) a.x -= c.offsetLeft, a.y -= c.offsetTop, c = c.offsetParent;
                    return window.scrollX && (a.x += window.scrollX), window.scrollY && (a.y += window.scrollY), a
                };
                1 != a.opts.ignoreMouse && (b.canvas.onclick = function(b) {
                    var c = d(new a.Point(null != b ? b.clientX : event.clientX, null != b ? b.clientY : event.clientY));
                    a.Mouse.onclick(c.x, c.y)
                }, b.canvas.onmousemove = function(b) {
                    var c = d(new a.Point(null != b ? b.clientX : event.clientX, null != b ? b.clientY : event.clientY));
                    a.Mouse.onmousemove(c.x, c.y)
                });
                var e = a.CreateElement(c.documentElement);
                e.root = !0;
                var f = !0,
                    g = function() {
                        a.ViewPort.Clear(), b.canvas.parentNode && a.ViewPort.SetCurrent(b.canvas.parentNode.clientWidth, b.canvas.parentNode.clientHeight), 1 != a.opts.ignoreDimensions && (e.style("width").hasValue() && (b.canvas.width = e.style("width").toPixels("x"), b.canvas.style.width = b.canvas.width + "px"), e.style("height").hasValue() && (b.canvas.height = e.style("height").toPixels("y"), b.canvas.style.height = b.canvas.height + "px"));
                        var c = b.canvas.clientWidth || b.canvas.width,
                            d = b.canvas.clientHeight || b.canvas.height;
                        if (1 == a.opts.ignoreDimensions && e.style("width").hasValue() && e.style("height").hasValue() && (c = e.style("width").toPixels("x"), d = e.style("height").toPixels("y")), a.ViewPort.SetCurrent(c, d), null != a.opts.offsetX && (e.attribute("x", !0).value = a.opts.offsetX), null != a.opts.offsetY && (e.attribute("y", !0).value = a.opts.offsetY), null != a.opts.scaleWidth && null != a.opts.scaleHeight) {
                            var g = 1,
                                h = 1,
                                i = a.ToNumberArray(e.attribute("viewBox").value);
                            e.attribute("width").hasValue() ? g = e.attribute("width").toPixels("x") / a.opts.scaleWidth : isNaN(i[2]) || (g = i[2] / a.opts.scaleWidth), e.attribute("height").hasValue() ? h = e.attribute("height").toPixels("y") / a.opts.scaleHeight : isNaN(i[3]) || (h = i[3] / a.opts.scaleHeight), e.attribute("width", !0).value = a.opts.scaleWidth, e.attribute("height", !0).value = a.opts.scaleHeight, e.attribute("viewBox", !0).value = "0 0 " + c * g + " " + d * h, e.attribute("preserveAspectRatio", !0).value = "none"
                        }
                        1 != a.opts.ignoreClear && b.clearRect(0, 0, c, d), e.render(b), f && (f = !1, "function" == typeof a.opts.renderCallback && a.opts.renderCallback())
                    },
                    h = !0;
                a.ImagesLoaded() && (h = !1, g()), a.intervalID = setInterval(function() {
                    var b = !1;
                    if (h && a.ImagesLoaded() && (h = !1, b = !0), 1 != a.opts.ignoreMouse && (b |= a.Mouse.hasEvents()), 1 != a.opts.ignoreAnimation)
                        for (var c = 0; c < a.Animations.length; c++) b |= a.Animations[c].update(1e3 / a.FRAMERATE);
                    "function" == typeof a.opts.forceRedraw && 1 == a.opts.forceRedraw() && (b = !0), b && (g(), a.Mouse.runEvents())
                }, 1e3 / a.FRAMERATE)
            }, a.stop = function() {
                a.intervalID && clearInterval(a.intervalID)
            }, a.Mouse = new function() {
                this.events = [], this.hasEvents = function() {
                    return 0 != this.events.length
                }, this.onclick = function(a, b) {
                    this.events.push({
                        type: "onclick",
                        x: a,
                        y: b,
                        run: function(a) {
                            a.onclick && a.onclick()
                        }
                    })
                }, this.onmousemove = function(a, b) {
                    this.events.push({
                        type: "onmousemove",
                        x: a,
                        y: b,
                        run: function(a) {
                            a.onmousemove && a.onmousemove()
                        }
                    })
                }, this.eventElements = [], this.checkPath = function(a, b) {
                    for (var c = 0; c < this.events.length; c++) {
                        var d = this.events[c];
                        b.isPointInPath && b.isPointInPath(d.x, d.y) && (this.eventElements[c] = a)
                    }
                }, this.checkBoundingBox = function(a, b) {
                    for (var c = 0; c < this.events.length; c++) {
                        var d = this.events[c];
                        b.isPointInBox(d.x, d.y) && (this.eventElements[c] = a)
                    }
                }, this.runEvents = function() {
                    a.ctx.canvas.style.cursor = "";
                    for (var b = 0; b < this.events.length; b++)
                        for (var c = this.events[b], d = this.eventElements[b]; d;) c.run(d), d = d.parent;
                    this.events = [], this.eventElements = []
                }
            }, a
        }
        this.canvg = function(b, c, d) {
            if (null != b || null != c || null != d) {
                d = d || {}, "string" == typeof b && (b = document.getElementById(b)), null != b.svg && b.svg.stop(), b.svg = svg = a(), svg.opts = d;
                var e = b.getContext("2d");
                "undefined" != typeof c.documentElement ? svg.loadXmlDoc(e, c) : "<" == c.substr(0, 1) ? svg.loadXml(e, c) : svg.load(e, c)
            } else
                for (var f = document.getElementsByTagName("svg"), g = 0; g < f.length; g++) {
                    var h = f[g],
                        i = document.createElement("canvas");
                    i.width = h.clientWidth, i.height = h.clientHeight, h.parentNode.insertBefore(i, h), h.parentNode.removeChild(h);
                    var j = document.createElement("div");
                    j.appendChild(h), canvg(i, j.innerHTML)
                }
        }
    }(), CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function(a, b, c, d, e) {
        canvg(this.canvas, a, {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0,
            ignoreClear: !0,
            offsetX: b,
            offsetY: c,
            scaleWidth: d,
            scaleHeight: e
        })
    });
var svgenie = function() {
    "use strict";

    function a(a) {
        var b = document.createEvent("MouseEvents");
        return b.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
    }
    var b = function(a) {
            return "undefined" != typeof window.XMLSerializer ? (new window.XMLSerializer).serializeToString(a) : "undefined" != typeof a.xml ? a.xml : ""
        },
        c = function(a, c, d) {
            "string" == typeof a && ("#" == a.substr(0, 1) && (a = a.substr(1)), a = document.getElementById(a));
            var e = document.createElement("canvas");
            e.setAttribute("height", a.offsetHeight), e.setAttribute("width", a.offsetWidth), canvg(e, b(a), {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                renderCallback: function() {
                    d(e)
                }
            })
        },
        d = function(a, b, d) {
            c(a, b, function(a) {
                d(a.toDataURL("image/png"), a)
            })
        },
        e = function(a, b) {
            d(a, b, function(a, c) {
                f({
                    data: a,
                    canvas: c,
                    name: b.name || "image.png"
                })
            })
        },
        f = function(b) {
            var c = document.createElement("a");
            return null != c.download ? (c.href = b.data, c.download = b.name, void a(c)) : window.navigator.msSaveBlob ? void b.canvas.toBlob(function(a) {
                window.navigator.msSaveBlob && window.navigator.msSaveBlob(a, b.name)
            }, "image/png") : void 0
        };
    return {
        save: e,
        toCanvas: c,
        toDataURL: d
    }
}();
! function() {
    angular.module("CIC", []).factory("spanel", function() {
        return {}
    }).controller("MenuController", ["spanel", function(a) {
        this.accessMoreData = function() {
            a.toggleShowing("accessMoreData")
        }
    }]).controller("PanelController", ["$scope", "spanel", function(a, b) {
        var c = a.panel;
        c.NUM_HELP_TABS = 6, c.visible = !0, c.showOnMapVisible = !1, c.printVisible = !1, c.currentText = "update", c.currentHelpTab = 1, c.setVisible = function(a) {
            c.visible = a
        }, c.isShowing = function(a) {
            return c.currentText === a
        }, c.toggleShowing = function(a) {
            c.currentText === a ? c.setVisible(!c.visible) : (c.setVisible(!0), c.currentText = a)
        }, c.selectHelpTab = function(a) {
            a > 0 && a <= c.NUM_HELP_TABS && (c.currentHelpTab = a)
        }, c.incrementHelpTab = function(a) {
            var b = c.currentHelpTab + a;
            b > 0 && b <= c.NUM_HELP_TABS && (c.currentHelpTab += a)
        }, c.isHelpSelected = function(a) {
            return c.currentHelpTab === a
        }, c.goToIndicator = function(a, b) {
            b = b.replace("â€™", "'"), c.setVisible(!1), CIC.update(a, b), ga("send", "event", "map a new indicator", a, b)
        }, b.toggleShowing = c.toggleShowing
    }]).controller("MainController", function() {}).directive("indicatorList", function() {
        return {
            restrict: "A",
            templateUrl: "assets/indicatorList.html",
            link: function(a, b) {
                var c = $(b).closest(".nav");
                c.smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                }), c.find(".sub-arrow").first().hide()
            }
        }
    }).directive("overlay", function() {
        return {
            restrict: "E",
            templateUrl: "assets/overlay.html"
        }
    }).directive("mailingForm", function() {
        return {
            restrict: "E",
            templateUrl: "assets/mailingForm.html"
        }
    }).directive("stateList", function() {
        return {
            restrict: "A",
            templateUrl: "assets/stateList.html"
        }
    }).directive("socialButtons", function() {
        return {
            restrict: "A",
            templateUrl: "assets/socialButtons.html"
        }
    })
}();
var colorlegend = function(a, b, c, d) {
    for (var e = ["linear", "quantile", "ordinal"], f = !1, g = d || {}, h = g.dataType || "level", i = g.boxWidth || 20, j = g.boxHeight || 20, k = g.title || null, l = g.fill || !1, m = (g.linearBoxes || 9, "level" === h || "level_np" === h || "percent" === h), n = g.unit || "", o = g.supressMinMax || !1, p = document.getElementById("#" === a.substring(0, 1) ? a.substring(1, a.length) : a), q = p.offsetWidth, r = p.offsetHeight, s = [], t = [0, 4, 10, 0], u = "ordinal" === c ? 3 : 0, v = k ? 22 : 0, w = 10, x = b.domain(), y = b.range(), z = g.measure_type, A = g.small_large || !1, B = g.format_type || !1, C = g.formatFnArr, D = 0; D < e.length; D++)
        if (e[D] === c) {
            f = !0;
            break
        }
    if (!f) throw new Error("Scale type, " + c + ", is not supported.");
    "categorical" === h && (i += 20);
    for (var D = 0; D < y.length; D++) s[D] = y[D];
    "quartile" === z && s.unshift(level_colors[0]), (l || q < (i + u) * s.length + t[1] + t[3]) && (i = (q - t[1] - t[3] - u * s.length) / s.length), (l || r < j + t[0] + t[2] + v) && (j = r - t[0] - t[2] - v);
    var E = d3.select(a).append("svg").attr("width", q).attr("height", r),
        F = E.append("g").attr("class", "colorlegend").style("font-size", ".76em").style("fill", "#666");
    F.reposition = function() {
        E.attr("width", p.offsetWidth).attr("height", p.offsetHeight), F.attr("transform", "translate(" + (t[3] + p.offsetWidth / 2 - i * s.length / 2) + "," + t[0] + ")")
    }, F.reposition();
    var G = [];
    if (m)
        if ("threshold" === z) {
            G.push("level" === h ? 0 : A[0]);
            for (var D = 0; D < x.length; D++) G.push(x[D]);
            G.push(A[1] <= x[x.length - 1] ? x[x.length - 1] + 1 : A[1])
        } else if ("quartile" === z) {
        var H = b.quantiles();
        G.push(0), G.push("percent" === h ? 1e-5 : 1);
        for (var D = 0; D < H.length; D++) G.push(H[D]);
        G.push(x[x.length - 1])
    } else {
        var H = b.quantiles();
        G.push("level" === h ? 0 : x[0]);
        for (var D = 0; D < H.length; D++) G.push(H[D]);
        G.push(x[x.length - 1])
    } else
        for (var I = 0; I < s.length; I++)
            for (var J in d.keyArray)
                if (d.keyArray[J] === I) {
                    G.push(J);
                    break
                } if ("string" == typeof G[0])
        for (var K = 0; K < G.length; K++) "Low Skills Equilibrium" === G[K] ? G[K] = "Low Skills" : "High Skills Equilibrium" === G[K] && (G[K] = "High Skills");
    "binary" === h && (s = [binary_colors[1], binary_colors[0]], G = ["Yes", "No"]);
    var L = F.selectAll("g.legend").data(G).enter().append("g");
    return L.append("rect").attr("width", i).attr("height", j).attr("x", function(a, b) {
        return b * (i + u)
    }).attr("y", w).style("fill", function(a, b) {
        return s[b]
    }).style("display", function(a, b) {
        return b >= s.length ? "none" : void 0
    }), m && "quintile" === z && L.append("text").attr("class", "colorlegend-boxlabels").attr("x", function(a, b) {
        return b * (i + u) + i / 2
    }).attr("y", w + 13).style("text-anchor", "middle").style("pointer-events", "none").style("fill", function(a, b) {
        return 0 === b ? "black" : 4 === b ? "white" : void 0
    }).text(function(a, b) {
        return 0 === b ? "bottom 20%" : 4 === b ? "top 20%" : void 0
    }), L.append("text").attr("class", "colorlegend-labels").attr("dy", ".71em").attr("x", function(a, b) {
        var c = b * (i + u);
        return m ? c : c + i / 2
    }).attr("y", w + j + 4).style("text-anchor", function() {
        return "ordinal" === c ? "start" : "middle"
    }).style("pointer-events", "none").text(function(a, b) {
        return "ordinal" === c ? G[b] : o & 0 == b || o & 5 == b ? " " : B === !1 ? C[h](G[b], n) : C[B](G[b], n)
    }), k && F.append("text").attr("class", "colorlegend-title").attr("x", s.length * (i / 2)).attr("y", w + j + v).attr("dy", ".71em").style("text-anchor", "middle").style("pointer-events", "none").text(k), F
};
$.noty.defaults.layout = "center", $.noty.defaults.killer = !0, $.noty.defaults.timeout = 3e3, $.noty.defaults.closeWith = ["click", "button"], $.noty.defaults.template = '<div class="noty_message"><div class="noty_text"></div><div class="noty_close"></div></div>';
var na_color = "rgb(204,204,204)",
    highlight_color = "rgb(225,0,0)",
    percent_colors = ["rgb(255,204,102)", "rgb(255,153,51)", "rgb(49,130,189)", "rgb(7,81,156)", "rgb(28,53,99)"],
    binary_colors = ["rgb(28,53,99)", "rgb(255,153,51)"],
    categorical_colors = ["rgb(255,204,102)", "rgb(255,153,51)", "rgb(49,130,189)", "rgb(7,81,156)", "rgb(28,53,99)"],
    level_colors = ["rgb(255,204,102)", "rgb(255,153,51)", "rgb(49,130,189)", "rgb(7,81,156)", "rgb(28,53,99)"],
    neighbor_colors = d3.scale.category10();
CIC = {},
    function() {
        var a, b, c, d, e, f, g, h, i, j, k = !1,
            l = "County Economic Tracker",
            m = "Recovered on # Indicators",
            n = d3.behavior.zoom().scaleExtent([1, 10]),
            o = document.getElementById("container").offsetWidth - 90,
            p = o / 2,
            q = $(window).width(),
            r = $(window).height(),
            s = $("#container").offset(),
            t = d3.select("#tt"),
            u = d3.select("#tipContainer"),
            v = "",
            w = "",
            x = "",
            y = !1,
            z = {},
            A = "countySearch",
            B = "State",
            C = "quintile",
            D = [],
            E = [],
            F = [],
            G = [],
            H = [],
            I = [],
            J = {},
            K = {},
            L = {},
            M = !1,
            N = [],
            O = function(a, b) {
                var f = d3.geo.albersUsa().translate([0, 0]).scale(1 * a);
                c = d3.geo.path().projection(f), d = d3.select("#map").insert("svg", "div").attr("width", a).attr("height", b).attr("id", "map-svg").append("g").attr("transform", "translate(" + a / 2 + "," + b / 2 + ")").call(n).on("dblclick.zoom", null), e = d.append("g").attr("class", "counties"), $("#undermap").width(a), i = 1, j = [0, 0], n.scale(i), n.translate(j), n.on("zoom", function() {
                    M = !1, t.classed("hidden", !0), qb();
                    var c = d3.event.translate,
                        d = d3.event.scale;
                    c[0] = Math.min(a / 2 * (d - 1), Math.max(a / 2 * (1 - d), c[0])), c[1] = Math.min(b / 2 * (d - 1), Math.max(b / 2 * (1 - d), c[1]));
                    var e = !(d === i);
                    sb(c, d, e)
                }), 768 >= q ? ($("#secondIndLi").hide(), T()) : $("#secondIndLi").show(), ub(), tb()
            },
            P = function(a, b) {
                var d = e.selectAll(".county").data(a);
                d.enter().insert("path").attr("class", "county").attr("d", c).attr("id", function(a) {
                    return a.id
                }), e.append("path").datum(b).attr("id", "state-borders").attr("d", c);
                var f = -1;
                d.on("mousedown", function() {
                    f = $.now()
                });
                var g = function(a, b) {
                    if (pb(a), Ab(), d3.select(".county.active").empty() !== !0) {
                        M = !0;
                        var c = CIC.executeSearchMatch(b.target.id);
                        c === !1 ? M = !1 : c.each("end.bool", function() {
                            M = !1
                        })
                    }
                };
                $("html").hasClass("no-touch") ? (d.each(function(a) {
                    a.clickCount = 0
                }), d.on("click", function(a) {
                    if ($.now() - f < 300) {
                        d3.event.stopPropagation();
                        var b = d3.event;
                        a.clickCount++, 1 === a.clickCount ? singleClickTimer = setTimeout(function() {
                            a.clickCount = 0, M || g(a, b)
                        }, 300) : 2 === a.clickCount && (clearTimeout(singleClickTimer), a.clickCount = 0, pb(a), nb(a.id))
                    }
                })) : (d.on("click", function(a) {
                    $.now() - f < 300 && (d3.event.stopPropagation(), M || g(a, d3.event))
                }), $(".county").addSwipeEvents().bind("doubletap", function(a) {
                    a.stopPropagation(), M = !1, nb(a.target.id)
                }))
            },
            Q = function() {
                d3.select("#map").on("click", qb), d3.select("#showOnMap").on("click", function() {
                    if (Ab(), d3.select(".county.active").empty() !== !0) {
                        var a = document.getElementsByClassName("county active")[0],
                            b = ob(a.id);
                        lb(a), b.each("end", function() {
                            mb(a), t.classed("hidden", !1)
                        })
                    }
                }), d3.select("#print").on("click", function() {
                    var a = "";
                    null !== h ? (a = K[h.id].geography.split(",")[0], a += " Information, NACo Research") : a = "County Information, NACo Research";
                    var b = window.open("", a, "left=0,top=0,toolbar=0,scrollbars=0,status=0");
                    b.document.write(document.getElementById("instruction-content").innerHTML), b.document.write('<link rel="stylesheet" media="print" href="css/main.css">'), b.document.close(), b.focus(), b.print(), b.close()
                }), U(), V(), W(), R(), vb(), S()
            },
            R = function() {
                $("#backToMapIcon, #backToMapIconText").on("click", function(a) {
                    a.stopPropagation(), t.classed("hidden", !0), qb(), sb([0, 0], 1)
                }), $("#resetAllIcon, #resetAllIconText").on("click", function(a) {
                    a.stopPropagation(), T()
                }), $(".share-toggle").on("click", function(a) {
                    a.stopPropagation();
                    var b = "http://twitter.com/home?status=See%20",
                        c = "%20data%20for%20your%20county%20by%20@NACoTweets%20%23NACoCIC%20www.naco.org%2FCIC",
                        d = w.indexOf(" - "),
                        e = encodeURIComponent(w.substring(0, d));
                    if ($(".rrssb-buttons").is(":visible")) {
                        var f = d3.select("#rrssbContainer").transition().duration(500).style("right", "-200px");
                        f.each("end", function() {
                            $(".rrssb-buttons").hide()
                        })
                    } else $(".rrssb-buttons").show(), d3.select("#twitterContent").attr("href", b + e + c), d3.select("#rrssbContainer").transition().duration(500).style("right", "80px")
                })
            },
            S = function() {
                $("#perCapitaButton").on("click", function() {
                    if (NProgress.start(), $(this).button("toggle"), $(this).hasClass("active")) {
                        y = !0;
                        var a = H[0].year,
                            b = function() {
                                for (var b = 0; b < F[0].length; b++) F[0][b] && (F[0][b] /= z[a][b])
                            };
                        if (z.hasOwnProperty(a)) b(), ab();
                        else if (z[a] = {}, k) d3.tsv("data/local_data.tsv", function(c, d) {
                            for (var e = 0; e < d.length; e++) z[a][d[e].id] = +d[e]["Population Levels and Trends - Population Level"];
                            b(), ab()
                        });
                        else {
                            var c = "db_set=Demographics&db_ind=Pop_LT_Population&db_year=" + a;
                            d3.xhr("/ciccfm/indicators.cfm?" + c, function(c, d) {
                                for (var e = jQuery.parseJSON(d.responseText), f = e.DATA.POP_LT_POPULATION, g = 0; g < f.length; g++) z[a][+e.DATA.FIPS[g]] = +f[g];
                                b(), ab()
                            })
                        }
                    } else {
                        y = !1, this.blur();
                        for (var d = 0; d < F[0].length; d++) F[0][d] && (F[0][d] *= z[H[0].year][d]);
                        ab()
                    }
                    NProgress.done()
                }), $("#quantileButton").on("click", function() {
                    $("#thresholdButton").hasClass("active") && (NProgress.start(), $(this).button("toggle"), $("#thresholdButton").button("toggle"), $("#thresholdInputContainer").hide(), ab(), NProgress.done())
                }), $("#thresholdButton").on("click", function() {
                    $("#quantileButton").hasClass("active") && (NProgress.start(), $("#quantileButton").button("toggle"), $(this).button("toggle"), N = bb(color.domain(), color.range()), hb(), g = jb("threshold", null, N), cb(), NProgress.done())
                }), $("#thresholdSubmit").on("click", function() {
                    NProgress.start();
                    for (var a = [], b = 1; 4 >= b; b++) a.push(+$("#thresholdInput" + b).val());
                    for (var b = 1; b < a.length; b++)
                        if (a[b] <= a[b - 1]) return void noty({
                            text: "Invalid threshold values. Please try again."
                        });
                    return a[0] <= N[0] || a[3] >= N[1] ? void noty({
                        text: "Invalid threshold values. Please try again."
                    }) : (color.domain(a), g = jb("threshold", null, N), hb(), void NProgress.done())
                })
            },
            T = function() {
                "" !== x && (x = "", d3.select(".county.active").empty() !== !0 && (lb(h), mb(d3.select(".county.active")[0][0])))
            },
            U = function() {
                $(".dataset.disabled").find(".indicator").parent().addClass("disabled"), $(".category.disabled").find(".dataset").addClass("disabled"), $(".category.disabled").find(".indicator").parent().addClass("disabled")
            },
            V = function() {
                var a = function(a, b) {
                        $.SmartMenus.hideAll(), Ab(), w === a + " - " + b || (CIC.update(a, b), ga("send", "event", "map an indicator", a, b))
                    },
                    b = function(a, b) {
                        $.SmartMenus.hideAll(), Ab(), x === a + " - " + b || (Z(a, b), ga("send", "event", "compare an indicator", a, b))
                    },
                    c = function(a, b) {
                        d3.select(a).selectAll(".dataset").each(function() {
                            var a = d3.select(this),
                                c = a.attr("name");
                            $("html").hasClass("no-touch") && a.selectAll("a:not(.indicator)").on("click", function() {
                                var d = CIC.getInfo(c).companions[0],
                                    e = a.select('.indicator[name="' + d[1] + '"]').html();
                                b(d[0], d[1], e)
                            }), a.selectAll("li").on("click", function() {
                                if (d3.select(this).classed("disabled")) d3.event.stopPropagation(), $.SmartMenus.hideAll();
                                else {
                                    var a = d3.select(this).select(".indicator").attr("name");
                                    b(c, a, this.innerHTML)
                                }
                            })
                        })
                    };
                c("#primeInd", a), c("#secondInd", b), d3.selectAll(".dataset a").style("cursor", "pointer"), d3.selectAll(".dataset.disabled a:first-child").style("cursor", "default"), d3.selectAll(".dataset").selectAll("li .disabled").selectAll(".indicator").style("cursor", "default")
            },
            W = function() {
                var a = d3.select("#search-field"),
                    b = d3.select("#state-drop-container");
                d3.select("#search-submit").on("click", X), $("#searchTypes .btn").on("click", function() {
                    $("#" + A).button("toggle"), A = $(this).attr("id"), $(this).button("toggle"), "stateSearch" === A ? (b.classed("hidden", !1), a.classed("hidden", !0)) : (b.classed("hidden", !0), a.classed("hidden", !1), a.attr("placeholder", $(this).attr("name")))
                }), d3.select("#stateDrop").selectAll("a").on("click", function() {
                    B !== this.name && (B = this.name, d3.select("#stateDropText").html(B + '<span class="sub-arrow"></span>')), "stateSearch" === A && "State" !== B && X()
                })
            },
            X = function() {
                d3.event.preventDefault(); {
                    var a = d3.select("#search-field").property("value");
                    d3.select("#container")
                }
                if ("stateSearch" === A) "MA" === B || "RI" === B || "CT" === B ? noty({
                    text: "No county data available for this state."
                }) : (state_search_str = "state.cfm?statecode=" + B, Y(state_search_str));
                else if ("countySearch" === A) {
                    if ("" === a) return void noty({
                        text: "Enter a county name to search."
                    });
                    var b = a,
                        c = "";
                    if (-1 !== a.indexOf(",")) {
                        var d = a.split(",");
                        c = d[1].trim().toUpperCase(), b = d[0].trim()
                    }
                    for (var e = ["county", "city", "borough", "parish"], f = 0; f < e.length; f++) - 1 !== b.indexOf(e[f]) && (b.replace(e[f], ""), b.trim());
                    var g = [" County", " City", " Borough", " Parish"];
                    if ("" !== c) {
                        for (var h = 0; h < g.length; h++) {
                            var i = Gb(b) + g[h] + ", " + c;
                            if (J[i]) return void CIC.executeSearchMatch(parseInt(J[i]))
                        }
                        if ("washington" === b.toLowerCase() && "DC" === c) return void CIC.executeSearchMatch(11001)
                    }
                    var j = [];
                    for (var k in J) {
                        var l = k.split(", ");
                        if ((c === l[1] || "" === c) && -1 != l[0].toLowerCase().indexOf(b.toLowerCase())) {
                            for (var m = {
                                    fips: parseInt(J[k]),
                                    cs_array: l
                                }, h = 0; h < g.length && (m.fullCountyMatch = Gb(b + " " + g[h]) === l[0], m.fullCountyMatch !== !0); h++);
                            j.push(m)
                        }
                    }
                    if (j.length > 1) {
                        for (var n = 0, o = -1, f = 0; f < j.length; f++) j[f].fullCountyMatch && (n++, o = j[f].fips);
                        if (1 === n) return void CIC.executeSearchMatch(o);
                        Bb();
                        var p = d3.select("#results-container").append("div").attr("class", "temp");
                        p.append("p").style("text-align", "center").text("Your search returned " + j.length + " results");
                        for (var q = p.append("div").attr("id", "multiCountyResult").attr("class", "container-fluid").append("table").attr("class", "table table-striped table-condensed table-hover").append("tbody"), r = q.append("tr"), f = (r.append("th").text("FIPS"), r.append("th").text("County Name"), r.append("th").text("State"), 0); f < j.length; f++) {
                            {
                                var s = K[j[f].fips],
                                    t = s.geography.split(", "),
                                    u = q.append("tr"),
                                    v = (u.append("td").text(s.id), u.append("td").classed("link", !0).text(t[0]));
                                u.append("td").text(t[1])
                            }! function(a, b) {
                                a.on("click", function() {
                                    CIC.executeSearchMatch(b)
                                })
                            }(v, j[f].fips)
                        }
                        zb()
                    } else 1 == j.length ? CIC.executeSearchMatch(j[0].fips) : (noty({
                        text: "Your search did not match any counties."
                    }), document.getElementById("search_form").reset())
                } else if ("citySearch" === A) {
                    var w = a.toLowerCase().indexOf("city"),
                        x = a.toLowerCase().indexOf(","); - 1 !== w && (a = a.substr(0, w)), -1 !== x && x <= a.length && (a = a.substr(0, x)), Y("city_res.cfm?city=" + a)
                }
            };
        CIC.executeSearchMatch = function(a) {
            Ab(), $("#search-field").val("");
            var b = K[+a];
            if (b) {
                $.noty.closeAll(), pb(b);
                var c = ob(+a);
                return lb(b), c.each("end", function() {
                    if (mb($(".county.active")[0]), H[0].has_profile)
                        if ("County Economic Tracker - County Economic Profile" === w) {
                            var c = Fb(+a, b.geography);
                            c = c.replace(/\s/g, ""), window.open("http://explorer.naco.org/profiles/countytracker/" + c + ".pdf")
                        } else if ("Municipal Bonds - Muni Bonds Profiles" === w)
                        if (isNaN(F[0][+a])) noty({
                            text: "<strong>No Profile Available</strong>"
                        });
                        else {
                            var c = Fb(+a, b.geography);
                            window.open("http://www.uscounties.org/MuniBondInteractive/CountyProfiles/muni_bonds_profile_" + c + ".pdf")
                        } else if ("Payment in Lieu of Taxes (PILT) - PILT Profiles" === w) 0 === F[0][+a] ? noty({
                        text: "<strong>No Profile Available</strong></br>This county did not receive PILT in 2014!"
                    }) : window.open("http://explorer.naco.org/profiles/" + b.geography + ".pdf", "_blank");
                    else if ("MITFA Profiles - MITFA Profiles" === w) {
                        var d = K[+a].STATE;
                        "MT" == d | "OR" == d | "NH" == d | "DE" == d ? noty({
                            text: "<strong>No Profile Available</strong></br>This state does not have a sales tax."
                        }) : window.open("http://explorer.naco.org/profiles/MITFA_" + d + ".pdf", "_blank")
                    }
                }), c
            }
            return t.classed("hidden", !0), noty({
                text: "Data not available for this county"
            }), !1
        };
        var Y = function(a) {
            Bb(), $("#print").css("display", "inline"), d3.xhr("/ciccfm/" + a, function(b, c) {
                if (b) console.log("Error retrieving data from : /ciccfm/" + a), console.log(b);
                else {
                    var d = c.responseText;
                    if (-1 !== d.indexOf("An error occurred")) return void noty({
                        text: "Information for this county is not currently available."
                    });
                    var e = d3.select("#results-container").append("div").attr("class", "container-fluid temp");
                    e.html(d), -1 != a.indexOf("county") ? $("#showOnMap").show() : $("#showOnMap").hide(), zb()
                }
            })
        };
        CIC.update = function(a, b) {
            NProgress.start(), w = a + " - " + b, $(document.body).scrollTop(0), H = eb(a, b), v = H[0].dataType, $("#perCapitaButton").removeClass("active"), Hb(v) ? $("#perCapitaButton").removeClass("disabled") : $("#perCapitaButton").addClass("disabled"), $(document.body).off("dataReceived"), $(document.body).on("dataReceived", function(a, b, c) {
                NProgress.set(.5), F = b, F = db(F, H);
                for (var d in c) J[c[d].geography] = d, K[d] = c[d];
                ab(), ib(), NProgress.done(!0)
            }), _(H)
        };
        var Z = function(a, b) {
                NProgress.start(), x = a + " - " + b, I = eb(a, b), $(document.body).off("dataReceived"), $(document.body).on("dataReceived", function(a, b) {
                    NProgress.set(.8), G = b, G = db(G, I), d3.select(".county.active").empty() !== !0 && (lb(d3.select(".county.active")[0][0]), mb(d3.select(".county.active")[0][0])), ib(), NProgress.done(!0)
                }), _(I)
            },
            _ = function(a) {
                if (k) d3.tsv("data/local_data.tsv", function(b, c) {
                    for (var d = [], e = 0; e < a.length; e++) d.push([]);
                    c.forEach(function(b) {
                        for (var c = 0; c < a.length; c++) d[c][b.id] = Hb(a[c].dataType) ? parseFloat(b[a[c].DI]) : b[a[c].DI], a[c].hasOwnProperty("unit") && -1 !== a[c].unit.indexOf("thousand") && (d[c][b.id] *= 1e3);
                        J[b.geography] = b.id, K[b.id] = b
                    }), wb(), $(document.body).trigger("dataReceived", [d])
                });
                else {
                    for (var b = {}, c = 0; c < a.length; c++) {
                        var d = a[c].dataset + " - " + a[c].name;
                        a[c].hasOwnProperty("name") || console.log("Indicator #" + c + " not matched in CIC structure"), crosswalk.hasOwnProperty(d) || console.log("Indicator #" + c + " not matched in crosswalk");
                        var e = crosswalk[d],
                            f = a[c].year;
                        b.hasOwnProperty(e.db_dataset) || (b[e.db_dataset] = {});
                        var g = b[e.db_dataset];
                        if (g.hasOwnProperty(f) || (g[f] = []), g[f].push(e.db_indicator), a[c].hasOwnProperty("year_ind")) {
                            var h = crosswalk[a[c].dataset + " - " + a[c].year_ind];
                            g[f].push(h.db_indicator)
                        }
                    }
                    var i = [];
                    for (var j in b)
                        for (var f in b[j]) {
                            for (var l = b[j][f], m = "db_set=" + j + "&db_year=" + f + "&db_ind=", n = 0; n < l.length; n++) m += l[n], n != l.length - 1 && (m += ",");
                            i.push(m)
                        }
                    var o = function(a) {
                            d3.xhr("/ciccfm/indicators.cfm?" + a, function(a, b) {
                                try {
                                    var c = jQuery.parseJSON(b.responseText)
                                } catch (a) {
                                    noty({
                                        text: "Error retrieving information from database."
                                    }), NProgress.done(!0)
                                }
                                0 === c.ROWCOUNT && noty({
                                    text: "Database error: ROWCOUNT = 0"
                                });
                                for (var d = 0; d < c.DATA.FIPS.length; d++) {
                                    var e = parseInt(c.DATA.FIPS[d]);
                                    p.hasOwnProperty(e) || (p[e] = {
                                        id: e
                                    });
                                    for (var f = 1; f < c.COLUMNS.length; f++) {
                                        var g = c.COLUMNS[f];
                                        p[e].hasOwnProperty(g) || (p[e][g] = c.DATA[g][d])
                                    }
                                    p[e].hasOwnProperty("geography") || (p[e].geography = p[e].COUNTY_NAME + ", " + p[e].STATE)
                                }
                                $(document.body).trigger("requestReceived")
                            })
                        },
                        p = {},
                        q = 0;
                    $(document.body).off("requestReceived"), $(document.body).on("requestReceived", function() {
                        if (q++, q === i.length) {
                            for (var b = [], c = 0; c < a.length; c++) b.push([]);
                            for (var d in p) {
                                for (var c = 0; c < a.length; c++) {
                                    var e = p[d][a[c].db_indicator.toUpperCase()];
                                    b[c][d] = Hb(a[c].dataType) ? parseFloat(e) : e, a[c].hasOwnProperty("unit") && -1 !== a[c].unit.indexOf("thousand") && (b[c][d] *= 1e3)
                                }
                                J[p[d].geography] = d, K[d] = p[d]
                            }
                            wb(), $(document.body).trigger("dataReceived", [b, p])
                        }
                    });
                    for (var c = 0; c < i.length; c++) o(i[c], c)
                }
            },
            ab = function() {
                var a = Hb(v),
                    b = F[0];
                if (a) {
                    var c = [];
                    for (var d in b) c[d] = b[d]
                } else if ("binary" === v) {
                    D = [];
                    for (var d in b)(0 === b[d] || 1 === b[d]) && (D[d] = b[d]);
                    var e = {
                        Yes: 1,
                        No: 0
                    }
                } else if ("categorical" === v) {
                    D = [];
                    var f = 0,
                        e = {},
                        h = 0;
                    if (H[0].hasOwnProperty("order")) {
                        e = H[0].order;
                        for (var d in b) D[d] = e[b[d]]
                    } else
                        for (var d in b) "." !== b[d] && "" !== b[d] && null !== b[d] && (e.hasOwnProperty(b[d]) || (e[b[d]] = h, h++), D[d] = e[b[d]]);
                    for (var d in e) f++
                }
                switch (v) {
                    case "percent":
                        E = percent_colors;
                        break;
                    case "binary":
                        E = binary_colors;
                        break;
                    case "categorical":
                        if (2 === f) E = binary_colors;
                        else {
                            E = [];
                            for (var i = categorical_colors, j = 0; f > j; j++) E.push(i[j])
                        }
                        break;
                    default:
                        E = level_colors
                }
                if ("none" !== v && (color = d3.scale.quantile(), a ? color.domain(c).range(E) : color.domain(D).range(E)), C = "quintile", a) {
                    if (H[0].hasOwnProperty("thresholds")) C = "threshold";
                    else {
                        var k = color.quantiles();
                        if (0 === k[0]) {
                            C = "quartile";
                            var l = [];
                            for (var d in c) 0 !== +c[d] && (l[d] = c[d]);
                            for (var m = [], j = 1; j < level_colors.length; j++) m.push(level_colors[j]);
                            color.domain(l).range(m), k = color.quantiles()
                        }
                        for (var j = 0; j < k.length - 1; j++)
                            if (k[j] === k[j + 1]) {
                                C = "threshold";
                                break
                            }
                        var n = color.domain();
                        "quartile" === C && k[0] <= 1 && (C = "threshold"), (k[0] === n[0] || k[k.length - 1] === n[n.length - 1]) && (C = "threshold")
                    }
                    "threshold" === C ? N = bb(c, E) : "quartile" === C && (c = l, E = m)
                }
                if (a ? "threshold" === C ? ($("#quantileButton").addClass("disabled"), $("#quantileButton").removeClass("active"), $("#thresholdButton").addClass("active"), cb()) : ($("#quantileButton").removeClass("disabled"), $("#quantileButton").addClass("active"), $("#thresholdButton").removeClass("disabled active"), $("#thresholdInputContainer").hide()) : ($("#quantileButton, #thresholdButton").addClass("disabled"), $("#quantileButton, #thresholdButton").removeClass("active"), $("#thresholdInputContainer").hide()), d3.select(".county.active").empty() !== !0 && $("#tt").hasClass("hidden") === !0 && qb(), hb(), "none" === v ? (kb(), $("#quantileLegend").css("visibility", "hidden")) : ($("#quantileLegend").css("visibility", "visible"), g = a ? jb(C, null, N) : jb(C, e)), d3.select(".county.active").empty() !== !0 && $("#tt").hasClass("hidden") === !1) {
                    var o = d3.select(".county.active")[0][0];
                    lb(o), mb(o)
                }
                if (d3.select("#sourceContainer").selectAll("p").remove(), d3.select("#sourceContainer").append("p").attr("id", "sourceText").html('<span style="font-weight:400;">Source:</span> NACo Analysis of ' + H[0].source + (H[0].supressYear ? "." : ", " + H[0].year)), H[0].has_profile) {
                    var p = "Click once on a county to see their county profile.";
                    "MITFA Profiles" === H[0].name && (p = "Click once on a county to see their state profile."), noty({
                        type: "alert",
                        text: "<strong>" + p + "</strong></br></br>Please make sure to enable popups.",
                        timeout: !1
                    })
                }
            },
            bb = function(a, b) {
                color = d3.scale.threshold();
                for (var c = [], d = 0; d < a.length; d++) isNaN(a[d]) || c.push(a[d]);
                if (c.sort(function(a, b) {
                        return a - b
                    }), large = c[c.length - 1], small = "level" === v ? 0 : c[0], H[0].hasOwnProperty("thresholds")) a = H[0].thresholds;
                else if ("percent" !== v && 5 >= large) a = [1, 2, 3, 4];
                else if (a = [], "percent" === v)
                    for (var d = 1; 5 > d; d++) a.push(small + d * (large - small) / 5);
                else {
                    for (var d = 1; 5 > d; d++) a.push(large * Math.pow(10, d - 5));
                    for (var d = 0; d < a.length; d++) H[0].format_type ? "dec1" === H[0].format_type ? a[d] = a[d].toFixed(1) : "dec2" === H[0].format_type && (a[d] = a[d].toFixed(2)) : a[d] = Math.round(a[d]);
                    a[0] <= 0 && (a[0] = 1);
                    for (var d = 1; d < a.length; d++) a[d] <= a[d - 1] && (a[d] = a[d - 1] + 1)
                }
                return color.domain(a).range(b), [small, large]
            },
            cb = function() {
                $("#thresholdInputContainer").show();
                for (var a = color.domain(), b = 0; 4 > b; b++) $("#thresholdInput" + (b + 1)).val(a[b])
            },
            db = function(a, b) {
                for (var c = 0; c < a.length; c++)
                    for (var d in a[c]) Db.hasOwnProperty(+d) ? a[c][d] = "." : "binary" === b[c].dataType ? (1 == a[c][d] || "Yes" === a[c][d] ? a[c][d] = 1 : 0 == a[c][d] || "No" === a[c][d] ? a[c][d] = 0 : 2 === a[c][d] && (a[c][d] = 1), "Consolidation" === b[c].name && null === a[c][d] && (a[c][d] = 0)) : "categorical" === b[c].dataType ? (0 === a[c][d] && (a[c][d] = "None"), "Level of CBSA" === b[c].name && (1 === a[c][d] ? a[c][d] = "Metropolitan" : 2 === a[c][d] && (a[c][d] = "Micropolitan"))) : "level" === b[c].dataType ? "Federal Funding" === b[c].category ? (isNaN(a[c][d]) && (a[c][d] = 0), "Payment in Lieu of Taxes (PILT) - PILT per Acre" === b[c].DI ? a[c][d] /= 640 : ("Payment in Lieu of Taxes (PILT) - Total Federal Land Area" === b[c].DI || "Payment in Lieu of Taxes (PILT) - Total County Area" === b[c].DI) && (a[c][d] *= 640)) : "Fixed Internet Connections" === b[c].name && (5 === a[c][d] ? a[c][d] = 1e3 : a[c][d] >= 1 && (a[c][d] = 200 * a[c][d] - 100)) : "percent" === b[c].dataType ? "Educational Attainment" === b[c].dataset && (a[c][d] /= 100) : "CSA Code" === b[c].name && 0 === a[c][d] && (a[c][d] = null);
                return a
            },
            eb = function(a, b) {
                for (var c = CIC.getInfo(a, b), d = [c], e = 0; e < c.companions.length; e++)
                    if (d.length < c.companions.length) {
                        var f = CIC.getInfo(c.companions[e][0], c.companions[e][1]),
                            g = $('.dataset[name="' + f.dataset + '"] .indicator[name="' + f.name + '"]').parent().hasClass("disabled");
                        f.name === c.name || g || d.push(f)
                    }
                return d
            };
        CIC.getInfo = function(a, b) {
            for (var c = {}, d = f.children, e = 0; e < d.length; e++)
                for (var g = 0; g < d[e].children.length; g++)
                    if (d[e].children[g].name === a) {
                        var h = d[e].children[g];
                        if (c.category = d[e].name, c.dataset = h.name, c.year = d3.max(h.years), c.source = h.source, c.companions = h.companions, h.hasOwnProperty("vintage") && (c.vintage = h.vintage), h.hasOwnProperty("legend_title_footer") && (c.legend_title_footer = h.legend_title_footer), h.hasOwnProperty("supressYear") && (c.supressYear = h.supressYear), "undefined" != typeof b)
                            for (var i = 0; i < h.children.length; i++)
                                if (b === h.children[i].name) {
                                    for (var j in h.children[i]) c[j] = h.children[i][j];
                                    if (c.DI = c.dataset + " - " + c.name, k === !1)
                                        for (var l in crosswalk[c.DI]) c.hasOwnProperty(l) || (c[l] = crosswalk[c.DI][l]);
                                    break
                                }
                        break
                    }
            return c
        };
        var fb, gb, hb = function() {
                var b = function(b, d, e) {
                        switch (b) {
                            case "binary":
                                return D.hasOwnProperty(d.id) ? E[D[d.id]] : na_color;
                            case "categorical":
                                return isNaN(D[d.id]) ? na_color : E[D[d.id]];
                            case "level":
                            case "level_np":
                            case "percent":
                                return "quartile" === C && 0 === +F[0][d.id] ? level_colors[0] : isNaN(F[0][d.id]) ? na_color : color(F[0][d.id]);
                            default:
                                var f = F[0][d.id];
                                return "undefined" == typeof f || null === f || 0 === f ? na_color : (c.hasOwnProperty(f) ? d.color = c[f] : (d.color = d3.max(neighbors[e], function(b) {
                                    return a[b].color
                                }) + 1 | 0, c[f] = d.color), neighbor_colors(d.color))
                        }
                    },
                    c = {};
                e.selectAll(".counties .county:not(.active)").transition().duration(750).style("fill", function(a, c) {
                    return b(v, a, c)
                }), e.selectAll(".counties .county.active").transition().duration(750).style("fill", function(a, c) {
                    return fb = b(v, a, c), highlight_color
                })
            },
            ib = function() {
                d3.select("#definitionsContainer").selectAll("p").remove();
                var a = d3.select("#definitionsContainer").append("p").attr("id", "definitionsText");
                a.append("div").html("<i>Definitions</i>:");
                for (var b = 0; b < H.length; b++) a.append("div").html("<b>" + H[b].name + "</b>: " + H[b].definition);
                if ("" !== x)
                    for (var b = 0; b < I.length; b++) a.append("div").html("<b>" + I[b].name + "</b>: " + I[b].definition)
            },
            jb = function(a, b, c) {
                d3.selectAll(".legend svg").remove();
                var d = H[0];
                if ("none" !== d.dataType) {
                    var e = {
                        boxHeight: 18,
                        boxWidth: 58,
                        dataType: d.dataType,
                        unit: d.unit,
                        measure_type: a,
                        formatFnArr: Jb
                    };
                    return b && (e.keyArray = b), c && (e.small_large = c), "Body of Water" === d.name && (e.boxWidth = 68), d.hasOwnProperty("format_type") && (e.format_type = d.format_type), d.hasOwnProperty("supressMinMax") && (e.supressMinMax = d.supressMinMax), kb(), colorlegend("#quantileLegend", color, "quantile", e)
                }
                return !1
            },
            kb = function() {
                var a = H[0],
                    b = a.name;
                if (a.hasOwnProperty("unit") && -1 !== a.unit.indexOf("per ") && -1 === b.indexOf("per ") && (b += " (" + a.unit + ")"), a.hasOwnProperty("legend_title_footer")) var c = a.dataset + a.legend_title_footer;
                else var c = a.year + " " + a.dataset;
                "MITFA Profiles" === a.name && (c = "Sales Tax" + a.legend_title_footer), a.has_profile === !0 && (b = a.companions[0][1]), d3.select("#legendTitle").text(c), d3.select("#legendSubtitle").text(b)
            },
            lb = function(a) {
                var b = function(a) {
                        for (var b = !0, c = 1; c < a.length; c++)
                            if (a[c].dataset !== a[0].dataset) {
                                b = !1;
                                break
                            }
                        for (var d = !0, c = 1; c < a.length; c++)
                            if (a[c].year !== a[0].year) {
                                d = !1;
                                break
                            }
                        return {
                            sameDataset: b,
                            allSameYear: d
                        }
                    },
                    c = function(a, b) {
                        j.append("td").attr({
                            "class": "datasetName",
                            colspan: "2"
                        }).text(function() {
                            var c = b.sameDataset ? a[0].dataset : a[0].category;
                            return b.allSameYear ? c + ", " + a[0].year : c
                        })
                    },
                    d = function(b, c, d, e, f) {
                        var g = c.hasOwnProperty("unit") ? c.unit : "";
                        if (c.hasOwnProperty("format_type")) var h = Kb[c.format_type](d[a.id], g);
                        else var h = Kb[c.dataType](d[a.id], g);
                        if ("$NaN" === h || "NaN" === h || "NaN%" === h || null === h || "." === h || Hb(c.dataType) && isNaN(d[a.id])) h = "Not Available", g = "";
                        else if ("string" == typeof h && (h = h.charAt(0).toUpperCase() + h.substr(1)), -1 !== g.indexOf("dollar") || -1 !== g.indexOf("year")) g = "";
                        else if ("" !== g && 1 === parseFloat(h.toString().replace(/[^\d\.\-]/g, "")))
                            if ("s" === g.charAt(g.length - 1)) g = g.substr(0, g.length - 1);
                            else if (-1 !== g.indexOf("s per")) {
                            var i = g.indexOf("s per");
                            g = g.substr(0, i) + g.substr(i + 1)
                        }
                        "Fixed Internet Connections" === c.name ? h = "1,000" === h ? "800-1000" : parseInt(h) - 100 + "-" + (parseInt(h) + 100) : "Fixed Internet Providers" === c.name || "Mobile Internet Providers" === c.name ? "1" === h && (h = "1-3", g += "s") : c.hasOwnProperty("CETNulls") && ("99900.0%" === h || "1000" === h ? (h = "No Recession", g = g = "PPT" === g ? "" : g) : ("-99900.0%" === h || "-1000" === h) && (h = "No Recovery", g = g = "PPT" === g ? "" : g));
                        var j = -1 != c.name.indexOf("(") ? c.name.substring(0, c.name.indexOf("(")) : c.name;
                        e.allSameYear || c.hasOwnProperty("year_ind") || (j = c.year + " " + j), b.append("td").attr("class", "dataName").classed("leftborder", f).text(j + ":"), b.append("td").attr("class", "dataNum").html(h + " " + g)
                    },
                    e = "" !== x,
                    f = b(H);
                if (e) var g = b(I);
                $("#tipContainer").empty(), u.append("div").attr("id", "tipLocation").text(K[a.id].geography);
                var h = u.append("div").attr("id", "tipInfo"),
                    i = h.append("table").attr("class", "table").style({
                        "margin-bottom": "5px",
                        "margin-top": "0px"
                    }),
                    j = i.append("tr").attr("class", "tipKey");
                c(H, f), e && c(I, g);
                for (var k = 0; k < H.length; k++)
                    if (H[k].has_profile !== !0) {
                        var j = i.append("tr").attr("class", "tipKey");
                        d(j, H[k], F[k], f, !1), e && k < I.length && d(j, I[k], G[k], g, !0)
                    }
            },
            mb = function(a) {
                if (a) {
                    t.classed("hidden", !1);
                    var b = $("#tt").width(),
                        c = $("#tt").height(),
                        d = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop,
                        e = document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft,
                        f = a.getBoundingClientRect(),
                        g = f.top - c - s.top + d - 10;
                    if ("" === x) var h = f.left + f.width - b - s.left + e + 20,
                        i = -20 + f.width / 2;
                    else var h = f.left + f.width / 2 - b / 2 - s.left + e + 5,
                        i = -35 + b / 2;
                    var j = q - (h + b),
                        k = r - (g + c);
                    0 > h ? (i -= h, h = 0) : 0 > j && (i += -20 > j ? -20 : j, h += j), 0 > g ? g = 0 : 0 > k && (g += k), t.transition().style("left", h + "px").style("top", g + "px"), d3.select(".arrow-box").transition().style("right", i + "px")
                }
            },
            nb = function(a) {
                t.classed("hidden", !0), ob(parseInt(a));
                var b = a.toString();
                4 == b.length && (b = "0" + b), Y("county.cfm?id=" + b)
            },
            ob = function(a) {
                var b = c.centroid(L[a]),
                    d = 4.5,
                    e = 1.215,
                    f = 20,
                    g = c.area(L[a]);
                d = 10 > g ? 7 : 50 > g ? 6 : 200 > g ? 5.5 : 400 > g ? 5 : 700 > g ? 4.5 : 1e3 > g ? 4 : 3.5, b[0] = -b[0] * (d - 1) * e, b[1] = (f - b[1]) * (d - 1) * e;
                var h = sb(b, d);
                return h
            },
            pb = function(a) {
                h === a && t.classed("hidden", !0), h = a && h !== a ? "Feature" === a.type ? a : L[a.id] : null, e.selectAll("path").classed("active", h && function(a) {
                    return a === h
                }), gb && gb.style("fill", fb), gb = d3.select(".county.active"), gb.empty() !== !0 && (fb = gb.style("fill"), gb.style("fill", null))
            },
            qb = function() {
                null !== h && pb(h), $(".county.active").removeClass("active")
            },
            rb = function() {
                t.classed("hidden", !0), q = $(window).width(), o = document.getElementById("container").offsetWidth - 90, p = o / 2, s = $("#container").offset(), d3.select("svg").remove(), O(o, p), P(a, b), "undefined" != typeof g && g !== !1 && g.reposition(), hb()
            },
            sb = function(a, b, c) {
                if ("undefined" == typeof c) var c = !0;
                if (n.translate(a), n.scale(b), i = b, j = a, c) {
                    var d = e.transition().attr("transform", "translate(" + a + ")scale(" + b + ")");
                    return d
                }
                return e.attr("transform", "translate(" + a + ")scale(" + b + ")"), !1
            },
            tb = function() {
                var a = .2 * q / 2;
                q > 1125 && (a = (q - 900) / 2), d3.select("#instructions").style({
                    left: a - s.left + "px",
                    height: p + "px"
                })
            },
            ub = function() {
                var a = map.offsetWidth;
                d3.select("#side-icon-container").style("left", a + 20 + "px"), d3.selectAll(".side-icon-text").style("display", function() {
                    return 150 > (q - a) / 2 ? "none" : "table-cell"
                })
            },
            vb = function() {
                d3.select("#zoomPlusIcon").on("click", function() {
                    for (var a = i > 9 ? 10 : i + 1, b = [0, 0], c = 0; c < j.length; c++) b[c] = j[c] * (a / i);
                    sb(b, a), t.classed("hidden", !0)
                }), d3.select("#zoomMinusIcon").on("click", function() {
                    var a = 2 > i ? 1 : i - 1,
                        b = [0, 0];
                    if (1 !== a)
                        for (var c = 0; c < j.length; c++) b[c] = j[c] * (a / i);
                    sb(b, a), t.classed("hidden", !0)
                })
            },
            wb = function() {
                d3.selectAll(".county").append("title").html(function(a) {
                    return K.hasOwnProperty(a.id) && K[a.id].hasOwnProperty("geography") ? K[a.id].geography : !1
                })
            },
            xb = function() {
                d3.selectAll("path").attr({
                    stroke: "#fff",
                    "stroke-width": ".2px"
                }), d3.select("#state-borders").attr({
                    fill: "none",
                    stroke: "#fff",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5px"
                }), svgenie.save("map-svg", {
                    name: "test.png"
                })
            };
        d3.select(document.body).on("keyup", function() {
            d3.event.ctrlKey && d3.event.shiftKey && 69 === d3.event.keyCode && xb()
        }), d3.select(document.body).on("keyup", function() {
            if (d3.event.ctrlKey && d3.event.shiftKey && 76 === d3.event.keyCode) {
                level_colors = ["rgb(189,215,231)", "rgb(107,174,214)", "rgb(49,130,189)", "rgb(7,81,156)", "rgb(28,53,99)"];
                var a = w.lastIndexOf(" - ");
                CIC.update(w.substring(0, a), w.substring(a + 3, w.length))
            }
        }), O(o, p), d3.json("data/us.json", function(c, d) {
            var e = topojson.feature(d, d.objects.counties).features,
                g = topojson.mesh(d, d.objects.states, function(a, b) {
                    return a !== b
                });
            e.forEach(function(a) {
                L[a.id] = a
            }), a = e, neighbors = topojson.neighbors(d.objects.counties.geometries), b = g, P(a, b), d3.json("data/CICstructure.json", function(a, b) {
                f = b, Q();
                for (var c, d = {}, e = /\+/g, g = /([^&=]+)=?([^&]*)/g, h = function(a) {
                        return decodeURIComponent(a.replace(e, " "))
                    }, i = window.location.search.substring(1); c = g.exec(i);) d[h(c[1])] = h(c[2]);
                var j = "",
                    n = "";
                if (d.hasOwnProperty("dset") && d.hasOwnProperty("ind") && (j = d.dset, n = d.ind), k ? CIC.update(l, m) : d3.tsv("data/database_crosswalk.tsv", function(a, b) {
                        crosswalk = {};
                        for (var c = 0; c < b.length; c++)
                            if ("" !== b[c].indicator) {
                                var d = b[c].dataset + " - " + b[c].indicator;
                                crosswalk[d] = b[c]
                            }
                            "" !== j && crosswalk.hasOwnProperty(j + " - " + n) ? CIC.update(j, n) : CIC.update(l, m)
                    }), "" !== j) {
                    var o = angular.element($("#container")).scope();
                    o.$apply(function() {
                        o.panel.setVisible(!1)
                    })
                } else if (d.hasOwnProperty("signup")) {
                    var o = angular.element($("#container")).scope();
                    o.$apply(function() {
                        o.panel.toggleShowing("mailingList")
                    })
                } else if (d.hasOwnProperty("showhelp")) {
                    var o = angular.element($("#container")).scope();
                    o.$apply(function() {
                        o.panel.toggleShowing("help"), o.panel.selectHelpTab(parseInt(d.showhelp))
                    })
                }
            })
        });
        var yb;
        d3.select(window).on("resize", function() {
            window.clearTimeout(yb), yb = window.setTimeout(rb, 200)
        });
        for (var zb = function() {
                var a = angular.element($("#container")).scope();
                a.$apply(function() {
                    a.panel.setVisible(!0)
                })
            }, Ab = function() {
                var a = angular.element($("#container")).scope();
                a.$apply(function() {
                    a.panel.setVisible(!1)
                })
            }, Bb = function() {
                $("#results-container").empty();
                var a = angular.element($("#container")).scope();
                a.$apply(function() {
                    a.panel.toggleShowing("results")
                })
            }, Cb = [9001, 9003, 9005, 9007, 9009, 9011, 9013, 9015, 25003, 25009, 25011, 25013, 25015, 25017, 25027, 44001, 44003, 44005, 44007, 44009, 51510, 51520, 51530, 51540, 51550, 51570, 51580, 51590, 51595, 51600, 51610, 51620, 51630, 51640, 51650, 51660, 51670, 51678, 51680, 51683, 51685, 51690, 51700, 51710, 51720, 51730, 51735, 51740, 51750, 51760, 51770, 51775, 51790, 51800, 51810, 51820, 51830, 51840], Db = {}, Eb = 0; Eb < Cb.length; Eb++) Db[Cb[Eb]] = !0;
        var Fb = function(a, b) {
                var c = b.replace(/,| /g, "");
                return 6075 === a ? c = "SanFranciscoCountyCA" : 21111 === a ? c = "JeffersonCountyKY" : 24033 === a ? c = "PrinceGeorgesCountyMD" : 25025 === a && (c = "SuffolkCountyMA"), c
            },
            Gb = function(a) {
                return a.replace(/\w\S*/g, function(a) {
                    return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
                })
            },
            Hb = function(a) {
                return "level" === a || "level_np" === a || "percent" === a
            },
            Ib = function(a) {
                var b = "";
                return a && "" !== a && (-1 != a.indexOf("dollar") ? b = "currency" : -1 != a.indexOf("year") ? b = "year" : (-1 != a.indexOf("person") || -1 != a.indexOf("employee")) && (b = "person")), b
            },
            Jb = {
                percent: d3.format(".1%"),
                binary: function(a) {
                    return a
                },
                categorical: function(a) {
                    return a
                },
                level: function(a, b) {
                    var c = Ib(b);
                    if ("year" === c) return a.toFixed(0);
                    if ("PPT" === b) return d3.format(".1r")(a) + " PPT";
                    if (Math.abs(a) >= 1e9) var d = String((a / 1e9).toFixed(1)) + "bil";
                    else if (Math.abs(a) >= 1e6) var d = String((a / 1e6).toFixed(1)) + "mil";
                    else {
                        if (!(Math.abs(a) >= 1e4)) return Math.abs(a) >= 100 ? "currency" === c ? d3.format("$,.0f")(a) : d3.format(",.0f")(a) : 0 == a ? "currency" === c ? "$0" : 0 : "currency" === c ? d3.format("$0f")(a) : "person" === c ? d3.format("0f")(a) : y ? d3.format(".2f")(a) : d3.format("0f")(a);
                        var d = String((a / 1e3).toFixed(1)) + "k"
                    }
                    return "currency" === c ? "$" + d : d
                },
                dec1: function(a, b) {
                    var c = Ib(b);
                    return Math.abs(a) >= 1e3 ? "currency" === c ? d3.format("$,.0f")(a) : d3.format(",.0f")(a) : "currency" === c ? d3.format("$.1f")(a) : d3.format(".1f")(a)
                },
                dec2: function(a, b) {
                    var c = Ib(b);
                    return Math.abs(a) >= 1e3 ? "currency" === c ? d3.format("$,.0f")(a) : d3.format(",.0f")(a) : "currency" === c ? d3.format("$.2f")(a) : d3.format(".2f")(a)
                },
                none: function(a) {
                    return a
                }
            };
        Jb.level_np = Jb.level;
        var Kb = {};
        for (var Lb in Jb) Kb[Lb] = Jb[Lb];
        Kb.binary = function(a) {
            return 1 === +a ? "Yes" : "No"
        }, Kb.level = function(a, b) {
            var c = Ib(b);
            if ("year" === c) return a.toFixed(0);
            if ("PPT" === b) return d3.format(".1r")(a);
            if (Math.abs(a) >= 1e9) var d = String((a / 1e9).toFixed(1)) + " Bil";
            else if (Math.abs(a) >= 1e6) var d = String((a / 1e6).toFixed(1)) + " Mil";
            else {
                if (!(Math.abs(a) >= 1e4)) return Math.abs(a) >= 100 ? "currency" === c ? d3.format("$,.0f")(a) : d3.format(",.0f")(a) : 0 == a ? "currency" === c ? "$0" : 0 : "currency" === c ? d3.format("$0f")(a) : d3.format("0f")("person" === c ? a : a);
                var d = String((a / 1e3).toFixed(1)) + "k"
            }
            return "currency" === c ? "$" + d : d
        }, Kb.level_np = Kb.level
    }();