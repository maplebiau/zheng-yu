/*!
    jQThumb v2.3.6
    Copyright (c) 2013-2016
    Released under the MIT license.

    Author       : Pak Cheong
    Version      : 2.3.6
    Repo         : git@github.com:pakcheong/jqthumb.git
    Demo         : http://pakcheong.github.io/jqthumb/
    Last Updated : Sunday, April 10th, 2016, 2:42:38 PM
    Requirements : jQuery >=v1.3.0 or Zepto (with zepto-data plugin) >=v1.0.0
*/
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(function() {
        return "undefined" != typeof jQuery ? jQuery : "undefined" != typeof Zepto ? Zepto : $ }()) }(function(a) {
    function b(a, b) { window.console && "undefined" != typeof a && a && "undefined" != typeof b && b && (a = a.toLowerCase(), "error" == a ? console.error(b) : "log" == a ? console.log(b) : console.error('"' + a + '" is not supported as console type.')) }

    function c(b) {
        return b = a.trim(b.toString()), "auto" === b.toLowerCase() ? b : parseFloat(b) }

    function d(a, b) {
        var c = a.toString().match(/(-*)+\d+/)[0];
        return "px" == e(a) ? 0 > a ? 0 : a > b ? b : a : "%" == e(a) ? 0 > c ? "0%" : c > 100 ? "100%" : a : void 0 }

    function e(b) {
        var c = b.toString().match(/\d+(.*)/i);
        if (c) switch (a.trim(c[1])) {
            case "":
                return "px";
            case "px":
                return "px";
            case "%":
                return "%" }
        return "" }

    function f(b, c) { a.fn[i].defaults = a.extend({}, y, a.fn[i].defaults), this.element = b, this.settings = a.extend({}, a.fn[i].defaults, c), this.settings.onDemandEvent = this.settings.onDemandEvent.toLowerCase(), this.settings.threshold = this.settings.threshold.toString().replace(/px/gi, ""), this.settings.width = this.settings.width.toString().replace(/px/gi, ""), this.settings.height = this.settings.height.toString().replace(/px/gi, ""), this.settings.width || (c.width = y.width, this.settings.width = y.width), this.settings.height || (c.height = y.height, this.settings.height = y.height), this.settings.position.y = d(this.settings.position.y, this.settings.width), this.settings.position.x = d(this.settings.position.x, this.settings.height), this.settings.zoom = this.settings.zoom < 0 ? 0 : this.settings.zoom, "string" == typeof c ? "kill" == c.toLowerCase() && this.kill(this.element) : (a(this.element).data(r, this.settings), this.init(this.element, this.settings)) }
    var g = function() {
        var a = document.createElement("div"),
            b = "Khtml Ms O Moz Webkit".split(" ");
        b.length;
        return function(c) {
            if (c in a.style) return !0;
            c = c.replace(/^[a-z]/, function(a) {
                return a.toUpperCase() });
            for (var d in b)
                if (b[d] + c in a.style) return !0;
            return !1 } }();
    a.fn.outerHeight && a.fn.outerWidth || ("function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(a) {
        for (var b = 0; b < this.length; b++) a.apply(this, [this[b], b, this]) }), ["width", "height"].forEach(function(b) {
        var c = b.replace(/./, function(a) {
            return a[0].toUpperCase() });
        a.fn["outer" + c] || (a.fn["outer" + c] = function() {
            var a = this;
            if (a) {
                var c = a[b](),
                    d = { width: ["left", "right"], height: ["top", "bottom"] };
                return d[b].forEach(function(b) { c += parseInt(a.css("margin-" + b), 10), c += parseInt(a.css("padding-" + b), 10), c += parseInt(a.css("border-" + b + "-width"), 10) }), c }
            return null }) })), a.fn.unwrap || (a.fn.unwrap = function() { this.parent().each(function() { a.nodeName(this, "body") || a(this).replaceWith(this.childNodes) }).end() });
    var h = function(b, d) {
            var e = a(window),
                f = b.offset(),
                g = { top: e.scrollTop(), left: window.scrollX };
            return g.right = g.left + e.width(), g.bottom = g.top + e.height(), f.right = f.left + b.outerWidth(), f.bottom = f.top + b.outerHeight(), d = d ? c(d) : 0, !(g.right < f.left - d || g.left > f.right + d || g.bottom < f.top - d || g.top > f.bottom + d) },
        i = "jqthumb",
        j = a(window),
        k = function() {
            for (var a = ["scroll", "resize", "scrolltop"], b = {}, c = 0; c < a.length; c++) b[a[c]] = a[c] + "." + i;
            return b }(),
        l = function() {
            var b = [];
            return a.each(k, function(a, c) { b.push(c) }), b.join(" ") }(),
        m = "click." + i,
        n = "mouseenter." + i,
        o = i + "-render-position",
        p = i + "-original-styles",
        q = i + "-inviewport",
        r = i + "-options",
        s = i + "-status",
        t = i + "-onetime-event",
        u = i + "-ongoing-event",
        v = i + "-responsive",
        w = i + "tmp-img",
        x = { outputElems: [], inputElems: [] },
        y = { classname: i, width: 100, height: 100, position: { x: "50%", y: "50%" }, source: "src", responsive: 20, zoom: 1, show: !0, renderPosition: "before", onDemand: !1, onDemandEvent: "scroll", threshold: 0, method: "auto", reinit: !0, error: function() {}, before: function() {}, after: function() {}, done: function() {} };
    f.prototype = { kill: function(c) {
            function d(a) { j.unbind(l, a.data(u)), j.unbind(k.resize, a.data(v)), a.parent().unbind(m, a.data(t)), a.parent().unbind(n, a.data(t)), a.removeAttr("style"), a.data(p) || (a.attr("style", a.data(p)), a.removeData(p)), a.data(i) && a.removeData(i), a.data(r) && a.removeData(r), a.data(q) && a.removeData(q), a.data(o) && a.removeData(o), a.data(s) && a.removeData(s), a.data(t) && a.removeData(t), a.data(u) && a.removeData(u), a.data(w) && a.removeData(w) }
            var e = a(c);
            if (e.data(i)) {
                var f = [],
                    g = function() {
                        return "after" === e.data(o) ? e.next() : e.prev() }();
                if (g && g.data(i) !== i) {
                    if ("error" === e.data(s)) return d(e), !1;
                    if (e.data(r).onDemand === !1) return b("error", "Could not find the generated element."), !1;
                    d(e) }
                f = [], a.each(x.outputElems, function(b, c) { a(c)[0] != g[0] && f.push(x.outputElems[b]) }), x.outputElems = f, f = [], a.each(x.inputElems, function(b, c) { a(c)[0] != e[0] && f.push(x.inputElems[b]) }), x.inputElems = f, j.unbind(k.resize), g.remove(), d(e) } }, lazyload: function(b, c, d, e) {
            var f = a(c),
                g = f.data(w),
                h = f.attr(d.source) ? f.attr(d.source) : "";
            g.onload = function() { e(g) }, g.onerror = function() { d.error.apply(c, [c, h ? h : void 0]), f.data(s, "error"), b.kill(f) }, g.src = h }, processImg: function(b, c, d, e) {
            var f = this,
                g = a(b);
            g.attr(c.source);
            e({ tmpImgDom: d, oriImg: g, width: d.naturalWidth, height: d.naturalHeight, done: function(a) { c.show === !0 && a.show(), c.after.apply(b, [a]), f.updateGlobal(b, a, c) } }) }, init: function(d, f) {
            function h(b) {
                var d, g, h = "auto" === a.trim(f.width.toString().toLowerCase()) ? b.tmpImgDom.width.toString() : f.width,
                    j = "auto" === a.trim(f.height.toString().toLowerCase()) ? b.tmpImgDom.height.toString() : f.height,
                    k = f.zoom,
                    l = f.position.x,
                    m = f.position.y;
                d = a("<div/>").css({ width: c(h) + e(h), height: c(j) + e(j), display: "none", position: "relative", overflow: "hidden" }).addClass(f.classname).data(i, i), g = a("<div/>").css({ width: "100%", height: "100%", "background-image": 'url("' + q + '")', "background-repeat": "no-repeat", "background-position": c(l) + e(l) + " " + c(m) + e(m), "background-size": "cover" }).appendTo(d), "after" === f.renderPosition.toLowerCase() ? d.insertAfter(b.oriImg) : d.insertBefore(b.oriImg), d.show(), g.css({ width: parseFloat(100 * k) + "%", height: parseFloat(100 * k) + "%", position: "absolute" }).css({ top: function() {
                        var a = d.height(),
                            b = g.height();
                        return "%" == e(m) ? "-" + parseFloat((b - a) / a * 100 / (100 / c(m))) + "%" : void 0 }(), left: function() {
                        var a = d.width(),
                            b = g.width();
                        return "%" == e(l) ? "-" + parseFloat((b - a) / a * 100 / (100 / c(l))) + "%" : void 0 }() }), d.hide(), "function" == typeof b.done && b.done(d) }

            function l(b) {
                function d() {
                    var b = 0;
                    if (l > m ? (h.css({ width: "auto", "max-height": 99999999, "min-height": 0, "max-width": 99999999, "min-width": 0, height: g.height() + "px" }), b = h.height() / h.width(), h.width() < g.width() ? h.css({ width: g.width() * p, height: parseFloat(g.width() * b) * p }) : h.css({ width: h.width() * p, height: parseFloat(h.width() * b) * p })) : (h.css({ width: g.width() + "px", "max-height": 99999999, "min-height": 0, "max-width": 99999999, "min-width": 0, height: "auto" }), b = h.width() / h.height(), h.height() < g.height() && h.css({ width: parseFloat(g.height() * b) * p, height: g.height() * p })), 1 > p) {
                        var d = a("<div />");
                        d.css({ width: parseFloat(c(n.toString()) * p) + e(n.toString()), height: parseFloat(c(o.toString()) * p) + e(o.toString()), position: "relative", overflow: "hidden" }).appendTo(h.parent()), h.appendTo(d) }
                    h.css({ position: "absolute", left: function() {
                            var a = 0;
                            return "%" == e(q) ? (a = parseFloat((h.width() - h.parent().width()) / 100 * c(q)), 0 >= a ? a + "px" : "-" + a + "px") : "px" == e(q) || isNaN(q) === !1 ? c(q) + "px" : void 0 }(), top: function() {
                            var a = 0;
                            return "%" == e(r) ? (a = parseFloat((h.height() - h.parent().height()) / 100 * c(r)), 0 >= a ? a + "px" : "-" + a + "px") : "px" == e(r) || isNaN(r) === !1 ? c(r) + "px" : void 0 }() }) }
                var g, h, l = b.tmpImgDom.width,
                    m = b.tmpImgDom.height,
                    n = "auto" === a.trim(f.width.toString().toLowerCase()) ? l.toString() : f.width,
                    o = "auto" === a.trim(f.height.toString().toLowerCase()) ? m.toString() : f.height,
                    p = f.zoom,
                    q = f.position.x,
                    r = f.position.y,
                    s = e(n),
                    t = e(o),
                    u = f.responsive;
                h = a(b.tmpImgDom), g = a("<div />"), "after" === f.renderPosition.toLowerCase() ? g.insertAfter(b.oriImg) : g.insertBefore(b.oriImg), g.append(h).css({ position: "relative", overflow: "hidden", width: c(n) + (s ? s : "px"), height: c(o) + (t ? t : "px") }).data(i, i), d(), !isNaN(u) && u > 0 && (a(b.oriImage).data(v, function() { setTimeout(function() { d() }, u) }), j.bind(k.resize, a(b.oriImage).data(v))), g.hide().addClass(f.classname), "function" == typeof b.done && b.done(g) }
            f.before.apply(d, [d]);
            var m = this,
                n = a(d),
                q = n.attr(f.source),
                r = function(a) {
                    return "auto" == a ? g("backgroundSize") === !1 ? l : h : "modern" == a ? h : "native" == a ? l : void b("error", 'Invalid method. Only "auto", "modern" and "native" are allowed.') }(f.method.toString().toLowerCase());
            r ? (n.data(p, n.attr("style")), n.data(o, f.renderPosition), n.hide(), f.onDemand === !0 ? m.demand(d, f, q, r) : (n.data(w, new Image), m.lazyload(m, d, f, function(a) { m.processImg(d, f, a, r), n.removeData(w) }))) : (n.data(s, "error"), m.kill(n)) }, demand: function(b, d, f, g) {
            var i = this,
                o = a(b);
            if ("scroll" === d.onDemandEvent) { o.wrap("<div />");
                var p = o.parent();
                p.css({ width: d.width ? c(d.width) + e(d.width) : o.width() + "px", height: d.height ? c(d.height) + e(d.height) : o.height() + "px" }), o.data(u, function() { h(p, d.threshold) && (j.unbind(l, o.data(u)), o.removeData(u), o.unwrap(), o.data(w, new Image), i.lazyload(i, b, d, function(a) { i.processImg(b, d, a, g), o.removeData(w) })) }), j.bind(l, o.data(u)).triggerHandler(k.scroll) } else if ("click" === d.onDemandEvent || "mouseenter" === d.onDemandEvent) {
                var r = o.parent(),
                    s = "click" === d.onDemandEvent ? m : n;
                o.data(t, function() { r.unbind(s, o.data(t)), o.removeData(t), o.data(w, new Image), i.lazyload(i, b, d, function(a) { i.processImg(b, d, a, g), o.removeData(w) }), o.data(q, !0) }), r.bind(s, o.data(t)) } }, updateGlobal: function(b, c, d) { b.global.outputElems.push(a(c)[0]), b.global.elemCounter++, x.outputElems.push(a(c)[0]), b.global.elemCounter == b.global.inputElems.length && d.done.apply(b, [b.global.outputElems]) } }, a.fn[i] = function(c) {
        var d = {},
            e = { elemCounter: 0, outputElems: [], inputElems: function(b) {
                    for (var c = a(b), d = c.length, e = [], f = 0; d > f; f++) e.push(c.get(f));
                    return e }(a(this)) };
        return d[i] = function(c) {
            return "undefined" == typeof c ? void b("error", "Please specify an action like $." + i + '("killall")') : (c = c.toLowerCase(), void("killall" == c && a.each(x.inputElems, function() { new f(this, "kill") }))) }, a.extend(a, d), this.each(function() {
            var b = a(this);
            this.global = e, x.inputElems.push(b), "string" == typeof c ? new f(this, c) : (b.data(w) && b.data(w).complete === !1 && (b.data(w).src = "", new f(this, "kill")), b.data(i) ? b.data(r) && b.data(r).reinit === !0 && (new f(this, "kill"), b.data(i, new f(this, c))) : b.data(i, new f(this, c))) }) }, a.fn[i].defaults = y });
