import { getCurrentInstance as Ta, computed as Z, isVNode as qh, Fragment as gt, Comment as Yf, inject as Pt, ref as le, warn as Gh, unref as nu, defineComponent as Mt, shallowRef as Kh, watch as Ct, nextTick as yn, onMounted as Nn, onUpdated as Xh, openBlock as ie, createElementBlock as ue, normalizeClass as xe, normalizeStyle as en, createCommentVNode as je, renderSlot as Wt, createElementVNode as V, mergeProps as Bs, withModifiers as jf, toDisplayString as Ie, onBeforeUnmount as Do, provide as Vr, createBlock as Sn, Transition as Co, withCtx as Bt, withDirectives as Ot, vShow as Mn, resolveComponent as yt, resolveDynamicComponent as Zh, createVNode as at, onActivated as Jh, onDeactivated as Qh, h as Pn, Teleport as ep, reactive as rr, cloneVNode as tp, toRef as ru, resolveDirective as Da, renderList as It, createTextVNode as nr, toRefs as Oo, pushScopeId as Mo, popScopeId as $o, onUnmounted as Po, onBeforeMount as Ff, createSlots as np } from "vue";
let rp = {};
const ip = (e) => rp[e];
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ap(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var a = e[t];
    i[a[0]] = a[1];
  }
  return i;
}
var sp = ap;
const Hf = sp;
class Vf extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Wf(e, t) {
  throw new Vf(`[${e}] ${t}`);
}
function ua(e, t) {
  process.env.NODE_ENV !== "production" && console.warn(new Vf(`[${e}] ${t}`));
}
const op = ["class", "style"], lp = /^on[A-Z]/, up = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n = [] } = e, i = n.concat(op), a = Ta();
  return a ? Z(() => {
    var o;
    return Hf(Object.entries((o = a.proxy) === null || o === void 0 ? void 0 : o.$attrs).filter(([f]) => !i.includes(f) && !(t && lp.test(f))));
  }) : (ua("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), Z(() => ({})));
}, Sr = typeof window > "u";
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Bf = () => {
}, fp = Object.assign, Ao = Array.isArray, xr = (e) => typeof e == "string", fa = (e) => e !== null && typeof e == "object", cp = Object.prototype.toString, dp = (e) => cp.call(e), hp = (e) => dp(e).slice(8, -1), pp = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, mp = /\B([A-Z])/g, pA = pp((e) => e.replace(mp, "-$1").toLowerCase());
function vp() {
  this.__data__ = [], this.size = 0;
}
var gp = vp;
function yp(e, t) {
  return e === t || e !== e && t !== t;
}
var zf = yp, bp = zf;
function wp(e, t) {
  for (var n = e.length; n--; )
    if (bp(e[n][0], t))
      return n;
  return -1;
}
var Ca = wp, Sp = Ca, _p = Array.prototype, kp = _p.splice;
function Tp(e) {
  var t = this.__data__, n = Sp(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : kp.call(t, n, 1), --this.size, !0;
}
var Dp = Tp, Cp = Ca;
function Op(e) {
  var t = this.__data__, n = Cp(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Mp = Op, $p = Ca;
function Pp(e) {
  return $p(this.__data__, e) > -1;
}
var Ap = Pp, Ep = Ca;
function Np(e, t) {
  var n = this.__data__, i = Ep(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
var Lp = Np, Rp = gp, xp = Dp, Ip = Mp, Yp = Ap, jp = Lp;
function Kr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Kr.prototype.clear = Rp;
Kr.prototype.delete = xp;
Kr.prototype.get = Ip;
Kr.prototype.has = Yp;
Kr.prototype.set = jp;
var Oa = Kr, Fp = Oa;
function Hp() {
  this.__data__ = new Fp(), this.size = 0;
}
var Vp = Hp;
function Wp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Bp = Wp;
function zp(e) {
  return this.__data__.get(e);
}
var Up = zp;
function qp(e) {
  return this.__data__.has(e);
}
var Gp = qp, Kp = typeof zt == "object" && zt && zt.Object === Object && zt, Uf = Kp, Xp = Uf, Zp = typeof self == "object" && self && self.Object === Object && self, Jp = Xp || Zp || Function("return this")(), Ln = Jp, Qp = Ln, em = Qp.Symbol, Ma = em, iu = Ma, qf = Object.prototype, tm = qf.hasOwnProperty, nm = qf.toString, di = iu ? iu.toStringTag : void 0;
function rm(e) {
  var t = tm.call(e, di), n = e[di];
  try {
    e[di] = void 0;
    var i = !0;
  } catch {
  }
  var a = nm.call(e);
  return i && (t ? e[di] = n : delete e[di]), a;
}
var im = rm, am = Object.prototype, sm = am.toString;
function om(e) {
  return sm.call(e);
}
var lm = om, au = Ma, um = im, fm = lm, cm = "[object Null]", dm = "[object Undefined]", su = au ? au.toStringTag : void 0;
function hm(e) {
  return e == null ? e === void 0 ? dm : cm : su && su in Object(e) ? um(e) : fm(e);
}
var Ai = hm;
function pm(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $a = pm, mm = Ai, vm = $a, gm = "[object AsyncFunction]", ym = "[object Function]", bm = "[object GeneratorFunction]", wm = "[object Proxy]";
function Sm(e) {
  if (!vm(e))
    return !1;
  var t = mm(e);
  return t == ym || t == bm || t == gm || t == wm;
}
var Gf = Sm, _m = Ln, km = _m["__core-js_shared__"], Tm = km, Ts = Tm, ou = function() {
  var e = /[^.]+$/.exec(Ts && Ts.keys && Ts.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Dm(e) {
  return !!ou && ou in e;
}
var Cm = Dm, Om = Function.prototype, Mm = Om.toString;
function $m(e) {
  if (e != null) {
    try {
      return Mm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kf = $m, Pm = Gf, Am = Cm, Em = $a, Nm = Kf, Lm = /[\\^$.*+?()[\]{}|]/g, Rm = /^\[object .+?Constructor\]$/, xm = Function.prototype, Im = Object.prototype, Ym = xm.toString, jm = Im.hasOwnProperty, Fm = RegExp(
  "^" + Ym.call(jm).replace(Lm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hm(e) {
  if (!Em(e) || Am(e))
    return !1;
  var t = Pm(e) ? Fm : Rm;
  return t.test(Nm(e));
}
var Vm = Hm;
function Wm(e, t) {
  return e == null ? void 0 : e[t];
}
var Bm = Wm, zm = Vm, Um = Bm;
function qm(e, t) {
  var n = Um(e, t);
  return zm(n) ? n : void 0;
}
var _r = qm, Gm = _r, Km = Ln, Xm = Gm(Km, "Map"), Eo = Xm, Zm = _r, Jm = Zm(Object, "create"), Pa = Jm, lu = Pa;
function Qm() {
  this.__data__ = lu ? lu(null) : {}, this.size = 0;
}
var ev = Qm;
function tv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nv = tv, rv = Pa, iv = "__lodash_hash_undefined__", av = Object.prototype, sv = av.hasOwnProperty;
function ov(e) {
  var t = this.__data__;
  if (rv) {
    var n = t[e];
    return n === iv ? void 0 : n;
  }
  return sv.call(t, e) ? t[e] : void 0;
}
var lv = ov, uv = Pa, fv = Object.prototype, cv = fv.hasOwnProperty;
function dv(e) {
  var t = this.__data__;
  return uv ? t[e] !== void 0 : cv.call(t, e);
}
var hv = dv, pv = Pa, mv = "__lodash_hash_undefined__";
function vv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pv && t === void 0 ? mv : t, this;
}
var gv = vv, yv = ev, bv = nv, wv = lv, Sv = hv, _v = gv;
function Xr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Xr.prototype.clear = yv;
Xr.prototype.delete = bv;
Xr.prototype.get = wv;
Xr.prototype.has = Sv;
Xr.prototype.set = _v;
var kv = Xr, uu = kv, Tv = Oa, Dv = Eo;
function Cv() {
  this.size = 0, this.__data__ = {
    hash: new uu(),
    map: new (Dv || Tv)(),
    string: new uu()
  };
}
var Ov = Cv;
function Mv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var $v = Mv, Pv = $v;
function Av(e, t) {
  var n = e.__data__;
  return Pv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Aa = Av, Ev = Aa;
function Nv(e) {
  var t = Ev(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Lv = Nv, Rv = Aa;
function xv(e) {
  return Rv(this, e).get(e);
}
var Iv = xv, Yv = Aa;
function jv(e) {
  return Yv(this, e).has(e);
}
var Fv = jv, Hv = Aa;
function Vv(e, t) {
  var n = Hv(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
var Wv = Vv, Bv = Ov, zv = Lv, Uv = Iv, qv = Fv, Gv = Wv;
function Zr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Zr.prototype.clear = Bv;
Zr.prototype.delete = zv;
Zr.prototype.get = Uv;
Zr.prototype.has = qv;
Zr.prototype.set = Gv;
var Xf = Zr, Kv = Oa, Xv = Eo, Zv = Xf, Jv = 200;
function Qv(e, t) {
  var n = this.__data__;
  if (n instanceof Kv) {
    var i = n.__data__;
    if (!Xv || i.length < Jv - 1)
      return i.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Zv(i);
  }
  return n.set(e, t), this.size = n.size, this;
}
var eg = Qv, tg = Oa, ng = Vp, rg = Bp, ig = Up, ag = Gp, sg = eg;
function Jr(e) {
  var t = this.__data__ = new tg(e);
  this.size = t.size;
}
Jr.prototype.clear = ng;
Jr.prototype.delete = rg;
Jr.prototype.get = ig;
Jr.prototype.has = ag;
Jr.prototype.set = sg;
var og = Jr, lg = "__lodash_hash_undefined__";
function ug(e) {
  return this.__data__.set(e, lg), this;
}
var fg = ug;
function cg(e) {
  return this.__data__.has(e);
}
var dg = cg, hg = Xf, pg = fg, mg = dg;
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new hg(); ++t < n; )
    this.add(e[t]);
}
ca.prototype.add = ca.prototype.push = pg;
ca.prototype.has = mg;
var Zf = ca;
function vg(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var gg = vg;
function yg(e, t) {
  return e.has(t);
}
var Jf = yg, bg = Zf, wg = gg, Sg = Jf, _g = 1, kg = 2;
function Tg(e, t, n, i, a, o) {
  var f = n & _g, d = e.length, m = t.length;
  if (d != m && !(f && m > d))
    return !1;
  var y = o.get(e), w = o.get(t);
  if (y && w)
    return y == t && w == e;
  var b = -1, T = !0, O = n & kg ? new bg() : void 0;
  for (o.set(e, t), o.set(t, e); ++b < d; ) {
    var x = e[b], C = t[b];
    if (i)
      var $ = f ? i(C, x, b, t, e, o) : i(x, C, b, e, t, o);
    if ($ !== void 0) {
      if ($)
        continue;
      T = !1;
      break;
    }
    if (O) {
      if (!wg(t, function(D, E) {
        if (!Sg(O, E) && (x === D || a(x, D, n, i, o)))
          return O.push(E);
      })) {
        T = !1;
        break;
      }
    } else if (!(x === C || a(x, C, n, i, o))) {
      T = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), T;
}
var Qf = Tg, Dg = Ln, Cg = Dg.Uint8Array, Og = Cg;
function Mg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(i, a) {
    n[++t] = [a, i];
  }), n;
}
var $g = Mg;
function Pg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(i) {
    n[++t] = i;
  }), n;
}
var No = Pg, fu = Ma, cu = Og, Ag = zf, Eg = Qf, Ng = $g, Lg = No, Rg = 1, xg = 2, Ig = "[object Boolean]", Yg = "[object Date]", jg = "[object Error]", Fg = "[object Map]", Hg = "[object Number]", Vg = "[object RegExp]", Wg = "[object Set]", Bg = "[object String]", zg = "[object Symbol]", Ug = "[object ArrayBuffer]", qg = "[object DataView]", du = fu ? fu.prototype : void 0, Ds = du ? du.valueOf : void 0;
function Gg(e, t, n, i, a, o, f) {
  switch (n) {
    case qg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ug:
      return !(e.byteLength != t.byteLength || !o(new cu(e), new cu(t)));
    case Ig:
    case Yg:
    case Hg:
      return Ag(+e, +t);
    case jg:
      return e.name == t.name && e.message == t.message;
    case Vg:
    case Bg:
      return e == t + "";
    case Fg:
      var d = Ng;
    case Wg:
      var m = i & Rg;
      if (d || (d = Lg), e.size != t.size && !m)
        return !1;
      var y = f.get(e);
      if (y)
        return y == t;
      i |= xg, f.set(e, t);
      var w = Eg(d(e), d(t), i, a, o, f);
      return f.delete(e), w;
    case zg:
      if (Ds)
        return Ds.call(e) == Ds.call(t);
  }
  return !1;
}
var Kg = Gg;
function Xg(e, t) {
  for (var n = -1, i = t.length, a = e.length; ++n < i; )
    e[a + n] = t[n];
  return e;
}
var ec = Xg, Zg = Array.isArray, Ea = Zg, Jg = ec, Qg = Ea;
function ey(e, t, n) {
  var i = t(e);
  return Qg(e) ? i : Jg(i, n(e));
}
var ty = ey;
function ny(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, a = 0, o = []; ++n < i; ) {
    var f = e[n];
    t(f, n, e) && (o[a++] = f);
  }
  return o;
}
var ry = ny;
function iy() {
  return [];
}
var ay = iy, sy = ry, oy = ay, ly = Object.prototype, uy = ly.propertyIsEnumerable, hu = Object.getOwnPropertySymbols, fy = hu ? function(e) {
  return e == null ? [] : (e = Object(e), sy(hu(e), function(t) {
    return uy.call(e, t);
  }));
} : oy, cy = fy;
function dy(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var hy = dy;
function py(e) {
  return e != null && typeof e == "object";
}
var Qr = py, my = Ai, vy = Qr, gy = "[object Arguments]";
function yy(e) {
  return vy(e) && my(e) == gy;
}
var by = yy, pu = by, wy = Qr, tc = Object.prototype, Sy = tc.hasOwnProperty, _y = tc.propertyIsEnumerable, ky = pu(function() {
  return arguments;
}()) ? pu : function(e) {
  return wy(e) && Sy.call(e, "callee") && !_y.call(e, "callee");
}, nc = ky, Ti = {}, Ty = {
  get exports() {
    return Ti;
  },
  set exports(e) {
    Ti = e;
  }
};
function Dy() {
  return !1;
}
var Cy = Dy;
(function(e, t) {
  var n = Ln, i = Cy, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, f = o && o.exports === a, d = f ? n.Buffer : void 0, m = d ? d.isBuffer : void 0, y = m || i;
  e.exports = y;
})(Ty, Ti);
var Oy = 9007199254740991, My = /^(?:0|[1-9]\d*)$/;
function $y(e, t) {
  var n = typeof e;
  return t = t ?? Oy, !!t && (n == "number" || n != "symbol" && My.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Py = $y, Ay = 9007199254740991;
function Ey(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ay;
}
var rc = Ey, Ny = Ai, Ly = rc, Ry = Qr, xy = "[object Arguments]", Iy = "[object Array]", Yy = "[object Boolean]", jy = "[object Date]", Fy = "[object Error]", Hy = "[object Function]", Vy = "[object Map]", Wy = "[object Number]", By = "[object Object]", zy = "[object RegExp]", Uy = "[object Set]", qy = "[object String]", Gy = "[object WeakMap]", Ky = "[object ArrayBuffer]", Xy = "[object DataView]", Zy = "[object Float32Array]", Jy = "[object Float64Array]", Qy = "[object Int8Array]", eb = "[object Int16Array]", tb = "[object Int32Array]", nb = "[object Uint8Array]", rb = "[object Uint8ClampedArray]", ib = "[object Uint16Array]", ab = "[object Uint32Array]", ct = {};
ct[Zy] = ct[Jy] = ct[Qy] = ct[eb] = ct[tb] = ct[nb] = ct[rb] = ct[ib] = ct[ab] = !0;
ct[xy] = ct[Iy] = ct[Ky] = ct[Yy] = ct[Xy] = ct[jy] = ct[Fy] = ct[Hy] = ct[Vy] = ct[Wy] = ct[By] = ct[zy] = ct[Uy] = ct[qy] = ct[Gy] = !1;
function sb(e) {
  return Ry(e) && Ly(e.length) && !!ct[Ny(e)];
}
var ob = sb;
function lb(e) {
  return function(t) {
    return e(t);
  };
}
var ub = lb, da = {}, fb = {
  get exports() {
    return da;
  },
  set exports(e) {
    da = e;
  }
};
(function(e, t) {
  var n = Uf, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, f = o && n.process, d = function() {
    try {
      var m = a && a.require && a.require("util").types;
      return m || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = d;
})(fb, da);
var cb = ob, db = ub, mu = da, vu = mu && mu.isTypedArray, hb = vu ? db(vu) : cb, ic = hb, pb = hy, mb = nc, vb = Ea, gb = Ti, yb = Py, bb = ic, wb = Object.prototype, Sb = wb.hasOwnProperty;
function _b(e, t) {
  var n = vb(e), i = !n && mb(e), a = !n && !i && gb(e), o = !n && !i && !a && bb(e), f = n || i || a || o, d = f ? pb(e.length, String) : [], m = d.length;
  for (var y in e)
    (t || Sb.call(e, y)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
    yb(y, m))) && d.push(y);
  return d;
}
var kb = _b, Tb = Object.prototype;
function Db(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Tb;
  return e === n;
}
var Cb = Db;
function Ob(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Mb = Ob, $b = Mb, Pb = $b(Object.keys, Object), Ab = Pb, Eb = Cb, Nb = Ab, Lb = Object.prototype, Rb = Lb.hasOwnProperty;
function xb(e) {
  if (!Eb(e))
    return Nb(e);
  var t = [];
  for (var n in Object(e))
    Rb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Ib = xb, Yb = Gf, jb = rc;
function Fb(e) {
  return e != null && jb(e.length) && !Yb(e);
}
var ac = Fb, Hb = kb, Vb = Ib, Wb = ac;
function Bb(e) {
  return Wb(e) ? Hb(e) : Vb(e);
}
var zb = Bb, Ub = ty, qb = cy, Gb = zb;
function Kb(e) {
  return Ub(e, Gb, qb);
}
var Xb = Kb, gu = Xb, Zb = 1, Jb = Object.prototype, Qb = Jb.hasOwnProperty;
function ew(e, t, n, i, a, o) {
  var f = n & Zb, d = gu(e), m = d.length, y = gu(t), w = y.length;
  if (m != w && !f)
    return !1;
  for (var b = m; b--; ) {
    var T = d[b];
    if (!(f ? T in t : Qb.call(t, T)))
      return !1;
  }
  var O = o.get(e), x = o.get(t);
  if (O && x)
    return O == t && x == e;
  var C = !0;
  o.set(e, t), o.set(t, e);
  for (var $ = f; ++b < m; ) {
    T = d[b];
    var D = e[T], E = t[T];
    if (i)
      var I = f ? i(E, D, T, t, e, o) : i(D, E, T, e, t, o);
    if (!(I === void 0 ? D === E || a(D, E, n, i, o) : I)) {
      C = !1;
      break;
    }
    $ || ($ = T == "constructor");
  }
  if (C && !$) {
    var A = e.constructor, B = t.constructor;
    A != B && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof B == "function" && B instanceof B) && (C = !1);
  }
  return o.delete(e), o.delete(t), C;
}
var tw = ew, nw = _r, rw = Ln, iw = nw(rw, "DataView"), aw = iw, sw = _r, ow = Ln, lw = sw(ow, "Promise"), uw = lw, fw = _r, cw = Ln, dw = fw(cw, "Set"), sc = dw, hw = _r, pw = Ln, mw = hw(pw, "WeakMap"), vw = mw, zs = aw, Us = Eo, qs = uw, Gs = sc, Ks = vw, oc = Ai, ei = Kf, yu = "[object Map]", gw = "[object Object]", bu = "[object Promise]", wu = "[object Set]", Su = "[object WeakMap]", _u = "[object DataView]", yw = ei(zs), bw = ei(Us), ww = ei(qs), Sw = ei(Gs), _w = ei(Ks), vr = oc;
(zs && vr(new zs(new ArrayBuffer(1))) != _u || Us && vr(new Us()) != yu || qs && vr(qs.resolve()) != bu || Gs && vr(new Gs()) != wu || Ks && vr(new Ks()) != Su) && (vr = function(e) {
  var t = oc(e), n = t == gw ? e.constructor : void 0, i = n ? ei(n) : "";
  if (i)
    switch (i) {
      case yw:
        return _u;
      case bw:
        return yu;
      case ww:
        return bu;
      case Sw:
        return wu;
      case _w:
        return Su;
    }
  return t;
});
var kw = vr, Cs = og, Tw = Qf, Dw = Kg, Cw = tw, ku = kw, Tu = Ea, Du = Ti, Ow = ic, Mw = 1, Cu = "[object Arguments]", Ou = "[object Array]", Zi = "[object Object]", $w = Object.prototype, Mu = $w.hasOwnProperty;
function Pw(e, t, n, i, a, o) {
  var f = Tu(e), d = Tu(t), m = f ? Ou : ku(e), y = d ? Ou : ku(t);
  m = m == Cu ? Zi : m, y = y == Cu ? Zi : y;
  var w = m == Zi, b = y == Zi, T = m == y;
  if (T && Du(e)) {
    if (!Du(t))
      return !1;
    f = !0, w = !1;
  }
  if (T && !w)
    return o || (o = new Cs()), f || Ow(e) ? Tw(e, t, n, i, a, o) : Dw(e, t, m, n, i, a, o);
  if (!(n & Mw)) {
    var O = w && Mu.call(e, "__wrapped__"), x = b && Mu.call(t, "__wrapped__");
    if (O || x) {
      var C = O ? e.value() : e, $ = x ? t.value() : t;
      return o || (o = new Cs()), a(C, $, n, i, o);
    }
  }
  return T ? (o || (o = new Cs()), Cw(e, t, n, i, a, o)) : !1;
}
var Aw = Pw, Ew = Aw, $u = Qr;
function lc(e, t, n, i, a) {
  return e === t ? !0 : e == null || t == null || !$u(e) && !$u(t) ? e !== e && t !== t : Ew(e, t, n, i, lc, a);
}
var Nw = lc;
const Lw = "Util";
function Rw(e) {
  const t = {};
  for (let n = 0; n < e.length; n++)
    e[n] && fp(t, e[n]);
  return t;
}
const xw = () => Math.floor(Math.random() * 1e4), yi = (e) => !e && e !== 0 ? [] : Array.isArray(e) ? e : [e], Pu = (e) => typeof e == "boolean", Di = (e) => typeof e == "number", Iw = (e) => hp(e).startsWith("HTML");
function uc() {
  const e = Ta();
  return "$ELEMENT" in e.proxy ? e.proxy.$ELEMENT : {};
}
function fc(e) {
  return !!(!e && e !== 0 || Ao(e) && !e.length || fa(e) && !Object.keys(e).length);
}
function hr(e) {
  return e.value;
}
function $r(e) {
  return xr(e) ? e : Di(e) ? `${e}px` : (ua(Lw, "binding value must be a string or number"), "");
}
const Xs = function(e) {
  return (e || "").split(" ").filter((t) => !!t.trim());
}, bn = function(e, t, n, i = !1) {
  e && t && n && (e == null || e.addEventListener(t, n, i));
}, Er = function(e, t, n, i = !1) {
  e && t && n && (e == null || e.removeEventListener(t, n, i));
}, Yw = function(e, t, n) {
  const i = function(...a) {
    n && n.apply(this, a), Er(e, t, i);
  };
  bn(e, t, i);
};
function cc(e, t) {
  if (!e || !t)
    return !1;
  if (t.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  return e.classList ? e.classList.contains(t) : (e.getAttribute("class") || "").split(" ").includes(t);
}
function Ji(e, t) {
  if (!e)
    return;
  let n = e.getAttribute("class") || "";
  const i = Xs(n), a = (t || "").split(" ").filter((o) => !i.includes(o) && !!o.trim());
  e.classList ? e.classList.add(...a) : (n += ` ${a.join(" ")}`, e.setAttribute("class", n));
}
function Os(e, t) {
  if (!e || !t)
    return;
  const n = Xs(t);
  let i = e.getAttribute("class") || "";
  if (e.classList) {
    e.classList.remove(...n);
    return;
  }
  n.forEach((o) => {
    i = i.replace(` ${o} `, " ");
  });
  const a = Xs(i).join(" ");
  e.setAttribute("class", a);
}
const Au = (e) => e.stopPropagation(), wt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Zs = "update:modelValue", jw = {
  validating: "el-icon-loading",
  success: "el-icon-circle-check",
  error: "el-icon-circle-close"
};
var Ut = "top", un = "bottom", fn = "right", qt = "left", Na = "auto", Ei = [Ut, un, fn, qt], Wr = "start", Ci = "end", Fw = "clippingParents", dc = "viewport", hi = "popper", Hw = "reference", Eu = /* @__PURE__ */ Ei.reduce(function(e, t) {
  return e.concat([t + "-" + Wr, t + "-" + Ci]);
}, []), hc = /* @__PURE__ */ [].concat(Ei, [Na]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wr, t + "-" + Ci]);
}, []), Vw = "beforeRead", Ww = "read", Bw = "afterRead", zw = "beforeMain", Uw = "main", qw = "afterMain", Gw = "beforeWrite", Kw = "write", Xw = "afterWrite", Js = [Vw, Ww, Bw, zw, Uw, qw, Gw, Kw, Xw];
function An(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function cn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function wr(e) {
  var t = cn(e).Element;
  return e instanceof t || e instanceof Element;
}
function tn(e) {
  var t = cn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = cn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Zw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var i = t.styles[n] || {}, a = t.attributes[n] || {}, o = t.elements[n];
    !tn(o) || !An(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(f) {
      var d = a[f];
      d === !1 ? o.removeAttribute(f) : o.setAttribute(f, d === !0 ? "" : d);
    }));
  });
}
function Jw(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var a = t.elements[i], o = t.attributes[i] || {}, f = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : n[i]), d = f.reduce(function(m, y) {
        return m[y] = "", m;
      }, {});
      !tn(a) || !An(a) || (Object.assign(a.style, d), Object.keys(o).forEach(function(m) {
        a.removeAttribute(m);
      }));
    });
  };
}
const Qw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zw,
  effect: Jw,
  requires: ["computeStyles"]
};
function _n(e) {
  return e.split("-")[0];
}
var yr = Math.max, ha = Math.min, Br = Math.round;
function Qs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pc() {
  return !/^((?!chrome|android).)*safari/i.test(Qs());
}
function zr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var i = e.getBoundingClientRect(), a = 1, o = 1;
  t && tn(e) && (a = e.offsetWidth > 0 && Br(i.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Br(i.height) / e.offsetHeight || 1);
  var f = wr(e) ? cn(e) : window, d = f.visualViewport, m = !pc() && n, y = (i.left + (m && d ? d.offsetLeft : 0)) / a, w = (i.top + (m && d ? d.offsetTop : 0)) / o, b = i.width / a, T = i.height / o;
  return {
    width: b,
    height: T,
    top: w,
    right: y + b,
    bottom: w + T,
    left: y,
    x: y,
    y: w
  };
}
function Ro(e) {
  var t = zr(e), n = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: i
  };
}
function mc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Lo(n)) {
    var i = t;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function kn(e) {
  return cn(e).getComputedStyle(e);
}
function e0(e) {
  return ["table", "td", "th"].indexOf(An(e)) >= 0;
}
function ir(e) {
  return ((wr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function La(e) {
  return An(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Lo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ir(e)
  );
}
function Nu(e) {
  return !tn(e) || // https://github.com/popperjs/popper-core/issues/837
  kn(e).position === "fixed" ? null : e.offsetParent;
}
function t0(e) {
  var t = /firefox/i.test(Qs()), n = /Trident/i.test(Qs());
  if (n && tn(e)) {
    var i = kn(e);
    if (i.position === "fixed")
      return null;
  }
  var a = La(e);
  for (Lo(a) && (a = a.host); tn(a) && ["html", "body"].indexOf(An(a)) < 0; ) {
    var o = kn(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ni(e) {
  for (var t = cn(e), n = Nu(e); n && e0(n) && kn(n).position === "static"; )
    n = Nu(n);
  return n && (An(n) === "html" || An(n) === "body" && kn(n).position === "static") ? t : n || t0(e) || t;
}
function xo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bi(e, t, n) {
  return yr(e, ha(t, n));
}
function n0(e, t, n) {
  var i = bi(e, t, n);
  return i > n ? n : i;
}
function vc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gc(e) {
  return Object.assign({}, vc(), e);
}
function yc(e, t) {
  return t.reduce(function(n, i) {
    return n[i] = e, n;
  }, {});
}
var r0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, gc(typeof t != "number" ? t : yc(t, Ei));
};
function i0(e) {
  var t, n = e.state, i = e.name, a = e.options, o = n.elements.arrow, f = n.modifiersData.popperOffsets, d = _n(n.placement), m = xo(d), y = [qt, fn].indexOf(d) >= 0, w = y ? "height" : "width";
  if (!(!o || !f)) {
    var b = r0(a.padding, n), T = Ro(o), O = m === "y" ? Ut : qt, x = m === "y" ? un : fn, C = n.rects.reference[w] + n.rects.reference[m] - f[m] - n.rects.popper[w], $ = f[m] - n.rects.reference[m], D = Ni(o), E = D ? m === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0, I = C / 2 - $ / 2, A = b[O], B = E - T[w] - b[x], u = E / 2 - T[w] / 2 + I, ee = bi(A, u, B), ne = m;
    n.modifiersData[i] = (t = {}, t[ne] = ee, t.centerOffset = ee - u, t);
  }
}
function a0(e) {
  var t = e.state, n = e.options, i = n.element, a = i === void 0 ? "[data-popper-arrow]" : i;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (tn(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !mc(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const s0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: i0,
  effect: a0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ur(e) {
  return e.split("-")[1];
}
var o0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function l0(e) {
  var t = e.x, n = e.y, i = window, a = i.devicePixelRatio || 1;
  return {
    x: Br(t * a) / a || 0,
    y: Br(n * a) / a || 0
  };
}
function Lu(e) {
  var t, n = e.popper, i = e.popperRect, a = e.placement, o = e.variation, f = e.offsets, d = e.position, m = e.gpuAcceleration, y = e.adaptive, w = e.roundOffsets, b = e.isFixed, T = f.x, O = T === void 0 ? 0 : T, x = f.y, C = x === void 0 ? 0 : x, $ = typeof w == "function" ? w({
    x: O,
    y: C
  }) : {
    x: O,
    y: C
  };
  O = $.x, C = $.y;
  var D = f.hasOwnProperty("x"), E = f.hasOwnProperty("y"), I = qt, A = Ut, B = window;
  if (y) {
    var u = Ni(n), ee = "clientHeight", ne = "clientWidth";
    if (u === cn(n) && (u = ir(n), kn(u).position !== "static" && d === "absolute" && (ee = "scrollHeight", ne = "scrollWidth")), u = u, a === Ut || (a === qt || a === fn) && o === Ci) {
      A = un;
      var ae = b && u === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        u[ee]
      );
      C -= ae - i.height, C *= m ? 1 : -1;
    }
    if (a === qt || (a === Ut || a === un) && o === Ci) {
      I = fn;
      var re = b && u === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        u[ne]
      );
      O -= re - i.width, O *= m ? 1 : -1;
    }
  }
  var me = Object.assign({
    position: d
  }, y && o0), we = w === !0 ? l0({
    x: O,
    y: C
  }) : {
    x: O,
    y: C
  };
  if (O = we.x, C = we.y, m) {
    var U;
    return Object.assign({}, me, (U = {}, U[A] = E ? "0" : "", U[I] = D ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + O + "px, " + C + "px)" : "translate3d(" + O + "px, " + C + "px, 0)", U));
  }
  return Object.assign({}, me, (t = {}, t[A] = E ? C + "px" : "", t[I] = D ? O + "px" : "", t.transform = "", t));
}
function u0(e) {
  var t = e.state, n = e.options, i = n.gpuAcceleration, a = i === void 0 ? !0 : i, o = n.adaptive, f = o === void 0 ? !0 : o, d = n.roundOffsets, m = d === void 0 ? !0 : d;
  if (process.env.NODE_ENV !== "production") {
    var y = kn(t.elements.popper).transitionProperty || "";
    f && ["transform", "top", "right", "bottom", "left"].some(function(b) {
      return y.indexOf(b) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var w = {
    placement: _n(t.placement),
    variation: Ur(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Lu(Object.assign({}, w, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: f,
    roundOffsets: m
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Lu(Object.assign({}, w, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: m
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const f0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: u0,
  data: {}
};
var Qi = {
  passive: !0
};
function c0(e) {
  var t = e.state, n = e.instance, i = e.options, a = i.scroll, o = a === void 0 ? !0 : a, f = i.resize, d = f === void 0 ? !0 : f, m = cn(t.elements.popper), y = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && y.forEach(function(w) {
    w.addEventListener("scroll", n.update, Qi);
  }), d && m.addEventListener("resize", n.update, Qi), function() {
    o && y.forEach(function(w) {
      w.removeEventListener("scroll", n.update, Qi);
    }), d && m.removeEventListener("resize", n.update, Qi);
  };
}
const d0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: c0,
  data: {}
};
var h0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ra(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return h0[t];
  });
}
var p0 = {
  start: "end",
  end: "start"
};
function Ru(e) {
  return e.replace(/start|end/g, function(t) {
    return p0[t];
  });
}
function Io(e) {
  var t = cn(e), n = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: i
  };
}
function Yo(e) {
  return zr(ir(e)).left + Io(e).scrollLeft;
}
function m0(e, t) {
  var n = cn(e), i = ir(e), a = n.visualViewport, o = i.clientWidth, f = i.clientHeight, d = 0, m = 0;
  if (a) {
    o = a.width, f = a.height;
    var y = pc();
    (y || !y && t === "fixed") && (d = a.offsetLeft, m = a.offsetTop);
  }
  return {
    width: o,
    height: f,
    x: d + Yo(e),
    y: m
  };
}
function v0(e) {
  var t, n = ir(e), i = Io(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = yr(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), f = yr(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), d = -i.scrollLeft + Yo(e), m = -i.scrollTop;
  return kn(a || n).direction === "rtl" && (d += yr(n.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: f,
    x: d,
    y: m
  };
}
function jo(e) {
  var t = kn(e), n = t.overflow, i = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + i);
}
function bc(e) {
  return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : tn(e) && jo(e) ? e : bc(La(e));
}
function wi(e, t) {
  var n;
  t === void 0 && (t = []);
  var i = bc(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = cn(i), f = a ? [o].concat(o.visualViewport || [], jo(i) ? i : []) : i, d = t.concat(f);
  return a ? d : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    d.concat(wi(La(f)))
  );
}
function eo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function g0(e, t) {
  var n = zr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function xu(e, t, n) {
  return t === dc ? eo(m0(e, n)) : wr(t) ? g0(t, n) : eo(v0(ir(e)));
}
function y0(e) {
  var t = wi(La(e)), n = ["absolute", "fixed"].indexOf(kn(e).position) >= 0, i = n && tn(e) ? Ni(e) : e;
  return wr(i) ? t.filter(function(a) {
    return wr(a) && mc(a, i) && An(a) !== "body";
  }) : [];
}
function b0(e, t, n, i) {
  var a = t === "clippingParents" ? y0(e) : [].concat(t), o = [].concat(a, [n]), f = o[0], d = o.reduce(function(m, y) {
    var w = xu(e, y, i);
    return m.top = yr(w.top, m.top), m.right = ha(w.right, m.right), m.bottom = ha(w.bottom, m.bottom), m.left = yr(w.left, m.left), m;
  }, xu(e, f, i));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
function wc(e) {
  var t = e.reference, n = e.element, i = e.placement, a = i ? _n(i) : null, o = i ? Ur(i) : null, f = t.x + t.width / 2 - n.width / 2, d = t.y + t.height / 2 - n.height / 2, m;
  switch (a) {
    case Ut:
      m = {
        x: f,
        y: t.y - n.height
      };
      break;
    case un:
      m = {
        x: f,
        y: t.y + t.height
      };
      break;
    case fn:
      m = {
        x: t.x + t.width,
        y: d
      };
      break;
    case qt:
      m = {
        x: t.x - n.width,
        y: d
      };
      break;
    default:
      m = {
        x: t.x,
        y: t.y
      };
  }
  var y = a ? xo(a) : null;
  if (y != null) {
    var w = y === "y" ? "height" : "width";
    switch (o) {
      case Wr:
        m[y] = m[y] - (t[w] / 2 - n[w] / 2);
        break;
      case Ci:
        m[y] = m[y] + (t[w] / 2 - n[w] / 2);
        break;
    }
  }
  return m;
}
function Oi(e, t) {
  t === void 0 && (t = {});
  var n = t, i = n.placement, a = i === void 0 ? e.placement : i, o = n.strategy, f = o === void 0 ? e.strategy : o, d = n.boundary, m = d === void 0 ? Fw : d, y = n.rootBoundary, w = y === void 0 ? dc : y, b = n.elementContext, T = b === void 0 ? hi : b, O = n.altBoundary, x = O === void 0 ? !1 : O, C = n.padding, $ = C === void 0 ? 0 : C, D = gc(typeof $ != "number" ? $ : yc($, Ei)), E = T === hi ? Hw : hi, I = e.rects.popper, A = e.elements[x ? E : T], B = b0(wr(A) ? A : A.contextElement || ir(e.elements.popper), m, w, f), u = zr(e.elements.reference), ee = wc({
    reference: u,
    element: I,
    strategy: "absolute",
    placement: a
  }), ne = eo(Object.assign({}, I, ee)), ae = T === hi ? ne : u, re = {
    top: B.top - ae.top + D.top,
    bottom: ae.bottom - B.bottom + D.bottom,
    left: B.left - ae.left + D.left,
    right: ae.right - B.right + D.right
  }, me = e.modifiersData.offset;
  if (T === hi && me) {
    var we = me[a];
    Object.keys(re).forEach(function(U) {
      var q = [fn, un].indexOf(U) >= 0 ? 1 : -1, Y = [Ut, un].indexOf(U) >= 0 ? "y" : "x";
      re[U] += we[Y] * q;
    });
  }
  return re;
}
function w0(e, t) {
  t === void 0 && (t = {});
  var n = t, i = n.placement, a = n.boundary, o = n.rootBoundary, f = n.padding, d = n.flipVariations, m = n.allowedAutoPlacements, y = m === void 0 ? hc : m, w = Ur(i), b = w ? d ? Eu : Eu.filter(function(x) {
    return Ur(x) === w;
  }) : Ei, T = b.filter(function(x) {
    return y.indexOf(x) >= 0;
  });
  T.length === 0 && (T = b, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var O = T.reduce(function(x, C) {
    return x[C] = Oi(e, {
      placement: C,
      boundary: a,
      rootBoundary: o,
      padding: f
    })[_n(C)], x;
  }, {});
  return Object.keys(O).sort(function(x, C) {
    return O[x] - O[C];
  });
}
function S0(e) {
  if (_n(e) === Na)
    return [];
  var t = ra(e);
  return [Ru(e), t, Ru(t)];
}
function _0(e) {
  var t = e.state, n = e.options, i = e.name;
  if (!t.modifiersData[i]._skip) {
    for (var a = n.mainAxis, o = a === void 0 ? !0 : a, f = n.altAxis, d = f === void 0 ? !0 : f, m = n.fallbackPlacements, y = n.padding, w = n.boundary, b = n.rootBoundary, T = n.altBoundary, O = n.flipVariations, x = O === void 0 ? !0 : O, C = n.allowedAutoPlacements, $ = t.options.placement, D = _n($), E = D === $, I = m || (E || !x ? [ra($)] : S0($)), A = [$].concat(I).reduce(function(te, Oe) {
      return te.concat(_n(Oe) === Na ? w0(t, {
        placement: Oe,
        boundary: w,
        rootBoundary: b,
        padding: y,
        flipVariations: x,
        allowedAutoPlacements: C
      }) : Oe);
    }, []), B = t.rects.reference, u = t.rects.popper, ee = /* @__PURE__ */ new Map(), ne = !0, ae = A[0], re = 0; re < A.length; re++) {
      var me = A[re], we = _n(me), U = Ur(me) === Wr, q = [Ut, un].indexOf(we) >= 0, Y = q ? "width" : "height", R = Oi(t, {
        placement: me,
        boundary: w,
        rootBoundary: b,
        altBoundary: T,
        padding: y
      }), F = q ? U ? fn : qt : U ? un : Ut;
      B[Y] > u[Y] && (F = ra(F));
      var W = ra(F), X = [];
      if (o && X.push(R[we] <= 0), d && X.push(R[F] <= 0, R[W] <= 0), X.every(function(te) {
        return te;
      })) {
        ae = me, ne = !1;
        break;
      }
      ee.set(me, X);
    }
    if (ne)
      for (var _e = x ? 3 : 1, Te = function(Oe) {
        var Be = A.find(function(oe) {
          var ve = ee.get(oe);
          if (ve)
            return ve.slice(0, Oe).every(function(Se) {
              return Se;
            });
        });
        if (Be)
          return ae = Be, "break";
      }, Ae = _e; Ae > 0; Ae--) {
        var Ye = Te(Ae);
        if (Ye === "break")
          break;
      }
    t.placement !== ae && (t.modifiersData[i]._skip = !0, t.placement = ae, t.reset = !0);
  }
}
const k0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Iu(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Yu(e) {
  return [Ut, fn, un, qt].some(function(t) {
    return e[t] >= 0;
  });
}
function T0(e) {
  var t = e.state, n = e.name, i = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, f = Oi(t, {
    elementContext: "reference"
  }), d = Oi(t, {
    altBoundary: !0
  }), m = Iu(f, i), y = Iu(d, a, o), w = Yu(m), b = Yu(y);
  t.modifiersData[n] = {
    referenceClippingOffsets: m,
    popperEscapeOffsets: y,
    isReferenceHidden: w,
    hasPopperEscaped: b
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": w,
    "data-popper-escaped": b
  });
}
const D0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: T0
};
function C0(e, t, n) {
  var i = _n(e), a = [qt, Ut].indexOf(i) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, f = o[0], d = o[1];
  return f = f || 0, d = (d || 0) * a, [qt, fn].indexOf(i) >= 0 ? {
    x: d,
    y: f
  } : {
    x: f,
    y: d
  };
}
function O0(e) {
  var t = e.state, n = e.options, i = e.name, a = n.offset, o = a === void 0 ? [0, 0] : a, f = hc.reduce(function(w, b) {
    return w[b] = C0(b, t.rects, o), w;
  }, {}), d = f[t.placement], m = d.x, y = d.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += m, t.modifiersData.popperOffsets.y += y), t.modifiersData[i] = f;
}
const M0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: O0
};
function $0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = wc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const P0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $0,
  data: {}
};
function A0(e) {
  return e === "x" ? "y" : "x";
}
function E0(e) {
  var t = e.state, n = e.options, i = e.name, a = n.mainAxis, o = a === void 0 ? !0 : a, f = n.altAxis, d = f === void 0 ? !1 : f, m = n.boundary, y = n.rootBoundary, w = n.altBoundary, b = n.padding, T = n.tether, O = T === void 0 ? !0 : T, x = n.tetherOffset, C = x === void 0 ? 0 : x, $ = Oi(t, {
    boundary: m,
    rootBoundary: y,
    padding: b,
    altBoundary: w
  }), D = _n(t.placement), E = Ur(t.placement), I = !E, A = xo(D), B = A0(A), u = t.modifiersData.popperOffsets, ee = t.rects.reference, ne = t.rects.popper, ae = typeof C == "function" ? C(Object.assign({}, t.rects, {
    placement: t.placement
  })) : C, re = typeof ae == "number" ? {
    mainAxis: ae,
    altAxis: ae
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, ae), me = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, we = {
    x: 0,
    y: 0
  };
  if (u) {
    if (o) {
      var U, q = A === "y" ? Ut : qt, Y = A === "y" ? un : fn, R = A === "y" ? "height" : "width", F = u[A], W = F + $[q], X = F - $[Y], _e = O ? -ne[R] / 2 : 0, Te = E === Wr ? ee[R] : ne[R], Ae = E === Wr ? -ne[R] : -ee[R], Ye = t.elements.arrow, te = O && Ye ? Ro(Ye) : {
        width: 0,
        height: 0
      }, Oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vc(), Be = Oe[q], oe = Oe[Y], ve = bi(0, ee[R], te[R]), Se = I ? ee[R] / 2 - _e - ve - Be - re.mainAxis : Te - ve - Be - re.mainAxis, Ee = I ? -ee[R] / 2 + _e + ve + oe + re.mainAxis : Ae + ve + oe + re.mainAxis, Xe = t.elements.arrow && Ni(t.elements.arrow), ze = Xe ? A === "y" ? Xe.clientTop || 0 : Xe.clientLeft || 0 : 0, P = (U = me == null ? void 0 : me[A]) != null ? U : 0, de = F + Se - P - ze, Pe = F + Ee - P, fe = bi(O ? ha(W, de) : W, F, O ? yr(X, Pe) : X);
      u[A] = fe, we[A] = fe - F;
    }
    if (d) {
      var nt, ce = A === "x" ? Ut : qt, Fe = A === "x" ? un : fn, lt = u[B], rt = B === "y" ? "height" : "width", _t = lt + $[ce], rn = lt - $[Fe], xt = [Ut, qt].indexOf(D) !== -1, $t = (nt = me == null ? void 0 : me[B]) != null ? nt : 0, Gt = xt ? _t : lt - ee[rt] - ne[rt] - $t + re.altAxis, On = xt ? lt + ee[rt] + ne[rt] - $t - re.altAxis : rn, In = O && xt ? n0(Gt, lt, On) : bi(O ? Gt : _t, lt, O ? On : rn);
      u[B] = In, we[B] = In - lt;
    }
    t.modifiersData[i] = we;
  }
}
const N0 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: E0,
  requiresIfExists: ["offset"]
};
function L0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function R0(e) {
  return e === cn(e) || !tn(e) ? Io(e) : L0(e);
}
function x0(e) {
  var t = e.getBoundingClientRect(), n = Br(t.width) / e.offsetWidth || 1, i = Br(t.height) / e.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function I0(e, t, n) {
  n === void 0 && (n = !1);
  var i = tn(t), a = tn(t) && x0(t), o = ir(t), f = zr(e, a, n), d = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = {
    x: 0,
    y: 0
  };
  return (i || !i && !n) && ((An(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  jo(o)) && (d = R0(t)), tn(t) ? (m = zr(t, !0), m.x += t.clientLeft, m.y += t.clientTop) : o && (m.x = Yo(o))), {
    x: f.left + d.scrollLeft - m.x,
    y: f.top + d.scrollTop - m.y,
    width: f.width,
    height: f.height
  };
}
function Y0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    n.add(o.name);
    var f = [].concat(o.requires || [], o.requiresIfExists || []);
    f.forEach(function(d) {
      if (!n.has(d)) {
        var m = t.get(d);
        m && a(m);
      }
    }), i.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || a(o);
  }), i;
}
function j0(e) {
  var t = Y0(e);
  return Js.reduce(function(n, i) {
    return n.concat(t.filter(function(a) {
      return a.phase === i;
    }));
  }, []);
}
function F0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Zn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return [].concat(n).reduce(function(a, o) {
    return a.replace(/%s/, o);
  }, e);
}
var pr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', H0 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ju = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function V0(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), ju).filter(function(n, i, a) {
      return a.indexOf(n) === i;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Zn(pr, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Zn(pr, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Js.indexOf(t.phase) < 0 && console.error(Zn(pr, t.name, '"phase"', "either " + Js.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Zn(pr, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Zn(pr, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Zn(pr, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Zn(pr, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + ju.map(function(i) {
            return '"' + i + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(i) {
        e.find(function(a) {
          return a.name === i;
        }) == null && console.error(Zn(H0, String(t.name), i, i));
      });
    });
  });
}
function W0(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(i) {
    var a = t(i);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function B0(e) {
  var t = e.reduce(function(n, i) {
    var a = n[i.name];
    return n[i.name] = a ? Object.assign({}, a, i, {
      options: Object.assign({}, a.options, i.options),
      data: Object.assign({}, a.data, i.data)
    }) : i, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Fu = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", z0 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function U0(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, i = n === void 0 ? [] : n, a = t.defaultOptions, o = a === void 0 ? Hu : a;
  return function(d, m, y) {
    y === void 0 && (y = o);
    var w = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hu, o),
      modifiersData: {},
      elements: {
        reference: d,
        popper: m
      },
      attributes: {},
      styles: {}
    }, b = [], T = !1, O = {
      state: w,
      setOptions: function(D) {
        var E = typeof D == "function" ? D(w.options) : D;
        C(), w.options = Object.assign({}, o, w.options, E), w.scrollParents = {
          reference: wr(d) ? wi(d) : d.contextElement ? wi(d.contextElement) : [],
          popper: wi(m)
        };
        var I = j0(B0([].concat(i, w.options.modifiers)));
        if (w.orderedModifiers = I.filter(function(me) {
          return me.enabled;
        }), process.env.NODE_ENV !== "production") {
          var A = W0([].concat(I, w.options.modifiers), function(me) {
            var we = me.name;
            return we;
          });
          if (V0(A), _n(w.options.placement) === Na) {
            var B = w.orderedModifiers.find(function(me) {
              var we = me.name;
              return we === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var u = kn(m), ee = u.marginTop, ne = u.marginRight, ae = u.marginBottom, re = u.marginLeft;
          [ee, ne, ae, re].some(function(me) {
            return parseFloat(me);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return x(), O.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!T) {
          var D = w.elements, E = D.reference, I = D.popper;
          if (!Vu(E, I)) {
            process.env.NODE_ENV !== "production" && console.error(Fu);
            return;
          }
          w.rects = {
            reference: I0(E, Ni(I), w.options.strategy === "fixed"),
            popper: Ro(I)
          }, w.reset = !1, w.placement = w.options.placement, w.orderedModifiers.forEach(function(me) {
            return w.modifiersData[me.name] = Object.assign({}, me.data);
          });
          for (var A = 0, B = 0; B < w.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && (A += 1, A > 100)) {
              console.error(z0);
              break;
            }
            if (w.reset === !0) {
              w.reset = !1, B = -1;
              continue;
            }
            var u = w.orderedModifiers[B], ee = u.fn, ne = u.options, ae = ne === void 0 ? {} : ne, re = u.name;
            typeof ee == "function" && (w = ee({
              state: w,
              options: ae,
              name: re,
              instance: O
            }) || w);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: F0(function() {
        return new Promise(function($) {
          O.forceUpdate(), $(w);
        });
      }),
      destroy: function() {
        C(), T = !0;
      }
    };
    if (!Vu(d, m))
      return process.env.NODE_ENV !== "production" && console.error(Fu), O;
    O.setOptions(y).then(function($) {
      !T && y.onFirstUpdate && y.onFirstUpdate($);
    });
    function x() {
      w.orderedModifiers.forEach(function($) {
        var D = $.name, E = $.options, I = E === void 0 ? {} : E, A = $.effect;
        if (typeof A == "function") {
          var B = A({
            state: w,
            name: D,
            instance: O,
            options: I
          }), u = function() {
          };
          b.push(B || u);
        }
      });
    }
    function C() {
      b.forEach(function($) {
        return $();
      }), b = [];
    }
    return O;
  };
}
var q0 = [d0, P0, f0, Qw, M0, k0, N0, s0, D0], G0 = /* @__PURE__ */ U0({
  defaultModifiers: q0
});
const Jn = /* @__PURE__ */ new Map();
let Wu;
Sr || (bn(document, "mousedown", (e) => Wu = e), bn(document, "mouseup", (e) => {
  for (const t of Jn.values())
    for (const { documentHandler: n } of t)
      n(e, Wu);
}));
function Bu(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : t.arg instanceof HTMLElement && n.push(t.arg), function(i, a) {
    const o = t.instance.popperRef, f = i.target, d = a == null ? void 0 : a.target, m = !t || !t.instance, y = !f || !d, w = e.contains(f) || e.contains(d), b = e === f, T = n.length && n.some((x) => x == null ? void 0 : x.contains(f)) || n.length && n.includes(d), O = o && (o.contains(f) || o.contains(d));
    m || y || w || b || T || O || t.value(i, a);
  };
}
const K0 = {
  beforeMount(e, t) {
    Jn.has(e) || Jn.set(e, []), Jn.get(e).push({
      documentHandler: Bu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Jn.has(e) || Jn.set(e, []);
    const n = Jn.get(e), i = n.findIndex((o) => o.bindingFn === t.oldValue), a = {
      documentHandler: Bu(e, t),
      bindingFn: t.value
    };
    i >= 0 ? n.splice(i, 1, a) : n.push(a);
  },
  unmounted(e) {
    Jn.delete(e);
  }
}, Ra = K0, X0 = {
  beforeMount(e, t) {
    let n = null, i;
    const a = () => t.value && t.value(), o = () => {
      Date.now() - i < 100 && a(), clearInterval(n), n = null;
    };
    bn(e, "mousedown", (f) => {
      f.button === 0 && (i = Date.now(), Yw(document, "mouseup", o), clearInterval(n), n = setInterval(a, 100));
    });
  }
};
var Sc = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var i = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (i = o, !0) : !1;
    }), i;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var i = e(this.__entries__, n), a = this.__entries__[i];
        return a && a[1];
      }, t.prototype.set = function(n, i) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = i : this.__entries__.push([n, i]);
      }, t.prototype.delete = function(n) {
        var i = this.__entries__, a = e(i, n);
        ~a && i.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, i) {
        i === void 0 && (i = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var f = o[a];
          n.call(i, f[1], f[0]);
        }
      }, t;
    }()
  );
}(), to = typeof window < "u" && typeof document < "u" && window.document === document, pa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Z0 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(pa) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), J0 = 2;
function Q0(e, t) {
  var n = !1, i = !1, a = 0;
  function o() {
    n && (n = !1, e()), i && d();
  }
  function f() {
    Z0(o);
  }
  function d() {
    var m = Date.now();
    if (n) {
      if (m - a < J0)
        return;
      i = !0;
    } else
      n = !0, i = !1, setTimeout(f, t);
    a = m;
  }
  return d;
}
var e1 = 20, t1 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], n1 = typeof MutationObserver < "u", r1 = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Q0(this.refresh.bind(this), e1);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, i = n.indexOf(t);
      ~i && n.splice(i, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !to || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), n1 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !to || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, i = n === void 0 ? "" : n, a = t1.some(function(o) {
        return !!~i.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), _c = function(e, t) {
  for (var n = 0, i = Object.keys(t); n < i.length; n++) {
    var a = i[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, qr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || pa;
}, kc = xa(0, 0, 0, 0);
function ma(e) {
  return parseFloat(e) || 0;
}
function zu(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(i, a) {
    var o = e["border-" + a + "-width"];
    return i + ma(o);
  }, 0);
}
function i1(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, i = 0, a = t; i < a.length; i++) {
    var o = a[i], f = e["padding-" + o];
    n[o] = ma(f);
  }
  return n;
}
function a1(e) {
  var t = e.getBBox();
  return xa(0, 0, t.width, t.height);
}
function s1(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return kc;
  var i = qr(e).getComputedStyle(e), a = i1(i), o = a.left + a.right, f = a.top + a.bottom, d = ma(i.width), m = ma(i.height);
  if (i.boxSizing === "border-box" && (Math.round(d + o) !== t && (d -= zu(i, "left", "right") + o), Math.round(m + f) !== n && (m -= zu(i, "top", "bottom") + f)), !l1(e)) {
    var y = Math.round(d + o) - t, w = Math.round(m + f) - n;
    Math.abs(y) !== 1 && (d -= y), Math.abs(w) !== 1 && (m -= w);
  }
  return xa(a.left, a.top, d, m);
}
var o1 = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof qr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof qr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function l1(e) {
  return e === qr(e).document.documentElement;
}
function u1(e) {
  return to ? o1(e) ? a1(e) : s1(e) : kc;
}
function f1(e) {
  var t = e.x, n = e.y, i = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, f = Object.create(o.prototype);
  return _c(f, {
    x: t,
    y: n,
    width: i,
    height: a,
    top: n,
    right: t + i,
    bottom: a + n,
    left: t
  }), f;
}
function xa(e, t, n, i) {
  return { x: e, y: t, width: n, height: i };
}
var c1 = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xa(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = u1(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), d1 = (
  /** @class */
  function() {
    function e(t, n) {
      var i = f1(n);
      _c(this, { target: t, contentRect: i });
    }
    return e;
  }()
), h1 = (
  /** @class */
  function() {
    function e(t, n, i) {
      if (this.activeObservations_ = [], this.observations_ = new Sc(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = i;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof qr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new c1(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof qr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(i) {
          return new d1(i.target, i.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Tc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Sc(), Dc = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = r1.getInstance(), i = new h1(t, n, this);
      Tc.set(this, i);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Dc.prototype[e] = function() {
    var t;
    return (t = Tc.get(this))[e].apply(t, arguments);
  };
});
var p1 = function() {
  return typeof pa.ResizeObserver < "u" ? pa.ResizeObserver : Dc;
}();
const m1 = function(e) {
  for (const t of e) {
    const n = t.target.__resizeListeners__ || [];
    n.length && n.forEach((i) => {
      i();
    });
  }
}, v1 = function(e, t) {
  Sr || !e || (e.__resizeListeners__ || (e.__resizeListeners__ = [], e.__ro__ = new p1(m1), e.__ro__.observe(e)), e.__resizeListeners__.push(t));
}, g1 = function(e, t) {
  var n;
  !e || !e.__resizeListeners__ || (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), e.__resizeListeners__.length || (n = e.__ro__) === null || n === void 0 || n.disconnect());
}, y1 = "template";
var Uu;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Uu || (Uu = {}));
const b1 = (e) => qh(e) && e.type === gt, w1 = (e) => e.type === Yf, S1 = (e) => e.type === y1;
function qu(e, t) {
  if (!w1(e))
    return b1(e) || S1(e) ? t > 0 ? Cc(e.children, t - 1) : void 0 : e;
}
const Cc = (e, t = 3) => Array.isArray(e) ? qu(e[0], t) : qu(e, t), _1 = (e) => {
  e.preventDefault(), e.stopPropagation();
}, k1 = () => {
  Et == null || Et.doOnModalClick();
};
let no = !1, vi;
const Gu = function() {
  if (Sr)
    return;
  let e = Et.modalDom;
  return e ? no = !0 : (no = !1, e = document.createElement("div"), Et.modalDom = e, bn(e, "touchmove", _1), bn(e, "click", k1)), e;
}, ea = {}, Et = {
  modalFade: !0,
  modalDom: void 0,
  zIndex: vi,
  getInstance(e) {
    return ea[e];
  },
  register(e, t) {
    e && t && (ea[e] = t);
  },
  deregister(e) {
    e && (ea[e] = null, delete ea[e]);
  },
  nextZIndex() {
    return ++Et.zIndex;
  },
  modalStack: [],
  doOnModalClick() {
    const e = Et.modalStack[Et.modalStack.length - 1];
    if (!e)
      return;
    const t = Et.getInstance(e.id);
    t && t.closeOnClickModal.value && t.close();
  },
  openModal(e, t, n, i, a) {
    if (Sr || !e || t === void 0)
      return;
    this.modalFade = a;
    const o = this.modalStack;
    for (let d = 0, m = o.length; d < m; d++)
      if (o[d].id === e)
        return;
    const f = Gu();
    Ji(f, "v-modal"), this.modalFade && !no && Ji(f, "v-modal-enter"), i && i.trim().split(/\s+/).forEach((m) => Ji(f, m)), setTimeout(() => {
      Os(f, "v-modal-enter");
    }, 200), n && n.parentNode && n.parentNode.nodeType !== 11 ? n.parentNode.appendChild(f) : document.body.appendChild(f), t && (f.style.zIndex = String(t)), f.tabIndex = 0, f.style.display = "", this.modalStack.push({ id: e, zIndex: t, modalClass: i });
  },
  closeModal(e) {
    const t = this.modalStack, n = Gu();
    if (t.length > 0) {
      const i = t[t.length - 1];
      if (i.id === e)
        i.modalClass && i.modalClass.trim().split(/\s+/).forEach((o) => Os(n, o)), t.pop(), t.length > 0 && (n.style.zIndex = t[t.length - 1].zIndex);
      else
        for (let a = t.length - 1; a >= 0; a--)
          if (t[a].id === e) {
            t.splice(a, 1);
            break;
          }
    }
    t.length === 0 && (this.modalFade && Ji(n, "v-modal-leave"), setTimeout(() => {
      t.length === 0 && (n.parentNode && n.parentNode.removeChild(n), n.style.display = "none", Et.modalDom = void 0), Os(n, "v-modal-leave");
    }, 200));
  }
};
Object.defineProperty(Et, "zIndex", {
  configurable: !0,
  get() {
    return vi === void 0 && (vi = ip("zIndex") || 2e3), vi;
  },
  set(e) {
    vi = e;
  }
});
const T1 = function() {
  if (!Sr && Et.modalStack.length > 0) {
    const e = Et.modalStack[Et.modalStack.length - 1];
    return e ? Et.getInstance(e.id) : void 0;
  }
};
Sr || bn(window, "keydown", function(e) {
  if (e.code === wt.esc) {
    const t = T1();
    t && t.closeOnPressEscape.value && (t.handleClose ? t.handleClose() : t.handleAction ? t.handleAction("cancel") : t.close());
  }
});
const Ku = Et, Ms = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
}, D1 = "ElLocaleInjection";
function C1(e, t, n) {
  const i = e.split(".");
  let a;
  for (let o = 0, f = i.length; o < f; o++) {
    const d = i[o];
    if (a = n[d], o === f - 1)
      return O1(a, t);
    if (!a)
      return "";
    n = a;
  }
}
function O1(e, t) {
  return !e || !t ? e : e.replace(/\{(\w+)\}/g, (n, i) => t[i]);
}
const Un = () => Pt(D1, {
  lang: le(Ms.name),
  locale: le(Ms),
  t: (...e) => {
    const [t, n] = e;
    return C1(t, n, Ms);
  }
}), Ia = Symbol("elForm"), Fo = Symbol("elFormItem"), Oc = Symbol(), ro = Symbol(), Xu = Symbol();
function M1(e, t) {
  if (!fa(e) || e[Xu])
    return e;
  const { values: n, required: i, default: a, type: o, validator: f } = e, d = n || f ? (m) => {
    let y = !1, w = [];
    if (n && (w = [...n, a], y || (y = w.includes(m))), f && (y || (y = f(m))), !y && w.length > 0) {
      const b = [...new Set(w)].map((T) => JSON.stringify(T)).join(", ");
      Gh(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${b}], got value ${JSON.stringify(m)}.`);
    }
    return y;
  } : void 0;
  return {
    type: typeof o == "object" && Object.getOwnPropertySymbols(o).includes(ro) ? o[ro] : o,
    required: !!i,
    default: a,
    validator: d,
    [Xu]: !0
  };
}
const Ho = (e) => Hf(Object.entries(e).map(([t, n]) => [
  t,
  M1(n, t)
])), $s = (e) => ({ [ro]: e }), $1 = (e) => e, P1 = ["", "large", "medium", "small", "mini"], Mc = Ho({
  size: {
    type: String,
    values: P1,
    default: ""
  },
  disabled: Boolean
}), $c = ({ size: e, disabled: t }) => {
  const n = Ta(), i = uc(), a = n.proxy.$props, o = Pt(Ia, void 0), f = Pt(Fo, void 0);
  return {
    size: Z(() => a.size || nu(e) || (f == null ? void 0 : f.size) || (o == null ? void 0 : o.size) || i.size || ""),
    disabled: Z(() => a.disabled === !0 || nu(t) || (o == null ? void 0 : o.disabled) || !1)
  };
}, Pc = (e, t) => {
  if (e.install = (n) => {
    for (const i of [e, ...Object.values(t ?? {})])
      n.component(i.name, i);
  }, t)
    for (const [n, i] of Object.entries(t))
      e[n] = i;
  return e;
}, A1 = (e) => (e.install = Bf, e);
var E1 = Ln, N1 = function() {
  return E1.Date.now();
}, L1 = N1, R1 = /\s/;
function x1(e) {
  for (var t = e.length; t-- && R1.test(e.charAt(t)); )
    ;
  return t;
}
var I1 = x1, Y1 = I1, j1 = /^\s+/;
function F1(e) {
  return e && e.slice(0, Y1(e) + 1).replace(j1, "");
}
var H1 = F1, V1 = Ai, W1 = Qr, B1 = "[object Symbol]";
function z1(e) {
  return typeof e == "symbol" || W1(e) && V1(e) == B1;
}
var U1 = z1, q1 = H1, Zu = $a, G1 = U1, Ju = 0 / 0, K1 = /^[-+]0x[0-9a-f]+$/i, X1 = /^0b[01]+$/i, Z1 = /^0o[0-7]+$/i, J1 = parseInt;
function Q1(e) {
  if (typeof e == "number")
    return e;
  if (G1(e))
    return Ju;
  if (Zu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Zu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = q1(e);
  var n = X1.test(e);
  return n || Z1.test(e) ? J1(e.slice(2), n ? 2 : 8) : K1.test(e) ? Ju : +e;
}
var eS = Q1, tS = $a, Ps = L1, Qu = eS, nS = "Expected a function", rS = Math.max, iS = Math.min;
function aS(e, t, n) {
  var i, a, o, f, d, m, y = 0, w = !1, b = !1, T = !0;
  if (typeof e != "function")
    throw new TypeError(nS);
  t = Qu(t) || 0, tS(n) && (w = !!n.leading, b = "maxWait" in n, o = b ? rS(Qu(n.maxWait) || 0, t) : o, T = "trailing" in n ? !!n.trailing : T);
  function O(u) {
    var ee = i, ne = a;
    return i = a = void 0, y = u, f = e.apply(ne, ee), f;
  }
  function x(u) {
    return y = u, d = setTimeout(D, t), w ? O(u) : f;
  }
  function C(u) {
    var ee = u - m, ne = u - y, ae = t - ee;
    return b ? iS(ae, o - ne) : ae;
  }
  function $(u) {
    var ee = u - m, ne = u - y;
    return m === void 0 || ee >= t || ee < 0 || b && ne >= o;
  }
  function D() {
    var u = Ps();
    if ($(u))
      return E(u);
    d = setTimeout(D, C(u));
  }
  function E(u) {
    return d = void 0, T && i ? O(u) : (i = a = void 0, f);
  }
  function I() {
    d !== void 0 && clearTimeout(d), y = 0, i = m = a = d = void 0;
  }
  function A() {
    return d === void 0 ? f : E(Ps());
  }
  function B() {
    var u = Ps(), ee = $(u);
    if (i = arguments, a = this, m = u, ee) {
      if (d === void 0)
        return x(m);
      if (b)
        return clearTimeout(d), d = setTimeout(D, t), O(m);
    }
    return d === void 0 && (d = setTimeout(D, t)), f;
  }
  return B.cancel = I, B.flush = A, B;
}
var sS = aS;
function oS(e) {
  return /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);
}
let gn;
const lS = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, uS = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function fS(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), i = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")), a = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: uS.map((f) => `${f}:${t.getPropertyValue(f)}`).join(";"), paddingSize: i, borderSize: a, boxSizing: n };
}
function ef(e, t = 1, n) {
  var i;
  gn || (gn = document.createElement("textarea"), document.body.appendChild(gn));
  const { paddingSize: a, borderSize: o, boxSizing: f, contextStyle: d } = fS(e);
  gn.setAttribute("style", `${d};${lS}`), gn.value = e.value || e.placeholder || "";
  let m = gn.scrollHeight;
  const y = {};
  f === "border-box" ? m = m + o : f === "content-box" && (m = m - a), gn.value = "";
  const w = gn.scrollHeight - a;
  if (Di(t)) {
    let b = w * t;
    f === "border-box" && (b = b + a + o), m = Math.max(b, m), y.minHeight = `${b}px`;
  }
  if (Di(n)) {
    let b = w * n;
    f === "border-box" && (b = b + a + o), m = Math.min(b, m);
  }
  return y.height = `${m}px`, (i = gn.parentNode) == null || i.removeChild(gn), gn = void 0, y;
}
var cS = Object.defineProperty, dS = Object.defineProperties, hS = Object.getOwnPropertyDescriptors, tf = Object.getOwnPropertySymbols, pS = Object.prototype.hasOwnProperty, mS = Object.prototype.propertyIsEnumerable, nf = (e, t, n) => t in e ? cS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vS = (e, t) => {
  for (var n in t || (t = {}))
    pS.call(t, n) && nf(e, n, t[n]);
  if (tf)
    for (var n of tf(t))
      mS.call(t, n) && nf(e, n, t[n]);
  return e;
}, gS = (e, t) => dS(e, hS(t));
const yS = Ho(gS(vS({}, Mc), {
  modelValue: {
    type: $s(void 0),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: $s([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: String,
    default: ""
  },
  prefixIcon: {
    type: String,
    default: ""
  },
  label: {
    type: String
  },
  tabindex: {
    type: [Number, String]
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: $s([Object, Array, String]),
    default: () => $1({})
  },
  maxlength: {
    type: [Number, String]
  }
})), bS = {
  [Zs]: (e) => xr(e),
  input: (e) => xr(e),
  change: (e) => xr(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof KeyboardEvent,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
};
var wS = Object.defineProperty, rf = Object.getOwnPropertySymbols, SS = Object.prototype.hasOwnProperty, _S = Object.prototype.propertyIsEnumerable, af = (e, t, n) => t in e ? wS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kS = (e, t) => {
  for (var n in t || (t = {}))
    SS.call(t, n) && af(e, n, t[n]);
  if (rf)
    for (var n of rf(t))
      _S.call(t, n) && af(e, n, t[n]);
  return e;
};
const TS = {
  suffix: "append",
  prefix: "prepend"
};
var Vo = Mt({
  name: "ElInput",
  inheritAttrs: !1,
  props: yS,
  emits: bS,
  setup(e, { slots: t, emit: n, attrs: i }) {
    const a = Ta(), o = up(), f = Pt(Ia, void 0), d = Pt(Fo, void 0), { size: m, disabled: y } = $c({}), w = le(), b = le(), T = le(!1), O = le(!1), x = le(!1), C = le(!1), $ = Kh(e.inputStyle), D = Z(() => w.value || b.value), E = Z(() => {
      var P;
      return (P = f == null ? void 0 : f.statusIcon) != null ? P : !1;
    }), I = Z(() => (d == null ? void 0 : d.validateState) || ""), A = Z(() => jw[I.value]), B = Z(() => i.style), u = Z(() => [
      e.inputStyle,
      $.value,
      { resize: e.resize }
    ]), ee = Z(() => e.modelValue === null || e.modelValue === void 0 ? "" : String(e.modelValue)), ne = Z(() => e.clearable && !y.value && !e.readonly && !!ee.value && (T.value || O.value)), ae = Z(() => e.showPassword && !y.value && !e.readonly && (!!ee.value || T.value)), re = Z(() => e.showWordLimit && !!e.maxlength && (e.type === "text" || e.type === "textarea") && !y.value && !e.readonly && !e.showPassword), me = Z(() => Array.from(ee.value).length), we = Z(() => !!re.value && me.value > Number(e.maxlength)), U = () => {
      const { type: P, autosize: de } = e;
      if (!(Sr || P !== "textarea"))
        if (de) {
          const Pe = fa(de) ? de.minRows : void 0, fe = fa(de) ? de.maxRows : void 0;
          $.value = kS({}, ef(b.value, Pe, fe));
        } else
          $.value = {
            minHeight: ef(b.value).minHeight
          };
    }, q = () => {
      const P = D.value;
      !P || P.value === ee.value || (P.value = ee.value);
    }, Y = (P) => {
      const { el: de } = a.vnode;
      if (!de)
        return;
      const fe = Array.from(de.querySelectorAll(`.el-input__${P}`)).find((ce) => ce.parentNode === de);
      if (!fe)
        return;
      const nt = TS[P];
      t[nt] ? fe.style.transform = `translateX(${P === "suffix" ? "-" : ""}${de.querySelector(`.el-input-group__${nt}`).offsetWidth}px)` : fe.removeAttribute("style");
    }, R = () => {
      Y("prefix"), Y("suffix");
    }, F = (P) => {
      let { value: de } = P.target;
      if (!x.value && de !== ee.value) {
        if (e.maxlength) {
          const Pe = we.value ? me.value : e.maxlength;
          de = Array.from(de).slice(0, Number(Pe)).join("");
        }
        n(Zs, de), n("input", de), yn(q);
      }
    }, W = (P) => {
      n("change", P.target.value);
    }, X = () => {
      yn(() => {
        var P;
        (P = D.value) == null || P.focus();
      });
    }, _e = () => {
      var P;
      (P = D.value) == null || P.blur();
    }, Te = (P) => {
      T.value = !0, n("focus", P);
    }, Ae = (P) => {
      var de;
      T.value = !1, n("blur", P), e.validateEvent && ((de = d == null ? void 0 : d.validate) == null || de.call(d, "blur"));
    }, Ye = () => {
      var P;
      (P = D.value) == null || P.select();
    }, te = (P) => {
      n("compositionstart", P), x.value = !0;
    }, Oe = (P) => {
      var de;
      n("compositionupdate", P);
      const Pe = (de = P.target) == null ? void 0 : de.value, fe = Pe[Pe.length - 1] || "";
      x.value = !oS(fe);
    }, Be = (P) => {
      n("compositionend", P), x.value && (x.value = !1, F(P));
    }, oe = () => {
      n(Zs, ""), n("change", ""), n("clear"), n("input", "");
    }, ve = () => {
      C.value = !C.value, X();
    }, Se = Z(() => !!t.suffix || !!e.suffixIcon || ne.value || e.showPassword || re.value || !!I.value && E.value);
    return Ct(() => e.modelValue, () => {
      var P;
      yn(U), e.validateEvent && ((P = d == null ? void 0 : d.validate) == null || P.call(d, "change"));
    }), Ct(ee, () => q()), Ct(() => e.type, () => {
      yn(() => {
        q(), U(), R();
      });
    }), Nn(() => {
      q(), R(), yn(U);
    }), Xh(() => {
      yn(R);
    }), {
      input: w,
      textarea: b,
      attrs: o,
      inputSize: m,
      validateState: I,
      validateIcon: A,
      containerStyle: B,
      computedTextareaStyle: u,
      inputDisabled: y,
      showClear: ne,
      showPwdVisible: ae,
      isWordLimitVisible: re,
      textLength: me,
      hovering: O,
      inputExceed: we,
      passwordVisible: C,
      inputOrTextarea: D,
      suffixVisible: Se,
      resizeTextarea: U,
      handleInput: F,
      handleChange: W,
      handleFocus: Te,
      handleBlur: Ae,
      handleCompositionStart: te,
      handleCompositionUpdate: Oe,
      handleCompositionEnd: Be,
      handlePasswordVisible: ve,
      clear: oe,
      select: Ye,
      focus: X,
      blur: _e,
      onMouseLeave: (P) => {
        O.value = !1, n("mouseleave", P);
      },
      onMouseEnter: (P) => {
        O.value = !0, n("mouseenter", P);
      },
      handleKeydown: (P) => {
        n("keydown", P);
      }
    };
  }
});
const DS = {
  key: 0,
  class: "el-input-group__prepend"
}, CS = ["type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], OS = {
  key: 1,
  class: "el-input__prefix"
}, MS = {
  key: 2,
  class: "el-input__suffix"
}, $S = { class: "el-input__suffix-inner" }, PS = {
  key: 3,
  class: "el-input__count"
}, AS = { class: "el-input__count-inner" }, ES = {
  key: 3,
  class: "el-input-group__append"
}, NS = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], LS = {
  key: 0,
  class: "el-input__count"
};
function RS(e, t, n, i, a, o) {
  return ie(), ue("div", {
    class: xe([
      e.type === "textarea" ? "el-textarea" : "el-input",
      e.inputSize ? "el-input--" + e.inputSize : "",
      {
        "is-disabled": e.inputDisabled,
        "is-exceed": e.inputExceed,
        "el-input-group": e.$slots.prepend || e.$slots.append,
        "el-input-group--append": e.$slots.append,
        "el-input-group--prepend": e.$slots.prepend,
        "el-input--prefix": e.$slots.prefix || e.prefixIcon,
        "el-input--suffix": e.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword,
        "el-input--suffix--password-clear": e.clearable && e.showPassword
      },
      e.$attrs.class
    ]),
    style: en(e.containerStyle),
    onMouseenter: t[19] || (t[19] = (...f) => e.onMouseEnter && e.onMouseEnter(...f)),
    onMouseleave: t[20] || (t[20] = (...f) => e.onMouseLeave && e.onMouseLeave(...f))
  }, [
    je(" input "),
    e.type !== "textarea" ? (ie(), ue(gt, { key: 0 }, [
      je(" prepend slot "),
      e.$slots.prepend ? (ie(), ue("div", DS, [
        Wt(e.$slots, "prepend")
      ])) : je("v-if", !0),
      V("input", Bs({
        ref: "input",
        class: "el-input__inner"
      }, e.attrs, {
        type: e.showPassword ? e.passwordVisible ? "text" : "password" : e.type,
        disabled: e.inputDisabled,
        readonly: e.readonly,
        autocomplete: e.autocomplete,
        tabindex: e.tabindex,
        "aria-label": e.label,
        placeholder: e.placeholder,
        style: e.inputStyle,
        onCompositionstart: t[0] || (t[0] = (...f) => e.handleCompositionStart && e.handleCompositionStart(...f)),
        onCompositionupdate: t[1] || (t[1] = (...f) => e.handleCompositionUpdate && e.handleCompositionUpdate(...f)),
        onCompositionend: t[2] || (t[2] = (...f) => e.handleCompositionEnd && e.handleCompositionEnd(...f)),
        onInput: t[3] || (t[3] = (...f) => e.handleInput && e.handleInput(...f)),
        onFocus: t[4] || (t[4] = (...f) => e.handleFocus && e.handleFocus(...f)),
        onBlur: t[5] || (t[5] = (...f) => e.handleBlur && e.handleBlur(...f)),
        onChange: t[6] || (t[6] = (...f) => e.handleChange && e.handleChange(...f)),
        onKeydown: t[7] || (t[7] = (...f) => e.handleKeydown && e.handleKeydown(...f))
      }), null, 16, CS),
      je(" prefix slot "),
      e.$slots.prefix || e.prefixIcon ? (ie(), ue("span", OS, [
        Wt(e.$slots, "prefix"),
        e.prefixIcon ? (ie(), ue("i", {
          key: 0,
          class: xe(["el-input__icon", e.prefixIcon])
        }, null, 2)) : je("v-if", !0)
      ])) : je("v-if", !0),
      je(" suffix slot "),
      e.suffixVisible ? (ie(), ue("span", MS, [
        V("span", $S, [
          !e.showClear || !e.showPwdVisible || !e.isWordLimitVisible ? (ie(), ue(gt, { key: 0 }, [
            Wt(e.$slots, "suffix"),
            e.suffixIcon ? (ie(), ue("i", {
              key: 0,
              class: xe(["el-input__icon", e.suffixIcon])
            }, null, 2)) : je("v-if", !0)
          ], 64)) : je("v-if", !0),
          e.showClear ? (ie(), ue("i", {
            key: 1,
            class: "el-input__icon el-icon-circle-close el-input__clear",
            onMousedown: t[8] || (t[8] = jf(() => {
            }, ["prevent"])),
            onClick: t[9] || (t[9] = (...f) => e.clear && e.clear(...f))
          }, null, 32)) : je("v-if", !0),
          e.showPwdVisible ? (ie(), ue("i", {
            key: 2,
            class: "el-input__icon el-icon-view el-input__clear",
            onClick: t[10] || (t[10] = (...f) => e.handlePasswordVisible && e.handlePasswordVisible(...f))
          })) : je("v-if", !0),
          e.isWordLimitVisible ? (ie(), ue("span", PS, [
            V("span", AS, Ie(e.textLength) + " / " + Ie(e.maxlength), 1)
          ])) : je("v-if", !0)
        ]),
        e.validateState ? (ie(), ue("i", {
          key: 0,
          class: xe(["el-input__icon", "el-input__validateIcon", e.validateIcon])
        }, null, 2)) : je("v-if", !0)
      ])) : je("v-if", !0),
      je(" append slot "),
      e.$slots.append ? (ie(), ue("div", ES, [
        Wt(e.$slots, "append")
      ])) : je("v-if", !0)
    ], 64)) : (ie(), ue(gt, { key: 1 }, [
      je(" textarea "),
      V("textarea", Bs({
        ref: "textarea",
        class: "el-textarea__inner"
      }, e.attrs, {
        tabindex: e.tabindex,
        disabled: e.inputDisabled,
        readonly: e.readonly,
        autocomplete: e.autocomplete,
        style: e.computedTextareaStyle,
        "aria-label": e.label,
        placeholder: e.placeholder,
        onCompositionstart: t[11] || (t[11] = (...f) => e.handleCompositionStart && e.handleCompositionStart(...f)),
        onCompositionupdate: t[12] || (t[12] = (...f) => e.handleCompositionUpdate && e.handleCompositionUpdate(...f)),
        onCompositionend: t[13] || (t[13] = (...f) => e.handleCompositionEnd && e.handleCompositionEnd(...f)),
        onInput: t[14] || (t[14] = (...f) => e.handleInput && e.handleInput(...f)),
        onFocus: t[15] || (t[15] = (...f) => e.handleFocus && e.handleFocus(...f)),
        onBlur: t[16] || (t[16] = (...f) => e.handleBlur && e.handleBlur(...f)),
        onChange: t[17] || (t[17] = (...f) => e.handleChange && e.handleChange(...f)),
        onKeydown: t[18] || (t[18] = (...f) => e.handleKeydown && e.handleKeydown(...f))
      }), null, 16, NS),
      e.isWordLimitVisible ? (ie(), ue("span", LS, Ie(e.textLength) + " / " + Ie(e.maxlength), 1)) : je("v-if", !0)
    ], 64))
  ], 38);
}
Vo.render = RS;
Vo.__file = "packages/components/input/src/input.vue";
const Wo = Pc(Vo), xS = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
function IS({ move: e, size: t, bar: n }) {
  const i = {}, a = `translate${n.axis}(${e}%)`;
  return i[n.size] = t, i.transform = a, i.msTransform = a, i.webkitTransform = a, i;
}
var YS = Math.pow, Bo = Mt({
  name: "Bar",
  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: Number,
    always: Boolean
  },
  setup(e) {
    const t = le(null), n = le(null), i = Pt("scrollbar", {}), a = Pt("scrollbar-wrap", {}), o = Z(() => xS[e.vertical ? "vertical" : "horizontal"]), f = le({}), d = le(null), m = le(null), y = le(!1);
    let w = null;
    const b = Z(() => YS(t.value[o.value.offset], 2) / a.value[o.value.scrollSize] / e.ratio / n.value[o.value.offset]), T = (A) => {
      A.stopPropagation(), !(A.ctrlKey || [1, 2].includes(A.button)) && (window.getSelection().removeAllRanges(), x(A), f.value[o.value.axis] = A.currentTarget[o.value.offset] - (A[o.value.client] - A.currentTarget.getBoundingClientRect()[o.value.direction]));
    }, O = (A) => {
      const B = Math.abs(A.target.getBoundingClientRect()[o.value.direction] - A[o.value.client]), u = n.value[o.value.offset] / 2, ee = (B - u) * 100 * b.value / t.value[o.value.offset];
      a.value[o.value.scroll] = ee * a.value[o.value.scrollSize] / 100;
    }, x = (A) => {
      A.stopImmediatePropagation(), d.value = !0, bn(document, "mousemove", C), bn(document, "mouseup", $), w = document.onselectstart, document.onselectstart = () => !1;
    }, C = (A) => {
      if (d.value === !1)
        return;
      const B = f.value[o.value.axis];
      if (!B)
        return;
      const u = (t.value.getBoundingClientRect()[o.value.direction] - A[o.value.client]) * -1, ee = n.value[o.value.offset] - B, ne = (u - ee) * 100 * b.value / t.value[o.value.offset];
      a.value[o.value.scroll] = ne * a.value[o.value.scrollSize] / 100;
    }, $ = () => {
      d.value = !1, f.value[o.value.axis] = 0, Er(document, "mousemove", C), Er(document, "mouseup", $), document.onselectstart = w, m.value && (y.value = !1);
    }, D = Z(() => IS({
      size: e.size,
      move: e.move,
      bar: o.value
    })), E = () => {
      m.value = !1, y.value = !!e.size;
    }, I = () => {
      m.value = !0, y.value = d.value;
    };
    return Nn(() => {
      bn(i.value, "mousemove", E), bn(i.value, "mouseleave", I);
    }), Do(() => {
      Er(document, "mouseup", $), Er(i.value, "mousemove", E), Er(i.value, "mouseleave", I);
    }), {
      instance: t,
      thumb: n,
      bar: o,
      clickTrackHandler: O,
      clickThumbHandler: T,
      thumbStyle: D,
      visible: y
    };
  }
});
function jS(e, t, n, i, a, o) {
  return ie(), Sn(Co, { name: "el-scrollbar-fade" }, {
    default: Bt(() => [
      Ot(V("div", {
        ref: "instance",
        class: xe(["el-scrollbar__bar", "is-" + e.bar.key]),
        onMousedown: t[1] || (t[1] = (...f) => e.clickTrackHandler && e.clickTrackHandler(...f))
      }, [
        V("div", {
          ref: "thumb",
          class: "el-scrollbar__thumb",
          style: en(e.thumbStyle),
          onMousedown: t[0] || (t[0] = (...f) => e.clickThumbHandler && e.clickThumbHandler(...f))
        }, null, 36)
      ], 34), [
        [Mn, e.always || e.visible]
      ])
    ]),
    _: 1
  });
}
Bo.render = jS;
Bo.__file = "packages/components/scrollbar/src/bar.vue";
var sf = Math.pow, Ir = Mt({
  name: "ElScrollbar",
  components: { Bar: Bo },
  props: {
    height: {
      type: [String, Number],
      default: ""
    },
    maxHeight: {
      type: [String, Number],
      default: ""
    },
    native: {
      type: Boolean,
      default: !1
    },
    wrapStyle: {
      type: [String, Array],
      default: ""
    },
    wrapClass: {
      type: [String, Array],
      default: ""
    },
    viewClass: {
      type: [String, Array],
      default: ""
    },
    viewStyle: {
      type: [String, Array],
      default: ""
    },
    noresize: Boolean,
    tag: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: !1
    },
    minSize: {
      type: Number,
      default: 20
    }
  },
  emits: ["scroll"],
  setup(e, { emit: t }) {
    const n = le("0"), i = le("0"), a = le(0), o = le(0), f = le(null), d = le(null), m = le(null), y = le(1), w = le(1), b = "ElScrollbar", T = 4;
    Vr("scrollbar", f), Vr("scrollbar-wrap", d);
    const O = () => {
      if (d.value) {
        const E = d.value.offsetHeight - T, I = d.value.offsetWidth - T;
        o.value = d.value.scrollTop * 100 / E * y.value, a.value = d.value.scrollLeft * 100 / I * w.value, t("scroll", {
          scrollTop: d.value.scrollTop,
          scrollLeft: d.value.scrollLeft
        });
      }
    }, x = (E) => {
      if (!Di(E)) {
        ua(b, "value must be a number");
        return;
      }
      d.value.scrollTop = E;
    }, C = (E) => {
      if (!Di(E)) {
        ua(b, "value must be a number");
        return;
      }
      d.value.scrollLeft = E;
    }, $ = () => {
      if (!d.value)
        return;
      const E = d.value.offsetHeight - T, I = d.value.offsetWidth - T, A = sf(E, 2) / d.value.scrollHeight, B = sf(I, 2) / d.value.scrollWidth, u = Math.max(A, e.minSize), ee = Math.max(B, e.minSize);
      y.value = A / (E - A) / (u / (E - u)), w.value = B / (I - B) / (ee / (I - ee)), i.value = u + T < E ? `${u}px` : "", n.value = ee + T < I ? `${ee}px` : "";
    }, D = Z(() => {
      let E = e.wrapStyle;
      return Ao(E) ? (E = Rw(E), E.height = $r(e.height), E.maxHeight = $r(e.maxHeight)) : xr(E) && (E += $r(e.height) ? `height: ${$r(e.height)};` : "", E += $r(e.maxHeight) ? `max-height: ${$r(e.maxHeight)};` : ""), E;
    });
    return Nn(() => {
      e.native || yn($), e.noresize || (v1(m.value, $), addEventListener("resize", $));
    }), Do(() => {
      e.noresize || (g1(m.value, $), removeEventListener("resize", $));
    }), {
      moveX: a,
      moveY: o,
      ratioX: w,
      ratioY: y,
      sizeWidth: n,
      sizeHeight: i,
      style: D,
      scrollbar: f,
      wrap: d,
      resize: m,
      update: $,
      handleScroll: O,
      setScrollTop: x,
      setScrollLeft: C
    };
  }
});
const FS = {
  ref: "scrollbar",
  class: "el-scrollbar"
};
function HS(e, t, n, i, a, o) {
  const f = yt("bar");
  return ie(), ue("div", FS, [
    V("div", {
      ref: "wrap",
      class: xe([
        e.wrapClass,
        "el-scrollbar__wrap",
        e.native ? "" : "el-scrollbar__wrap--hidden-default"
      ]),
      style: en(e.style),
      onScroll: t[0] || (t[0] = (...d) => e.handleScroll && e.handleScroll(...d))
    }, [
      (ie(), Sn(Zh(e.tag), {
        ref: "resize",
        class: xe(["el-scrollbar__view", e.viewClass]),
        style: en(e.viewStyle)
      }, {
        default: Bt(() => [
          Wt(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    e.native ? je("v-if", !0) : (ie(), ue(gt, { key: 0 }, [
      at(f, {
        move: e.moveX,
        ratio: e.ratioX,
        size: e.sizeWidth,
        always: e.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      at(f, {
        move: e.moveY,
        ratio: e.ratioY,
        size: e.sizeHeight,
        vertical: "",
        always: e.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64))
  ], 512);
}
Ir.render = HS;
Ir.__file = "packages/components/scrollbar/src/index.vue";
Ir.install = (e) => {
  e.component(Ir.name, Ir);
};
const VS = Ir;
function WS(e, t = []) {
  const { arrow: n, arrowOffset: i, offset: a, gpuAcceleration: o, fallbackPlacements: f } = e, d = [
    {
      name: "offset",
      options: {
        offset: [0, a ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: f ?? []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: o,
        adaptive: o
      }
    }
  ];
  return n && d.push({
    name: "arrow",
    options: {
      element: n,
      padding: i ?? 5
    }
  }), d.push(...t), d;
}
var BS = Object.defineProperty, zS = Object.defineProperties, US = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, qS = Object.prototype.hasOwnProperty, GS = Object.prototype.propertyIsEnumerable, lf = (e, t, n) => t in e ? BS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, KS = (e, t) => {
  for (var n in t || (t = {}))
    qS.call(t, n) && lf(e, n, t[n]);
  if (of)
    for (var n of of(t))
      GS.call(t, n) && lf(e, n, t[n]);
  return e;
}, XS = (e, t) => zS(e, US(t));
function ZS(e, t) {
  return Z(() => {
    var n;
    return XS(KS({
      placement: e.placement
    }, e.popperOptions), {
      modifiers: WS({
        arrow: t.arrow.value,
        arrowOffset: e.arrowOffset,
        offset: e.offset,
        gpuAcceleration: e.gpuAcceleration,
        fallbackPlacements: e.fallbackPlacements
      }, (n = e.popperOptions) == null ? void 0 : n.modifiers)
    });
  });
}
var va;
(function(e) {
  e.DARK = "dark", e.LIGHT = "light";
})(va || (va = {}));
const JS = [];
var QS = {
  arrowOffset: {
    type: Number,
    default: 5
  },
  appendToBody: {
    type: Boolean,
    default: !0
  },
  autoClose: {
    type: Number,
    default: 0
  },
  boundariesPadding: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  },
  style: Object,
  hideAfter: {
    type: Number,
    default: 200
  },
  cutoff: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  effect: {
    type: String,
    default: va.DARK
  },
  enterable: {
    type: Boolean,
    default: !0
  },
  manualMode: {
    type: Boolean,
    default: !1
  },
  showAfter: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    default: "bottom"
  },
  popperClass: {
    type: String,
    default: ""
  },
  pure: {
    type: Boolean,
    default: !1
  },
  popperOptions: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  strategy: {
    type: String,
    default: "fixed"
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  trigger: {
    type: [String, Array],
    default: "hover"
  },
  visible: {
    type: Boolean,
    default: void 0
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  fallbackPlacements: {
    type: Array,
    default: JS
  }
};
const e_ = "update:visible";
function t_(e, { emit: t }) {
  const n = le(null), i = le(null), a = le(null), o = `el-popper-${xw()}`;
  let f = null, d = null, m = null, y = !1;
  const w = () => e.manualMode || e.trigger === "manual", b = le({ zIndex: Ku.nextZIndex() }), T = ZS(e, {
    arrow: n
  }), O = rr({
    visible: !!e.visible
  }), x = Z({
    get() {
      return e.disabled ? !1 : Pu(e.visible) ? e.visible : O.visible;
    },
    set(U) {
      w() || (Pu(e.visible) ? t(e_, U) : O.visible = U);
    }
  });
  function C() {
    e.autoClose > 0 && (m = window.setTimeout(() => {
      $();
    }, e.autoClose)), x.value = !0;
  }
  function $() {
    x.value = !1;
  }
  function D() {
    clearTimeout(d), clearTimeout(m);
  }
  const E = () => {
    w() || e.disabled || (D(), e.showAfter === 0 ? C() : d = window.setTimeout(() => {
      C();
    }, e.showAfter));
  }, I = () => {
    w() || (D(), e.hideAfter > 0 ? m = window.setTimeout(() => {
      A();
    }, e.hideAfter) : A());
  }, A = () => {
    $(), e.disabled && ne(!0);
  };
  function B() {
    e.enterable && e.trigger !== "click" && clearTimeout(m);
  }
  function u() {
    const { trigger: U } = e;
    xr(U) && (U === "click" || U === "focus") || U.length === 1 && (U[0] === "click" || U[0] === "focus") || I();
  }
  function ee() {
    if (!hr(x))
      return;
    const U = hr(i), q = Iw(U) ? U : U.$el;
    f = G0(q, hr(a), hr(T)), f.update();
  }
  function ne(U) {
    !f || hr(x) && !U || ae();
  }
  function ae() {
    var U;
    (U = f == null ? void 0 : f.destroy) == null || U.call(f), f = null;
  }
  const re = {};
  function me() {
    hr(x) && (f ? f.update() : ee());
  }
  function we(U) {
    U && (b.value.zIndex = Ku.nextZIndex(), ee());
  }
  if (!w()) {
    const U = () => {
      hr(x) ? I() : E();
    }, q = (F) => {
      switch (F.stopPropagation(), F.type) {
        case "click": {
          y ? y = !1 : U();
          break;
        }
        case "mouseenter": {
          E();
          break;
        }
        case "mouseleave": {
          I();
          break;
        }
        case "focus": {
          y = !0, E();
          break;
        }
        case "blur": {
          y = !1, I();
          break;
        }
      }
    }, Y = {
      click: ["onClick"],
      hover: ["onMouseenter", "onMouseleave"],
      focus: ["onFocus", "onBlur"]
    }, R = (F) => {
      Y[F].forEach((W) => {
        re[W] = q;
      });
    };
    Ao(e.trigger) ? Object.values(e.trigger).forEach(R) : R(e.trigger);
  }
  return Ct(T, (U) => {
    f && (f.setOptions(U), f.update());
  }), Ct(x, we), {
    update: me,
    doDestroy: ne,
    show: E,
    hide: I,
    onPopperMouseEnter: B,
    onPopperMouseLeave: u,
    onAfterEnter: () => {
      t("after-enter");
    },
    onAfterLeave: () => {
      ae(), t("after-leave");
    },
    onBeforeEnter: () => {
      t("before-enter");
    },
    onBeforeLeave: () => {
      t("before-leave");
    },
    initializePopper: ee,
    isManualMode: w,
    arrowRef: n,
    events: re,
    popperId: o,
    popperInstance: f,
    popperRef: a,
    popperStyle: b,
    triggerRef: i,
    visibility: x
  };
}
function n_(e, t) {
  const {
    effect: n,
    name: i,
    stopPopperMouseEvent: a,
    popperClass: o,
    popperStyle: f,
    popperRef: d,
    pure: m,
    popperId: y,
    visibility: w,
    onMouseenter: b,
    onMouseleave: T,
    onAfterEnter: O,
    onAfterLeave: x,
    onBeforeEnter: C,
    onBeforeLeave: $
  } = e, D = [o, "el-popper", `is-${n}`, m ? "is-pure" : ""], E = a ? Au : Bf;
  return Pn(Co, {
    name: i,
    onAfterEnter: O,
    onAfterLeave: x,
    onBeforeEnter: C,
    onBeforeLeave: $
  }, {
    default: Bt(() => [
      Ot(Pn("div", {
        "aria-hidden": String(!w),
        class: D,
        style: f ?? {},
        id: y,
        ref: d ?? "popperRef",
        role: "tooltip",
        onMouseenter: b,
        onMouseleave: T,
        onClick: Au,
        onMousedown: E,
        onMouseup: E
      }, t), [[Mn, w]])
    ])
  });
}
function uf(e, t) {
  const n = Cc(e, 1);
  return n || Wf("renderTrigger", "trigger expects single rooted node"), tp(n, t, !0);
}
function r_(e) {
  return e ? Pn("div", {
    ref: "arrowRef",
    class: "el-popper__arrow",
    "data-popper-arrow": ""
  }, null) : Pn(Yf, null, "");
}
var i_ = Object.defineProperty, ff = Object.getOwnPropertySymbols, a_ = Object.prototype.hasOwnProperty, s_ = Object.prototype.propertyIsEnumerable, cf = (e, t, n) => t in e ? i_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, o_ = (e, t) => {
  for (var n in t || (t = {}))
    a_.call(t, n) && cf(e, n, t[n]);
  if (ff)
    for (var n of ff(t))
      s_.call(t, n) && cf(e, n, t[n]);
  return e;
};
const df = "ElPopper", l_ = "update:visible";
var Si = Mt({
  name: df,
  props: QS,
  emits: [
    l_,
    "after-enter",
    "after-leave",
    "before-enter",
    "before-leave"
  ],
  setup(e, t) {
    t.slots.trigger || Wf(df, "Trigger must be provided");
    const n = t_(e, t), i = () => n.doDestroy(!0);
    return Nn(n.initializePopper), Do(i), Jh(n.initializePopper), Qh(i), n;
  },
  render() {
    var e;
    const {
      $slots: t,
      appendToBody: n,
      class: i,
      style: a,
      effect: o,
      hide: f,
      onPopperMouseEnter: d,
      onPopperMouseLeave: m,
      onAfterEnter: y,
      onAfterLeave: w,
      onBeforeEnter: b,
      onBeforeLeave: T,
      popperClass: O,
      popperId: x,
      popperStyle: C,
      pure: $,
      showArrow: D,
      transition: E,
      visibility: I,
      stopPopperMouseEvent: A
    } = this, B = this.isManualMode(), u = r_(D), ee = n_({
      effect: o,
      name: E,
      popperClass: O,
      popperId: x,
      popperStyle: C,
      pure: $,
      stopPopperMouseEvent: A,
      onMouseenter: d,
      onMouseleave: m,
      onAfterEnter: y,
      onAfterLeave: w,
      onBeforeEnter: b,
      onBeforeLeave: T,
      visibility: I
    }, [
      Wt(t, "default", {}, () => [Ie(this.content)]),
      u
    ]), ne = (e = t.trigger) == null ? void 0 : e.call(t), ae = o_({
      "aria-describedby": x,
      class: i,
      style: a,
      ref: "triggerRef"
    }, this.events), re = B ? uf(ne, ae) : Ot(uf(ne, ae), [[Ra, f]]);
    return Pn(gt, null, [
      re,
      Pn(ep, {
        to: "body",
        disabled: !n
      }, [ee])
    ]);
  }
});
Si.__file = "packages/components/popper/src/index.vue";
Si.install = (e) => {
  e.component(Si.name, Si);
};
const u_ = Si;
var f_ = Object.defineProperty, c_ = Object.defineProperties, d_ = Object.getOwnPropertyDescriptors, hf = Object.getOwnPropertySymbols, h_ = Object.prototype.hasOwnProperty, p_ = Object.prototype.propertyIsEnumerable, pf = (e, t, n) => t in e ? f_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, m_ = (e, t) => {
  for (var n in t || (t = {}))
    h_.call(t, n) && pf(e, n, t[n]);
  if (hf)
    for (var n of hf(t))
      p_.call(t, n) && pf(e, n, t[n]);
  return e;
}, v_ = (e, t) => c_(e, d_(t));
const g_ = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], y_ = ["button", "submit", "reset"], io = Ho(v_(m_({}, Mc), {
  type: {
    type: String,
    values: g_,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  nativeType: {
    type: String,
    values: y_,
    default: "button"
  },
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean
})), b_ = {
  click: (e) => e instanceof MouseEvent
};
var zo = Mt({
  name: "ElButton",
  props: io,
  emits: b_,
  setup(e, { emit: t }) {
    const n = Pt(Oc, void 0), { size: i, disabled: a } = $c({
      size: Z(() => n == null ? void 0 : n.size)
    }), o = Z(() => e.type || (n == null ? void 0 : n.type) || "default"), f = Pt(Ia, void 0);
    return {
      buttonSize: i,
      buttonType: o,
      buttonDisabled: a,
      handleClick: (m) => {
        e.nativeType === "reset" && (f == null || f.resetFields()), t("click", m);
      }
    };
  }
});
const w_ = ["disabled", "autofocus", "type"], S_ = {
  key: 0,
  class: "el-icon-loading"
}, __ = { key: 2 };
function k_(e, t, n, i, a, o) {
  return ie(), ue("button", {
    class: xe([
      "el-button",
      e.buttonType ? "el-button--" + e.buttonType : "",
      e.buttonSize ? "el-button--" + e.buttonSize : "",
      {
        "is-disabled": e.buttonDisabled,
        "is-loading": e.loading,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle
      }
    ]),
    disabled: e.buttonDisabled || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType,
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [
    e.loading ? (ie(), ue("i", S_)) : je("v-if", !0),
    e.icon && !e.loading ? (ie(), ue("i", {
      key: 1,
      class: xe(e.icon)
    }, null, 2)) : je("v-if", !0),
    e.$slots.default ? (ie(), ue("span", __, [
      Wt(e.$slots, "default")
    ])) : je("v-if", !0)
  ], 10, w_);
}
zo.render = k_;
zo.__file = "packages/components/button/src/button.vue";
const T_ = {
  size: io.size,
  type: io.type
};
var Ya = Mt({
  name: "ElButtonGroup",
  props: T_,
  setup(e) {
    Vr(Oc, rr({
      size: ru(e, "size"),
      type: ru(e, "type")
    }));
  }
});
const D_ = { class: "el-button-group" };
function C_(e, t, n, i, a, o) {
  return ie(), ue("div", D_, [
    Wt(e.$slots, "default")
  ]);
}
Ya.render = C_;
Ya.__file = "packages/components/button/src/button-group.vue";
const Ac = Pc(zo, {
  ButtonGroup: Ya
});
A1(Ya);
var ao = {}, O_ = {
  get exports() {
    return ao;
  },
  set exports(e) {
    ao = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    var n = 1e3, i = 6e4, a = 36e5, o = "millisecond", f = "second", d = "minute", m = "hour", y = "day", w = "week", b = "month", T = "quarter", O = "year", x = "date", C = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, E = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(U) {
      var q = ["th", "st", "nd", "rd"], Y = U % 100;
      return "[" + U + (q[(Y - 20) % 10] || q[Y] || q[0]) + "]";
    } }, I = function(U, q, Y) {
      var R = String(U);
      return !R || R.length >= q ? U : "" + Array(q + 1 - R.length).join(Y) + U;
    }, A = { s: I, z: function(U) {
      var q = -U.utcOffset(), Y = Math.abs(q), R = Math.floor(Y / 60), F = Y % 60;
      return (q <= 0 ? "+" : "-") + I(R, 2, "0") + ":" + I(F, 2, "0");
    }, m: function U(q, Y) {
      if (q.date() < Y.date())
        return -U(Y, q);
      var R = 12 * (Y.year() - q.year()) + (Y.month() - q.month()), F = q.clone().add(R, b), W = Y - F < 0, X = q.clone().add(R + (W ? -1 : 1), b);
      return +(-(R + (Y - F) / (W ? F - X : X - F)) || 0);
    }, a: function(U) {
      return U < 0 ? Math.ceil(U) || 0 : Math.floor(U);
    }, p: function(U) {
      return { M: b, y: O, w, d: y, D: x, h: m, m: d, s: f, ms: o, Q: T }[U] || String(U || "").toLowerCase().replace(/s$/, "");
    }, u: function(U) {
      return U === void 0;
    } }, B = "en", u = {};
    u[B] = E;
    var ee = function(U) {
      return U instanceof me;
    }, ne = function U(q, Y, R) {
      var F;
      if (!q)
        return B;
      if (typeof q == "string") {
        var W = q.toLowerCase();
        u[W] && (F = W), Y && (u[W] = Y, F = W);
        var X = q.split("-");
        if (!F && X.length > 1)
          return U(X[0]);
      } else {
        var _e = q.name;
        u[_e] = q, F = _e;
      }
      return !R && F && (B = F), F || !R && B;
    }, ae = function(U, q) {
      if (ee(U))
        return U.clone();
      var Y = typeof q == "object" ? q : {};
      return Y.date = U, Y.args = arguments, new me(Y);
    }, re = A;
    re.l = ne, re.i = ee, re.w = function(U, q) {
      return ae(U, { locale: q.$L, utc: q.$u, x: q.$x, $offset: q.$offset });
    };
    var me = function() {
      function U(Y) {
        this.$L = ne(Y.locale, null, !0), this.parse(Y);
      }
      var q = U.prototype;
      return q.parse = function(Y) {
        this.$d = function(R) {
          var F = R.date, W = R.utc;
          if (F === null)
            return new Date(NaN);
          if (re.u(F))
            return new Date();
          if (F instanceof Date)
            return new Date(F);
          if (typeof F == "string" && !/Z$/i.test(F)) {
            var X = F.match($);
            if (X) {
              var _e = X[2] - 1 || 0, Te = (X[7] || "0").substring(0, 3);
              return W ? new Date(Date.UTC(X[1], _e, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, Te)) : new Date(X[1], _e, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, Te);
            }
          }
          return new Date(F);
        }(Y), this.$x = Y.x || {}, this.init();
      }, q.init = function() {
        var Y = this.$d;
        this.$y = Y.getFullYear(), this.$M = Y.getMonth(), this.$D = Y.getDate(), this.$W = Y.getDay(), this.$H = Y.getHours(), this.$m = Y.getMinutes(), this.$s = Y.getSeconds(), this.$ms = Y.getMilliseconds();
      }, q.$utils = function() {
        return re;
      }, q.isValid = function() {
        return this.$d.toString() !== C;
      }, q.isSame = function(Y, R) {
        var F = ae(Y);
        return this.startOf(R) <= F && F <= this.endOf(R);
      }, q.isAfter = function(Y, R) {
        return ae(Y) < this.startOf(R);
      }, q.isBefore = function(Y, R) {
        return this.endOf(R) < ae(Y);
      }, q.$g = function(Y, R, F) {
        return re.u(Y) ? this[R] : this.set(F, Y);
      }, q.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, q.valueOf = function() {
        return this.$d.getTime();
      }, q.startOf = function(Y, R) {
        var F = this, W = !!re.u(R) || R, X = re.p(Y), _e = function(ve, Se) {
          var Ee = re.w(F.$u ? Date.UTC(F.$y, Se, ve) : new Date(F.$y, Se, ve), F);
          return W ? Ee : Ee.endOf(y);
        }, Te = function(ve, Se) {
          return re.w(F.toDate()[ve].apply(F.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Se)), F);
        }, Ae = this.$W, Ye = this.$M, te = this.$D, Oe = "set" + (this.$u ? "UTC" : "");
        switch (X) {
          case O:
            return W ? _e(1, 0) : _e(31, 11);
          case b:
            return W ? _e(1, Ye) : _e(0, Ye + 1);
          case w:
            var Be = this.$locale().weekStart || 0, oe = (Ae < Be ? Ae + 7 : Ae) - Be;
            return _e(W ? te - oe : te + (6 - oe), Ye);
          case y:
          case x:
            return Te(Oe + "Hours", 0);
          case m:
            return Te(Oe + "Minutes", 1);
          case d:
            return Te(Oe + "Seconds", 2);
          case f:
            return Te(Oe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, q.endOf = function(Y) {
        return this.startOf(Y, !1);
      }, q.$set = function(Y, R) {
        var F, W = re.p(Y), X = "set" + (this.$u ? "UTC" : ""), _e = (F = {}, F[y] = X + "Date", F[x] = X + "Date", F[b] = X + "Month", F[O] = X + "FullYear", F[m] = X + "Hours", F[d] = X + "Minutes", F[f] = X + "Seconds", F[o] = X + "Milliseconds", F)[W], Te = W === y ? this.$D + (R - this.$W) : R;
        if (W === b || W === O) {
          var Ae = this.clone().set(x, 1);
          Ae.$d[_e](Te), Ae.init(), this.$d = Ae.set(x, Math.min(this.$D, Ae.daysInMonth())).$d;
        } else
          _e && this.$d[_e](Te);
        return this.init(), this;
      }, q.set = function(Y, R) {
        return this.clone().$set(Y, R);
      }, q.get = function(Y) {
        return this[re.p(Y)]();
      }, q.add = function(Y, R) {
        var F, W = this;
        Y = Number(Y);
        var X = re.p(R), _e = function(Ye) {
          var te = ae(W);
          return re.w(te.date(te.date() + Math.round(Ye * Y)), W);
        };
        if (X === b)
          return this.set(b, this.$M + Y);
        if (X === O)
          return this.set(O, this.$y + Y);
        if (X === y)
          return _e(1);
        if (X === w)
          return _e(7);
        var Te = (F = {}, F[d] = i, F[m] = a, F[f] = n, F)[X] || 1, Ae = this.$d.getTime() + Y * Te;
        return re.w(Ae, this);
      }, q.subtract = function(Y, R) {
        return this.add(-1 * Y, R);
      }, q.format = function(Y) {
        var R = this, F = this.$locale();
        if (!this.isValid())
          return F.invalidDate || C;
        var W = Y || "YYYY-MM-DDTHH:mm:ssZ", X = re.z(this), _e = this.$H, Te = this.$m, Ae = this.$M, Ye = F.weekdays, te = F.months, Oe = function(Se, Ee, Xe, ze) {
          return Se && (Se[Ee] || Se(R, W)) || Xe[Ee].slice(0, ze);
        }, Be = function(Se) {
          return re.s(_e % 12 || 12, Se, "0");
        }, oe = F.meridiem || function(Se, Ee, Xe) {
          var ze = Se < 12 ? "AM" : "PM";
          return Xe ? ze.toLowerCase() : ze;
        }, ve = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Ae + 1, MM: re.s(Ae + 1, 2, "0"), MMM: Oe(F.monthsShort, Ae, te, 3), MMMM: Oe(te, Ae), D: this.$D, DD: re.s(this.$D, 2, "0"), d: String(this.$W), dd: Oe(F.weekdaysMin, this.$W, Ye, 2), ddd: Oe(F.weekdaysShort, this.$W, Ye, 3), dddd: Ye[this.$W], H: String(_e), HH: re.s(_e, 2, "0"), h: Be(1), hh: Be(2), a: oe(_e, Te, !0), A: oe(_e, Te, !1), m: String(Te), mm: re.s(Te, 2, "0"), s: String(this.$s), ss: re.s(this.$s, 2, "0"), SSS: re.s(this.$ms, 3, "0"), Z: X };
        return W.replace(D, function(Se, Ee) {
          return Ee || ve[Se] || X.replace(":", "");
        });
      }, q.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, q.diff = function(Y, R, F) {
        var W, X = re.p(R), _e = ae(Y), Te = (_e.utcOffset() - this.utcOffset()) * i, Ae = this - _e, Ye = re.m(this, _e);
        return Ye = (W = {}, W[O] = Ye / 12, W[b] = Ye, W[T] = Ye / 3, W[w] = (Ae - Te) / 6048e5, W[y] = (Ae - Te) / 864e5, W[m] = Ae / a, W[d] = Ae / i, W[f] = Ae / n, W)[X] || Ae, F ? Ye : re.a(Ye);
      }, q.daysInMonth = function() {
        return this.endOf(b).$D;
      }, q.$locale = function() {
        return u[this.$L];
      }, q.locale = function(Y, R) {
        if (!Y)
          return this.$L;
        var F = this.clone(), W = ne(Y, R, !0);
        return W && (F.$L = W), F;
      }, q.clone = function() {
        return re.w(this.$d, this);
      }, q.toDate = function() {
        return new Date(this.valueOf());
      }, q.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, q.toISOString = function() {
        return this.$d.toISOString();
      }, q.toString = function() {
        return this.$d.toUTCString();
      }, U;
    }(), we = me.prototype;
    return ae.prototype = we, [["$ms", o], ["$s", f], ["$m", d], ["$H", m], ["$W", y], ["$M", b], ["$y", O], ["$D", x]].forEach(function(U) {
      we[U[1]] = function(q) {
        return this.$g(q, U[0], U[1]);
      };
    }), ae.extend = function(U, q) {
      return U.$i || (U(q, me, ae), U.$i = !0), ae;
    }, ae.locale = ne, ae.isDayjs = ee, ae.unix = function(U) {
      return ae(1e3 * U);
    }, ae.en = u[B], ae.Ls = u, ae.p = {}, ae;
  });
})(O_);
const ke = ao;
var so = {}, M_ = {
  get exports() {
    return so;
  },
  set exports(e) {
    so = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    return function(n, i, a) {
      var o = i.prototype, f = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, d = function(b, T, O, x, C) {
        var $ = b.name ? b : b.$locale(), D = f($[T]), E = f($[O]), I = D || E.map(function(B) {
          return B.slice(0, x);
        });
        if (!C)
          return I;
        var A = $.weekStart;
        return I.map(function(B, u) {
          return I[(u + (A || 0)) % 7];
        });
      }, m = function() {
        return a.Ls[a.locale()];
      }, y = function(b, T) {
        return b.formats[T] || function(O) {
          return O.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x, C, $) {
            return C || $.slice(1);
          });
        }(b.formats[T.toUpperCase()]);
      }, w = function() {
        var b = this;
        return { months: function(T) {
          return T ? T.format("MMMM") : d(b, "months");
        }, monthsShort: function(T) {
          return T ? T.format("MMM") : d(b, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return b.$locale().weekStart || 0;
        }, weekdays: function(T) {
          return T ? T.format("dddd") : d(b, "weekdays");
        }, weekdaysMin: function(T) {
          return T ? T.format("dd") : d(b, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(T) {
          return T ? T.format("ddd") : d(b, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(T) {
          return y(b.$locale(), T);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      o.localeData = function() {
        return w.bind(this)();
      }, a.localeData = function() {
        var b = m();
        return { firstDayOfWeek: function() {
          return b.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(T) {
          return y(b, T);
        }, meridiem: b.meridiem, ordinal: b.ordinal };
      }, a.months = function() {
        return d(m(), "months");
      }, a.monthsShort = function() {
        return d(m(), "monthsShort", "months", 3);
      }, a.weekdays = function(b) {
        return d(m(), "weekdays", null, null, b);
      }, a.weekdaysShort = function(b) {
        return d(m(), "weekdaysShort", "weekdays", 3, b);
      }, a.weekdaysMin = function(b) {
        return d(m(), "weekdaysMin", "weekdays", 2, b);
      };
    };
  });
})(M_);
const $_ = so;
var oo = {}, P_ = {
  get exports() {
    return oo;
  },
  set exports(e) {
    oo = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, o = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, d = {}, m = function(C) {
      return (C = +C) + (C > 68 ? 1900 : 2e3);
    }, y = function(C) {
      return function($) {
        this[C] = +$;
      };
    }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
      (this.zone || (this.zone = {})).offset = function($) {
        if (!$ || $ === "Z")
          return 0;
        var D = $.match(/([+-]|\d\d)/g), E = 60 * D[1] + (+D[2] || 0);
        return E === 0 ? 0 : D[0] === "+" ? -E : E;
      }(C);
    }], b = function(C) {
      var $ = d[C];
      return $ && ($.indexOf ? $ : $.s.concat($.f));
    }, T = function(C, $) {
      var D, E = d.meridiem;
      if (E) {
        for (var I = 1; I <= 24; I += 1)
          if (C.indexOf(E(I, 0, $)) > -1) {
            D = I > 12;
            break;
          }
      } else
        D = C === ($ ? "pm" : "PM");
      return D;
    }, O = { A: [f, function(C) {
      this.afternoon = T(C, !1);
    }], a: [f, function(C) {
      this.afternoon = T(C, !0);
    }], S: [/\d/, function(C) {
      this.milliseconds = 100 * +C;
    }], SS: [a, function(C) {
      this.milliseconds = 10 * +C;
    }], SSS: [/\d{3}/, function(C) {
      this.milliseconds = +C;
    }], s: [o, y("seconds")], ss: [o, y("seconds")], m: [o, y("minutes")], mm: [o, y("minutes")], H: [o, y("hours")], h: [o, y("hours")], HH: [o, y("hours")], hh: [o, y("hours")], D: [o, y("day")], DD: [a, y("day")], Do: [f, function(C) {
      var $ = d.ordinal, D = C.match(/\d+/);
      if (this.day = D[0], $)
        for (var E = 1; E <= 31; E += 1)
          $(E).replace(/\[|\]/g, "") === C && (this.day = E);
    }], M: [o, y("month")], MM: [a, y("month")], MMM: [f, function(C) {
      var $ = b("months"), D = (b("monthsShort") || $.map(function(E) {
        return E.slice(0, 3);
      })).indexOf(C) + 1;
      if (D < 1)
        throw new Error();
      this.month = D % 12 || D;
    }], MMMM: [f, function(C) {
      var $ = b("months").indexOf(C) + 1;
      if ($ < 1)
        throw new Error();
      this.month = $ % 12 || $;
    }], Y: [/[+-]?\d+/, y("year")], YY: [a, function(C) {
      this.year = m(C);
    }], YYYY: [/\d{4}/, y("year")], Z: w, ZZ: w };
    function x(C) {
      var $, D;
      $ = C, D = d && d.formats;
      for (var E = (C = $.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(ae, re, me) {
        var we = me && me.toUpperCase();
        return re || D[me] || n[me] || D[we].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(U, q, Y) {
          return q || Y.slice(1);
        });
      })).match(i), I = E.length, A = 0; A < I; A += 1) {
        var B = E[A], u = O[B], ee = u && u[0], ne = u && u[1];
        E[A] = ne ? { regex: ee, parser: ne } : B.replace(/^\[|\]$/g, "");
      }
      return function(ae) {
        for (var re = {}, me = 0, we = 0; me < I; me += 1) {
          var U = E[me];
          if (typeof U == "string")
            we += U.length;
          else {
            var q = U.regex, Y = U.parser, R = ae.slice(we), F = q.exec(R)[0];
            Y.call(re, F), ae = ae.replace(F, "");
          }
        }
        return function(W) {
          var X = W.afternoon;
          if (X !== void 0) {
            var _e = W.hours;
            X ? _e < 12 && (W.hours += 12) : _e === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(re), re;
      };
    }
    return function(C, $, D) {
      D.p.customParseFormat = !0, C && C.parseTwoDigitYear && (m = C.parseTwoDigitYear);
      var E = $.prototype, I = E.parse;
      E.parse = function(A) {
        var B = A.date, u = A.utc, ee = A.args;
        this.$u = u;
        var ne = ee[1];
        if (typeof ne == "string") {
          var ae = ee[2] === !0, re = ee[3] === !0, me = ae || re, we = ee[2];
          re && (we = ee[2]), d = this.$locale(), !ae && we && (d = D.Ls[we]), this.$d = function(R, F, W) {
            try {
              if (["x", "X"].indexOf(F) > -1)
                return new Date((F === "X" ? 1e3 : 1) * R);
              var X = x(F)(R), _e = X.year, Te = X.month, Ae = X.day, Ye = X.hours, te = X.minutes, Oe = X.seconds, Be = X.milliseconds, oe = X.zone, ve = new Date(), Se = Ae || (_e || Te ? 1 : ve.getDate()), Ee = _e || ve.getFullYear(), Xe = 0;
              _e && !Te || (Xe = Te > 0 ? Te - 1 : ve.getMonth());
              var ze = Ye || 0, P = te || 0, de = Oe || 0, Pe = Be || 0;
              return oe ? new Date(Date.UTC(Ee, Xe, Se, ze, P, de, Pe + 60 * oe.offset * 1e3)) : W ? new Date(Date.UTC(Ee, Xe, Se, ze, P, de, Pe)) : new Date(Ee, Xe, Se, ze, P, de, Pe);
            } catch {
              return new Date("");
            }
          }(B, ne, u), this.init(), we && we !== !0 && (this.$L = this.locale(we).$L), me && B != this.format(ne) && (this.$d = new Date("")), d = {};
        } else if (ne instanceof Array)
          for (var U = ne.length, q = 1; q <= U; q += 1) {
            ee[1] = ne[q - 1];
            var Y = D.apply(this, ee);
            if (Y.isValid()) {
              this.$d = Y.$d, this.$L = Y.$L, this.init();
              break;
            }
            q === U && (this.$d = new Date(""));
          }
        else
          I.call(this, A);
      };
    };
  });
})(P_);
const Ec = oo;
var A_ = Nw;
function E_(e, t) {
  return A_(e, t);
}
var N_ = E_;
const L_ = (e) => ["", "large", "medium", "small", "mini"].includes(e), Nc = (e) => [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
].includes(e);
var mf = Ma, R_ = nc, x_ = Ea, vf = mf ? mf.isConcatSpreadable : void 0;
function I_(e) {
  return x_(e) || R_(e) || !!(vf && e && e[vf]);
}
var Y_ = I_, j_ = ec, F_ = Y_;
function Lc(e, t, n, i, a) {
  var o = -1, f = e.length;
  for (n || (n = F_), a || (a = []); ++o < f; ) {
    var d = e[o];
    t > 0 && n(d) ? t > 1 ? Lc(d, t - 1, n, i, a) : j_(a, d) : i || (a[a.length] = d);
  }
  return a;
}
var H_ = Lc;
function V_(e) {
  return e;
}
var Rc = V_;
function W_(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var B_ = W_, z_ = B_, gf = Math.max;
function U_(e, t, n) {
  return t = gf(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, a = -1, o = gf(i.length - t, 0), f = Array(o); ++a < o; )
      f[a] = i[t + a];
    a = -1;
    for (var d = Array(t + 1); ++a < t; )
      d[a] = i[a];
    return d[t] = n(f), z_(e, this, d);
  };
}
var q_ = U_;
function G_(e) {
  return function() {
    return e;
  };
}
var K_ = G_, X_ = _r, Z_ = function() {
  try {
    var e = X_(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), J_ = Z_, Q_ = K_, yf = J_, ek = Rc, tk = yf ? function(e, t) {
  return yf(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Q_(t),
    writable: !0
  });
} : ek, nk = tk, rk = 800, ik = 16, ak = Date.now;
function sk(e) {
  var t = 0, n = 0;
  return function() {
    var i = ak(), a = ik - (i - n);
    if (n = i, a > 0) {
      if (++t >= rk)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var ok = sk, lk = nk, uk = ok, fk = uk(lk), ck = fk, dk = Rc, hk = q_, pk = ck;
function mk(e, t) {
  return pk(hk(e, t, dk), e + "");
}
var vk = mk;
function gk(e, t, n, i) {
  for (var a = e.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var yk = gk;
function bk(e) {
  return e !== e;
}
var wk = bk;
function Sk(e, t, n) {
  for (var i = n - 1, a = e.length; ++i < a; )
    if (e[i] === t)
      return i;
  return -1;
}
var _k = Sk, kk = yk, Tk = wk, Dk = _k;
function Ck(e, t, n) {
  return t === t ? Dk(e, t, n) : kk(e, Tk, n);
}
var Ok = Ck, Mk = Ok;
function $k(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Mk(e, t, 0) > -1;
}
var Pk = $k;
function Ak(e, t, n) {
  for (var i = -1, a = e == null ? 0 : e.length; ++i < a; )
    if (n(t, e[i]))
      return !0;
  return !1;
}
var Ek = Ak;
function Nk() {
}
var Lk = Nk, As = sc, Rk = Lk, xk = No, Ik = 1 / 0, Yk = As && 1 / xk(new As([, -0]))[1] == Ik ? function(e) {
  return new As(e);
} : Rk, jk = Yk, Fk = Zf, Hk = Pk, Vk = Ek, Wk = Jf, Bk = jk, zk = No, Uk = 200;
function qk(e, t, n) {
  var i = -1, a = Hk, o = e.length, f = !0, d = [], m = d;
  if (n)
    f = !1, a = Vk;
  else if (o >= Uk) {
    var y = t ? null : Bk(e);
    if (y)
      return zk(y);
    f = !1, a = Wk, m = new Fk();
  } else
    m = t ? [] : d;
  e:
    for (; ++i < o; ) {
      var w = e[i], b = t ? t(w) : w;
      if (w = n || w !== 0 ? w : 0, f && b === b) {
        for (var T = m.length; T--; )
          if (m[T] === b)
            continue e;
        t && m.push(b), d.push(w);
      } else
        a(m, b, n) || (m !== d && m.push(b), d.push(w));
    }
  return d;
}
var Gk = qk, Kk = ac, Xk = Qr;
function Zk(e) {
  return Xk(e) && Kk(e);
}
var Jk = Zk, Qk = H_, eT = vk, tT = Gk, nT = Jk, rT = eT(function(e) {
  return tT(Qk(e, 1, nT, !0));
}), Es = rT;
const lo = "HH:mm:ss", gi = "YYYY-MM-DD", iT = {
  date: gi,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${gi} ${lo}`,
  monthrange: "YYYY-MM",
  daterange: gi,
  datetimerange: `${gi} ${lo}`
}, Uo = {
  name: {
    type: [Array, String],
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: {
    type: String
  },
  valueFormat: {
    type: String
  },
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: String,
    default: "el-icon-circle-close"
  },
  editable: {
    type: Boolean,
    default: !0
  },
  prefixIcon: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    validator: L_
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: [Date, Array, String],
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: [Date, Array]
  },
  defaultTime: {
    type: [Date, Array]
  },
  isRange: {
    type: Boolean,
    default: !1
  },
  disabledHours: {
    type: Function
  },
  disabledMinutes: {
    type: Function
  },
  disabledSeconds: {
    type: Function
  },
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: !1
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  unlinkPanels: Boolean
}, bf = function(e, t) {
  const n = e instanceof Date, i = t instanceof Date;
  return n && i ? e.getTime() === t.getTime() : !n && !i ? e === t : !1;
}, wf = function(e, t) {
  const n = e instanceof Array, i = t instanceof Array;
  return n && i ? e.length !== t.length ? !1 : e.every((a, o) => bf(a, t[o])) : !n && !i ? bf(e, t) : !1;
}, Sf = function(e, t, n) {
  const i = fc(t) ? ke(e).locale(n) : ke(e, t).locale(n);
  return i.isValid() ? i : void 0;
}, _f = function(e, t, n) {
  return fc(t) ? e : ke(e).locale(n).format(t);
};
var ja = Mt({
  name: "Picker",
  components: {
    ElInput: Wo,
    ElPopper: u_
  },
  directives: { clickoutside: Ra },
  props: Uo,
  emits: ["update:modelValue", "change", "focus", "blur", "calendar-change"],
  setup(e, t) {
    const n = uc(), { lang: i } = Un(), a = Pt(Ia, {}), o = Pt(Fo, {}), f = Pt("ElPopperOptions", {}), d = le(null), m = le(!1), y = le(!1), w = le(null);
    Ct(m, (P) => {
      var de;
      P ? w.value = e.modelValue : (W.value = null, yn(() => {
        b(e.modelValue);
      }), t.emit("blur"), _e(), e.validateEvent && ((de = o.validate) == null || de.call(o, "blur")));
    });
    const b = (P, de) => {
      var Pe;
      (de || !wf(P, w.value)) && (t.emit("change", P), e.validateEvent && ((Pe = o.validate) == null || Pe.call(o, "change")));
    }, T = (P) => {
      if (!wf(e.modelValue, P)) {
        let de;
        Array.isArray(P) ? de = P.map((Pe) => _f(Pe, e.valueFormat, i.value)) : P && (de = _f(P, e.valueFormat, i.value)), t.emit("update:modelValue", P && de, i.value);
      }
    }, O = Z(() => {
      if (d.value.triggerRef) {
        const P = q.value ? d.value.triggerRef : d.value.triggerRef.$el;
        return [].slice.call(P.querySelectorAll("input"));
      }
      return [];
    }), x = (P, de, Pe) => {
      const fe = O.value;
      fe.length && (!Pe || Pe === "min" ? (fe[0].setSelectionRange(P, de), fe[0].focus()) : Pe === "max" && (fe[1].setSelectionRange(P, de), fe[1].focus()));
    }, C = (P = "", de = !1) => {
      m.value = de;
      let Pe;
      Array.isArray(P) ? Pe = P.map((fe) => fe.toDate()) : Pe = P && P.toDate(), W.value = null, T(Pe);
    }, $ = (P) => {
      e.readonly || E.value || m.value || (m.value = !0, t.emit("focus", P));
    }, D = () => {
      m.value = !1, _e();
    }, E = Z(() => e.disabled || a.disabled), I = Z(() => {
      let P;
      if (me.value ? Ee.value.getDefaultValue && (P = Ee.value.getDefaultValue()) : Array.isArray(e.modelValue) ? P = e.modelValue.map((de) => Sf(de, e.valueFormat, i.value)) : P = Sf(e.modelValue, e.valueFormat, i.value), Ee.value.getRangeAvailableTime) {
        const de = Ee.value.getRangeAvailableTime(P);
        N_(de, P) || (P = de, T(Array.isArray(P) ? P.map((Pe) => Pe.toDate()) : P.toDate()));
      }
      return Array.isArray(P) && P.some((de) => !de) && (P = []), P;
    }), A = Z(() => {
      if (!Ee.value.panelReady)
        return;
      const P = Ae(I.value);
      if (Array.isArray(W.value))
        return [
          W.value[0] || P && P[0] || "",
          W.value[1] || P && P[1] || ""
        ];
      if (W.value !== null)
        return W.value;
      if (!(!u.value && me.value) && !(!m.value && me.value))
        return P ? ee.value ? P.join(", ") : P : "";
    }), B = Z(() => e.type.includes("time")), u = Z(() => e.type.startsWith("time")), ee = Z(() => e.type === "dates"), ne = Z(() => e.prefixIcon || (B.value ? "el-icon-time" : "el-icon-date")), ae = le(!1), re = (P) => {
      e.readonly || E.value || ae.value && (P.stopPropagation(), T(null), b(null, !0), ae.value = !1, m.value = !1, Ee.value.handleClear && Ee.value.handleClear());
    }, me = Z(() => !e.modelValue || Array.isArray(e.modelValue) && !e.modelValue.length), we = () => {
      e.readonly || E.value || !me.value && e.clearable && (ae.value = !0);
    }, U = () => {
      ae.value = !1;
    }, q = Z(() => e.type.indexOf("range") > -1), Y = Z(() => e.size || o.size || n.size), R = Z(() => {
      var P;
      return (P = d.value) == null ? void 0 : P.popperRef;
    }), F = () => {
      m.value && (m.value = !1);
    }, W = le(null), X = () => {
      if (W.value) {
        const P = Te(A.value);
        P && Ye(P) && (T(Array.isArray(P) ? P.map((de) => de.toDate()) : P.toDate()), W.value = null);
      }
      W.value === "" && (T(null), b(null), W.value = null);
    }, _e = () => {
      O.value.forEach((P) => P.blur());
    }, Te = (P) => P ? Ee.value.parseUserInput(P) : null, Ae = (P) => P ? Ee.value.formatToString(P) : null, Ye = (P) => Ee.value.isValidValue(P), te = (P) => {
      const de = P.code;
      if (de === wt.esc) {
        m.value = !1, P.stopPropagation();
        return;
      }
      if (de === wt.tab) {
        q.value ? setTimeout(() => {
          O.value.indexOf(document.activeElement) === -1 && (m.value = !1, _e());
        }, 0) : (X(), m.value = !1, P.stopPropagation());
        return;
      }
      if (de === wt.enter) {
        (W.value === "" || Ye(Te(A.value))) && (X(), m.value = !1), P.stopPropagation();
        return;
      }
      if (W.value) {
        P.stopPropagation();
        return;
      }
      Ee.value.handleKeydown && Ee.value.handleKeydown(P);
    }, Oe = (P) => {
      W.value = P;
    }, Be = (P) => {
      W.value ? W.value = [P.target.value, W.value[1]] : W.value = [P.target.value, null];
    }, oe = (P) => {
      W.value ? W.value = [W.value[0], P.target.value] : W.value = [null, P.target.value];
    }, ve = () => {
      const P = Te(W.value && W.value[0]);
      if (P && P.isValid()) {
        W.value = [Ae(P), A.value[1]];
        const de = [P, I.value && I.value[1]];
        Ye(de) && (T(de), W.value = null);
      }
    }, Se = () => {
      const P = Te(W.value && W.value[1]);
      if (P && P.isValid()) {
        W.value = [A.value[0], Ae(P)];
        const de = [I.value && I.value[0], P];
        Ye(de) && (T(de), W.value = null);
      }
    }, Ee = le({}), Xe = (P) => {
      Ee.value[P[0]] = P[1], Ee.value.panelReady = !0;
    }, ze = (P) => {
      t.emit("calendar-change", P);
    };
    return Vr("EP_PICKER_BASE", {
      props: e
    }), {
      Effect: va,
      elPopperOptions: f,
      isDatesPicker: ee,
      handleEndChange: Se,
      handleStartChange: ve,
      handleStartInput: Be,
      handleEndInput: oe,
      onUserInput: Oe,
      handleChange: X,
      handleKeydown: te,
      popperPaneRef: R,
      onClickOutside: F,
      pickerSize: Y,
      isRangeInput: q,
      onMouseLeave: U,
      onMouseEnter: we,
      onClearIconClick: re,
      showClose: ae,
      triggerClass: ne,
      onPick: C,
      handleFocus: $,
      handleBlur: D,
      pickerVisible: m,
      pickerActualVisible: y,
      displayValue: A,
      parsedValue: I,
      setSelectionRange: x,
      refPopper: d,
      pickerDisabled: E,
      onSetPickerOption: Xe,
      onCalendarChange: ze
    };
  }
});
const aT = ["name", "placeholder", "value", "disabled", "readonly"], sT = { class: "el-range-separator" }, oT = ["name", "placeholder", "value", "disabled", "readonly"];
function lT(e, t, n, i, a, o) {
  const f = yt("el-input"), d = yt("el-popper"), m = Da("clickoutside");
  return ie(), Sn(d, Bs({
    ref: "refPopper",
    visible: e.pickerVisible,
    "onUpdate:visible": t[18] || (t[18] = (y) => e.pickerVisible = y),
    "manual-mode": "",
    effect: e.Effect.LIGHT,
    pure: "",
    trigger: "click"
  }, e.$attrs, {
    "popper-class": `el-picker__popper ${e.popperClass}`,
    "popper-options": e.elPopperOptions,
    "fallback-placements": ["bottom", "top", "right", "left"],
    transition: "el-zoom-in-top",
    "gpu-acceleration": !1,
    "stop-popper-mouse-event": !1,
    "append-to-body": "",
    onBeforeEnter: t[19] || (t[19] = (y) => e.pickerActualVisible = !0),
    onAfterLeave: t[20] || (t[20] = (y) => e.pickerActualVisible = !1)
  }), {
    trigger: Bt(() => [
      e.isRangeInput ? Ot((ie(), ue("div", {
        key: 1,
        class: xe(["el-date-editor el-range-editor el-input__inner", [
          "el-date-editor--" + e.type,
          e.pickerSize ? `el-range-editor--${e.pickerSize}` : "",
          e.pickerDisabled ? "is-disabled" : "",
          e.pickerVisible ? "is-active" : ""
        ]]),
        onClick: t[9] || (t[9] = (...y) => e.handleFocus && e.handleFocus(...y)),
        onMouseenter: t[10] || (t[10] = (...y) => e.onMouseEnter && e.onMouseEnter(...y)),
        onMouseleave: t[11] || (t[11] = (...y) => e.onMouseLeave && e.onMouseLeave(...y)),
        onKeydown: t[12] || (t[12] = (...y) => e.handleKeydown && e.handleKeydown(...y))
      }, [
        V("i", {
          class: xe(["el-input__icon", "el-range__icon", e.triggerClass])
        }, null, 2),
        V("input", {
          autocomplete: "off",
          name: e.name && e.name[0],
          placeholder: e.startPlaceholder,
          value: e.displayValue && e.displayValue[0],
          disabled: e.pickerDisabled,
          readonly: !e.editable || e.readonly,
          class: "el-range-input",
          onInput: t[2] || (t[2] = (...y) => e.handleStartInput && e.handleStartInput(...y)),
          onChange: t[3] || (t[3] = (...y) => e.handleStartChange && e.handleStartChange(...y)),
          onFocus: t[4] || (t[4] = (...y) => e.handleFocus && e.handleFocus(...y))
        }, null, 40, aT),
        Wt(e.$slots, "range-separator", {}, () => [
          V("span", sT, Ie(e.rangeSeparator), 1)
        ]),
        V("input", {
          autocomplete: "off",
          name: e.name && e.name[1],
          placeholder: e.endPlaceholder,
          value: e.displayValue && e.displayValue[1],
          disabled: e.pickerDisabled,
          readonly: !e.editable || e.readonly,
          class: "el-range-input",
          onFocus: t[5] || (t[5] = (...y) => e.handleFocus && e.handleFocus(...y)),
          onInput: t[6] || (t[6] = (...y) => e.handleEndInput && e.handleEndInput(...y)),
          onChange: t[7] || (t[7] = (...y) => e.handleEndChange && e.handleEndChange(...y))
        }, null, 40, oT),
        V("i", {
          class: xe([[e.showClose ? "" + e.clearIcon : ""], "el-input__icon el-range__close-icon"]),
          onClick: t[8] || (t[8] = (...y) => e.onClearIconClick && e.onClearIconClick(...y))
        }, null, 2)
      ], 34)), [
        [m, e.onClickOutside, e.popperPaneRef]
      ]) : Ot((ie(), Sn(f, {
        key: 0,
        "model-value": e.displayValue,
        name: e.name,
        size: e.pickerSize,
        disabled: e.pickerDisabled,
        placeholder: e.placeholder,
        class: xe(["el-date-editor", "el-date-editor--" + e.type]),
        readonly: !e.editable || e.readonly || e.isDatesPicker || e.type === "week",
        onInput: e.onUserInput,
        onFocus: e.handleFocus,
        onKeydown: e.handleKeydown,
        onChange: e.handleChange,
        onMouseenter: e.onMouseEnter,
        onMouseleave: e.onMouseLeave
      }, {
        prefix: Bt(() => [
          V("i", {
            class: xe(["el-input__icon", e.triggerClass]),
            onClick: t[0] || (t[0] = (...y) => e.handleFocus && e.handleFocus(...y))
          }, null, 2)
        ]),
        suffix: Bt(() => [
          V("i", {
            class: xe(["el-input__icon", [e.showClose ? "" + e.clearIcon : ""]]),
            onClick: t[1] || (t[1] = (...y) => e.onClearIconClick && e.onClearIconClick(...y))
          }, null, 2)
        ]),
        _: 1
      }, 8, ["model-value", "name", "size", "disabled", "placeholder", "class", "readonly", "onInput", "onFocus", "onKeydown", "onChange", "onMouseenter", "onMouseleave"])), [
        [m, e.onClickOutside, e.popperPaneRef]
      ])
    ]),
    default: Bt(() => [
      Wt(e.$slots, "default", {
        visible: e.pickerVisible,
        actualVisible: e.pickerActualVisible,
        parsedValue: e.parsedValue,
        format: e.format,
        unlinkPanels: e.unlinkPanels,
        type: e.type,
        defaultValue: e.defaultValue,
        onPick: t[13] || (t[13] = (...y) => e.onPick && e.onPick(...y)),
        onSelectRange: t[14] || (t[14] = (...y) => e.setSelectionRange && e.setSelectionRange(...y)),
        onSetPickerOption: t[15] || (t[15] = (...y) => e.onSetPickerOption && e.onSetPickerOption(...y)),
        onCalendarChange: t[16] || (t[16] = (...y) => e.onCalendarChange && e.onCalendarChange(...y)),
        onMousedown: t[17] || (t[17] = jf(() => {
        }, ["stop"]))
      })
    ]),
    _: 3
  }, 16, ["visible", "effect", "popper-class", "popper-options"]);
}
ja.render = lT;
ja.__file = "packages/components/time-picker/src/common/picker.vue";
const Ns = (e, t, n) => {
  const i = [], a = t && n();
  for (let o = 0; o < e; o++)
    i[o] = a ? a.includes(o) : !1;
  return i;
}, Ls = (e) => e.map((t, n) => t || n).filter((t) => t !== !0), xc = (e, t, n) => ({
  getHoursList: (f, d) => Ns(24, e, () => e(f, d)),
  getMinutesList: (f, d, m) => Ns(60, t, () => t(f, d, m)),
  getSecondsList: (f, d, m, y) => Ns(60, n, () => n(f, d, m, y))
}), Ic = (e, t, n) => {
  const { getHoursList: i, getMinutesList: a, getSecondsList: o } = xc(e, t, n);
  return {
    getAvailableHours: (y, w) => Ls(i(y, w)),
    getAvailableMinutes: (y, w, b) => Ls(a(y, w, b)),
    getAvailableSeconds: (y, w, b, T) => Ls(o(y, w, b, T))
  };
}, Yc = (e) => {
  const t = le(e.parsedValue);
  return Ct(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
};
var Fa = Mt({
  directives: {
    repeatClick: X0
  },
  components: {
    ElScrollbar: VS
  },
  props: {
    role: {
      type: String,
      required: !0
    },
    spinnerDate: {
      type: Object,
      required: !0
    },
    showSeconds: {
      type: Boolean,
      default: !0
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: ""
    },
    disabledHours: {
      type: Function
    },
    disabledMinutes: {
      type: Function
    },
    disabledSeconds: {
      type: Function
    }
  },
  emits: ["change", "select-range", "set-option"],
  setup(e, t) {
    let n = !1;
    const i = sS((te) => {
      n = !1, ne(te);
    }, 200), a = le(null), o = le(null), f = le(null), d = le(null), m = {
      hours: o,
      minutes: f,
      seconds: d
    }, y = Z(() => {
      const te = ["hours", "minutes", "seconds"];
      return e.showSeconds ? te : te.slice(0, 2);
    }), w = Z(() => e.spinnerDate.hour()), b = Z(() => e.spinnerDate.minute()), T = Z(() => e.spinnerDate.second()), O = Z(() => ({
      hours: w,
      minutes: b,
      seconds: T
    })), x = Z(() => Te(e.role)), C = Z(() => Ae(w.value, e.role)), $ = Z(() => Ye(w.value, b.value, e.role)), D = Z(() => ({
      hours: x,
      minutes: C,
      seconds: $
    })), E = Z(() => {
      const te = w.value;
      return [
        te > 0 ? te - 1 : void 0,
        te,
        te < 23 ? te + 1 : void 0
      ];
    }), I = Z(() => {
      const te = b.value;
      return [
        te > 0 ? te - 1 : void 0,
        te,
        te < 59 ? te + 1 : void 0
      ];
    }), A = Z(() => {
      const te = T.value;
      return [
        te > 0 ? te - 1 : void 0,
        te,
        te < 59 ? te + 1 : void 0
      ];
    }), B = Z(() => ({
      hours: E,
      minutes: I,
      seconds: A
    })), u = (te) => {
      if (!!!e.amPmMode)
        return "";
      const Be = e.amPmMode === "A";
      let oe = te < 12 ? " am" : " pm";
      return Be && (oe = oe.toUpperCase()), oe;
    }, ee = (te) => {
      te === "hours" ? t.emit("select-range", 0, 2) : te === "minutes" ? t.emit("select-range", 3, 5) : te === "seconds" && t.emit("select-range", 6, 8), a.value = te;
    }, ne = (te) => {
      re(te, O.value[te].value);
    }, ae = () => {
      ne("hours"), ne("minutes"), ne("seconds");
    }, re = (te, Oe) => {
      if (e.arrowControl)
        return;
      const Be = m[te];
      Be.value && (Be.value.$el.querySelector(".el-scrollbar__wrap").scrollTop = Math.max(0, Oe * me(te)));
    }, me = (te) => m[te].value.$el.querySelector("li").offsetHeight, we = () => {
      q(1);
    }, U = () => {
      q(-1);
    }, q = (te) => {
      a.value || ee("hours");
      const Oe = a.value;
      let Be = O.value[Oe].value;
      const oe = a.value === "hours" ? 24 : 60;
      Be = (Be + te + oe) % oe, Y(Oe, Be), re(Oe, Be), yn(() => ee(a.value));
    }, Y = (te, Oe) => {
      if (!D.value[te].value[Oe])
        switch (te) {
          case "hours":
            t.emit("change", e.spinnerDate.hour(Oe).minute(b.value).second(T.value));
            break;
          case "minutes":
            t.emit("change", e.spinnerDate.hour(w.value).minute(Oe).second(T.value));
            break;
          case "seconds":
            t.emit("change", e.spinnerDate.hour(w.value).minute(b.value).second(Oe));
            break;
        }
    }, R = (te, { value: Oe, disabled: Be }) => {
      Be || (Y(te, Oe), ee(te), re(te, Oe));
    }, F = (te) => {
      n = !0, i(te);
      const Oe = Math.min(Math.round((m[te].value.$el.querySelector(".el-scrollbar__wrap").scrollTop - (W(te) * 0.5 - 10) / me(te) + 3) / me(te)), te === "hours" ? 23 : 59);
      Y(te, Oe);
    }, W = (te) => m[te].value.$el.offsetHeight, X = () => {
      const te = (Oe) => {
        m[Oe].value && (m[Oe].value.$el.querySelector(".el-scrollbar__wrap").onscroll = () => {
          F(Oe);
        });
      };
      te("hours"), te("minutes"), te("seconds");
    };
    Nn(() => {
      yn(() => {
        !e.arrowControl && X(), ae(), e.role === "start" && ee("hours");
      });
    });
    const _e = (te) => `list${te.charAt(0).toUpperCase() + te.slice(1)}Ref`;
    t.emit("set-option", [`${e.role}_scrollDown`, q]), t.emit("set-option", [`${e.role}_emitSelectRange`, ee]);
    const { getHoursList: Te, getMinutesList: Ae, getSecondsList: Ye } = xc(e.disabledHours, e.disabledMinutes, e.disabledSeconds);
    return Ct(() => e.spinnerDate, () => {
      n || ae();
    }), {
      getRefId: _e,
      spinnerItems: y,
      currentScrollbar: a,
      hours: w,
      minutes: b,
      seconds: T,
      hoursList: x,
      minutesList: C,
      arrowHourList: E,
      arrowMinuteList: I,
      arrowSecondList: A,
      getAmPmFlag: u,
      emitSelectRange: ee,
      adjustCurrentSpinner: ne,
      typeItemHeight: me,
      listHoursRef: o,
      listMinutesRef: f,
      listSecondsRef: d,
      onIncreaseClick: we,
      onDecreaseClick: U,
      handleClick: R,
      secondsList: $,
      timePartsMap: O,
      arrowListMap: B,
      listMap: D
    };
  }
});
const uT = ["onClick"], fT = ["onMouseenter"], cT = { class: "el-time-spinner__arrow el-icon-arrow-up" }, dT = { class: "el-time-spinner__arrow el-icon-arrow-down" }, hT = { class: "el-time-spinner__list" };
function pT(e, t, n, i, a, o) {
  const f = yt("el-scrollbar"), d = Da("repeat-click");
  return ie(), ue("div", {
    class: xe(["el-time-spinner", { "has-seconds": e.showSeconds }])
  }, [
    e.arrowControl ? je("v-if", !0) : (ie(!0), ue(gt, { key: 0 }, It(e.spinnerItems, (m) => (ie(), Sn(f, {
      key: m,
      ref: e.getRefId(m),
      class: "el-time-spinner__wrapper",
      "wrap-style": "max-height: inherit;",
      "view-class": "el-time-spinner__list",
      noresize: "",
      tag: "ul",
      onMouseenter: (y) => e.emitSelectRange(m),
      onMousemove: (y) => e.adjustCurrentSpinner(m)
    }, {
      default: Bt(() => [
        (ie(!0), ue(gt, null, It(e.listMap[m].value, (y, w) => (ie(), ue("li", {
          key: w,
          class: xe(["el-time-spinner__item", { active: w === e.timePartsMap[m].value, disabled: y }]),
          onClick: (b) => e.handleClick(m, { value: w, disabled: y })
        }, [
          m === "hours" ? (ie(), ue(gt, { key: 0 }, [
            nr(Ie(("0" + (e.amPmMode ? w % 12 || 12 : w)).slice(-2)) + Ie(e.getAmPmFlag(w)), 1)
          ], 2112)) : (ie(), ue(gt, { key: 1 }, [
            nr(Ie(("0" + w).slice(-2)), 1)
          ], 2112))
        ], 10, uT))), 128))
      ]),
      _: 2
    }, 1032, ["onMouseenter", "onMousemove"]))), 128)),
    e.arrowControl ? (ie(!0), ue(gt, { key: 1 }, It(e.spinnerItems, (m) => (ie(), ue("div", {
      key: m,
      class: "el-time-spinner__wrapper is-arrow",
      onMouseenter: (y) => e.emitSelectRange(m)
    }, [
      Ot(V("i", cT, null, 512), [
        [d, e.onDecreaseClick]
      ]),
      Ot(V("i", dT, null, 512), [
        [d, e.onIncreaseClick]
      ]),
      V("ul", hT, [
        (ie(!0), ue(gt, null, It(e.arrowListMap[m].value, (y, w) => (ie(), ue("li", {
          key: w,
          class: xe(["el-time-spinner__item", {
            active: y === e.timePartsMap[m].value,
            disabled: e.listMap[m].value[y]
          }])
        }, Ie(y === void 0 ? "" : ("0" + (e.amPmMode ? y % 12 || 12 : y)).slice(-2) + e.getAmPmFlag(y)), 3))), 128))
      ])
    ], 40, fT))), 128)) : je("v-if", !0)
  ], 2);
}
Fa.render = pT;
Fa.__file = "packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue";
var Li = Mt({
  components: {
    TimeSpinner: Fa
  },
  props: {
    visible: Boolean,
    actualVisible: {
      type: Boolean,
      default: void 0
    },
    datetimeRole: {
      type: String
    },
    parsedValue: {
      type: [Object, String]
    },
    format: {
      type: String,
      default: ""
    }
  },
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = le([0, 2]), o = Yc(e), f = Z(() => e.actualVisible === void 0 ? "el-zoom-in-top" : ""), d = Z(() => e.format.includes("ss")), m = Z(() => e.format.includes("A") ? "A" : e.format.includes("a") ? "a" : ""), y = (Y) => {
      const R = ke(Y).locale(i.value), F = $(R);
      return R.isSame(F);
    }, w = () => {
      t.emit("pick", o.value, !1);
    }, b = (Y = !1, R = !1) => {
      R || t.emit("pick", e.parsedValue, Y);
    }, T = (Y) => {
      if (!e.visible)
        return;
      const R = $(Y).millisecond(0);
      t.emit("pick", R, !0);
    }, O = (Y, R) => {
      t.emit("select-range", Y, R), a.value = [Y, R];
    }, x = (Y) => {
      const R = [0, 3].concat(d.value ? [6] : []), F = ["hours", "minutes"].concat(d.value ? ["seconds"] : []), X = (R.indexOf(a.value[0]) + Y + R.length) % R.length;
      A.start_emitSelectRange(F[X]);
    }, C = (Y) => {
      const R = Y.code;
      if (R === wt.left || R === wt.right) {
        const F = R === wt.left ? -1 : 1;
        x(F), Y.preventDefault();
        return;
      }
      if (R === wt.up || R === wt.down) {
        const F = R === wt.up ? -1 : 1;
        A.start_scrollDown(F), Y.preventDefault();
        return;
      }
    }, $ = (Y) => {
      const R = {
        hour: we,
        minute: U,
        second: q
      };
      let F = Y;
      return ["hour", "minute", "second"].forEach((W) => {
        if (R[W]) {
          let X;
          const _e = R[W];
          W === "minute" ? X = _e(F.hour(), e.datetimeRole) : W === "second" ? X = _e(F.hour(), F.minute(), e.datetimeRole) : X = _e(e.datetimeRole), X && X.length && !X.includes(F[W]()) && (F = F[W](X[0]));
        }
      }), F;
    }, D = (Y) => Y ? ke(Y, e.format).locale(i.value) : null, E = (Y) => Y ? Y.format(e.format) : null, I = () => ke(me).locale(i.value);
    t.emit("set-picker-option", ["isValidValue", y]), t.emit("set-picker-option", ["formatToString", E]), t.emit("set-picker-option", ["parseUserInput", D]), t.emit("set-picker-option", ["handleKeydown", C]), t.emit("set-picker-option", [
      "getRangeAvailableTime",
      $
    ]), t.emit("set-picker-option", ["getDefaultValue", I]);
    const A = {}, B = (Y) => {
      A[Y[0]] = Y[1];
    }, u = Pt("EP_PICKER_BASE"), {
      arrowControl: ee,
      disabledHours: ne,
      disabledMinutes: ae,
      disabledSeconds: re,
      defaultValue: me
    } = u.props, { getAvailableHours: we, getAvailableMinutes: U, getAvailableSeconds: q } = Ic(ne, ae, re);
    return {
      transitionName: f,
      arrowControl: ee,
      onSetOption: B,
      t: n,
      handleConfirm: b,
      handleChange: T,
      setSelectionRange: O,
      amPmMode: m,
      showSeconds: d,
      handleCancel: w,
      disabledHours: ne,
      disabledMinutes: ae,
      disabledSeconds: re
    };
  }
});
const mT = {
  key: 0,
  class: "el-time-panel"
}, vT = { class: "el-time-panel__footer" };
function gT(e, t, n, i, a, o) {
  const f = yt("time-spinner");
  return ie(), Sn(Co, { name: e.transitionName }, {
    default: Bt(() => [
      e.actualVisible || e.visible ? (ie(), ue("div", mT, [
        V("div", {
          class: xe(["el-time-panel__content", { "has-seconds": e.showSeconds }])
        }, [
          at(f, {
            ref: "spinner",
            role: e.datetimeRole || "start",
            "arrow-control": e.arrowControl,
            "show-seconds": e.showSeconds,
            "am-pm-mode": e.amPmMode,
            "spinner-date": e.parsedValue,
            "disabled-hours": e.disabledHours,
            "disabled-minutes": e.disabledMinutes,
            "disabled-seconds": e.disabledSeconds,
            onChange: e.handleChange,
            onSetOption: e.onSetOption,
            onSelectRange: e.setSelectionRange
          }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2),
        V("div", vT, [
          V("button", {
            type: "button",
            class: "el-time-panel__btn cancel",
            onClick: t[0] || (t[0] = (...d) => e.handleCancel && e.handleCancel(...d))
          }, Ie(e.t("el.datepicker.cancel")), 1),
          V("button", {
            type: "button",
            class: "el-time-panel__btn confirm",
            onClick: t[1] || (t[1] = (d) => e.handleConfirm())
          }, Ie(e.t("el.datepicker.confirm")), 1)
        ])
      ])) : je("v-if", !0)
    ]),
    _: 1
  }, 8, ["name"]);
}
Li.render = gT;
Li.__file = "packages/components/time-picker/src/time-picker-com/panel-time-pick.vue";
const Pr = (e, t) => {
  const n = [];
  for (let i = e; i <= t; i++)
    n.push(i);
  return n;
};
var qo = Mt({
  components: { TimeSpinner: Fa },
  props: {
    visible: Boolean,
    actualVisible: Boolean,
    parsedValue: {
      type: [Array]
    },
    format: {
      type: String,
      default: ""
    }
  },
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = Z(() => e.parsedValue[0]), o = Z(() => e.parsedValue[1]), f = Yc(e), d = () => {
      t.emit("pick", f.value, null);
    }, m = Z(() => e.format.includes("ss")), y = Z(() => e.format.includes("A") ? "A" : e.format.includes("a") ? "a" : ""), w = le([]), b = le([]), T = (oe = !1) => {
      t.emit("pick", [a.value, o.value], oe);
    }, O = (oe) => {
      $(oe.millisecond(0), o.value);
    }, x = (oe) => {
      $(a.value, oe.millisecond(0));
    }, C = (oe) => {
      const ve = oe.map((Ee) => ke(Ee).locale(i.value)), Se = me(ve);
      return ve[0].isSame(Se[0]) && ve[1].isSame(Se[1]);
    }, $ = (oe, ve) => {
      t.emit("pick", [oe, ve], !0);
    }, D = Z(() => a.value > o.value), E = le([0, 2]), I = (oe, ve) => {
      t.emit("select-range", oe, ve, "min"), E.value = [oe, ve];
    }, A = Z(() => m.value ? 11 : 8), B = (oe, ve) => {
      t.emit("select-range", oe, ve, "max"), E.value = [oe + A.value, ve + A.value];
    }, u = (oe) => {
      const ve = m.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11], Se = ["hours", "minutes"].concat(m.value ? ["seconds"] : []), Xe = (ve.indexOf(E.value[0]) + oe + ve.length) % ve.length, ze = ve.length / 2;
      Xe < ze ? X.start_emitSelectRange(Se[Xe]) : X.end_emitSelectRange(Se[Xe - ze]);
    }, ee = (oe) => {
      const ve = oe.code;
      if (ve === wt.left || ve === wt.right) {
        const Se = ve === wt.left ? -1 : 1;
        u(Se), oe.preventDefault();
        return;
      }
      if (ve === wt.up || ve === wt.down) {
        const Se = ve === wt.up ? -1 : 1, Ee = E.value[0] < A.value ? "start" : "end";
        X[`${Ee}_scrollDown`](Se), oe.preventDefault();
        return;
      }
    }, ne = (oe, ve) => {
      const Se = Ye ? Ye(oe) : [], Ee = oe === "start", ze = (ve || (Ee ? o.value : a.value)).hour(), P = Ee ? Pr(ze + 1, 23) : Pr(0, ze - 1);
      return Es(Se, P);
    }, ae = (oe, ve, Se) => {
      const Ee = te ? te(oe, ve) : [], Xe = ve === "start", ze = Se || (Xe ? o.value : a.value), P = ze.hour();
      if (oe !== P)
        return Ee;
      const de = ze.minute(), Pe = Xe ? Pr(de + 1, 59) : Pr(0, de - 1);
      return Es(Ee, Pe);
    }, re = (oe, ve, Se, Ee) => {
      const Xe = Oe ? Oe(oe, ve, Se) : [], ze = Se === "start", P = Ee || (ze ? o.value : a.value), de = P.hour(), Pe = P.minute();
      if (oe !== de || ve !== Pe)
        return Xe;
      const fe = P.second(), nt = ze ? Pr(fe + 1, 59) : Pr(0, fe - 1);
      return Es(Xe, nt);
    }, me = (oe) => oe.map((ve, Se) => Y(oe[0], oe[1], Se === 0 ? "start" : "end")), { getAvailableHours: we, getAvailableMinutes: U, getAvailableSeconds: q } = Ic(ne, ae, re), Y = (oe, ve, Se) => {
      const Ee = {
        hour: we,
        minute: U,
        second: q
      }, Xe = Se === "start";
      let ze = Xe ? oe : ve;
      const P = Xe ? ve : oe;
      return ["hour", "minute", "second"].forEach((de) => {
        if (Ee[de]) {
          let Pe;
          const fe = Ee[de];
          if (de === "minute" ? Pe = fe(ze.hour(), Se, P) : de === "second" ? Pe = fe(ze.hour(), ze.minute(), Se, P) : Pe = fe(Se, P), Pe && Pe.length && !Pe.includes(ze[de]())) {
            const nt = Xe ? 0 : Pe.length - 1;
            ze = ze[de](Pe[nt]);
          }
        }
      }), ze;
    }, R = (oe) => oe ? Array.isArray(oe) ? oe.map((ve) => ke(ve, e.format).locale(i.value)) : ke(oe, e.format).locale(i.value) : null, F = (oe) => oe ? Array.isArray(oe) ? oe.map((ve) => ve.format(e.format)) : oe.format(e.format) : null, W = () => {
      if (Array.isArray(Be))
        return Be.map((ve) => ke(ve).locale(i.value));
      const oe = ke(Be).locale(i.value);
      return [oe, oe.add(60, "m")];
    };
    t.emit("set-picker-option", ["formatToString", F]), t.emit("set-picker-option", ["parseUserInput", R]), t.emit("set-picker-option", ["isValidValue", C]), t.emit("set-picker-option", ["handleKeydown", ee]), t.emit("set-picker-option", ["getDefaultValue", W]), t.emit("set-picker-option", [
      "getRangeAvailableTime",
      me
    ]);
    const X = {}, _e = (oe) => {
      X[oe[0]] = oe[1];
    }, Te = Pt("EP_PICKER_BASE"), {
      arrowControl: Ae,
      disabledHours: Ye,
      disabledMinutes: te,
      disabledSeconds: Oe,
      defaultValue: Be
    } = Te.props;
    return {
      arrowControl: Ae,
      onSetOption: _e,
      setMaxSelectionRange: B,
      setMinSelectionRange: I,
      btnConfirmDisabled: D,
      handleCancel: d,
      handleConfirm: T,
      t: n,
      showSeconds: m,
      minDate: a,
      maxDate: o,
      amPmMode: y,
      handleMinChange: O,
      handleMaxChange: x,
      minSelectableRange: w,
      maxSelectableRange: b,
      disabledHours_: ne,
      disabledMinutes_: ae,
      disabledSeconds_: re
    };
  }
});
const yT = {
  key: 0,
  class: "el-time-range-picker el-picker-panel"
}, bT = { class: "el-time-range-picker__content" }, wT = { class: "el-time-range-picker__cell" }, ST = { class: "el-time-range-picker__header" }, _T = { class: "el-time-range-picker__cell" }, kT = { class: "el-time-range-picker__header" }, TT = { class: "el-time-panel__footer" }, DT = ["disabled"];
function CT(e, t, n, i, a, o) {
  const f = yt("time-spinner");
  return e.actualVisible ? (ie(), ue("div", yT, [
    V("div", bT, [
      V("div", wT, [
        V("div", ST, Ie(e.t("el.datepicker.startTime")), 1),
        V("div", {
          class: xe([{ "has-seconds": e.showSeconds, "is-arrow": e.arrowControl }, "el-time-range-picker__body el-time-panel__content"])
        }, [
          at(f, {
            ref: "minSpinner",
            role: "start",
            "show-seconds": e.showSeconds,
            "am-pm-mode": e.amPmMode,
            "arrow-control": e.arrowControl,
            "spinner-date": e.minDate,
            "disabled-hours": e.disabledHours_,
            "disabled-minutes": e.disabledMinutes_,
            "disabled-seconds": e.disabledSeconds_,
            onChange: e.handleMinChange,
            onSetOption: e.onSetOption,
            onSelectRange: e.setMinSelectionRange
          }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2)
      ]),
      V("div", _T, [
        V("div", kT, Ie(e.t("el.datepicker.endTime")), 1),
        V("div", {
          class: xe([{ "has-seconds": e.showSeconds, "is-arrow": e.arrowControl }, "el-time-range-picker__body el-time-panel__content"])
        }, [
          at(f, {
            ref: "maxSpinner",
            role: "end",
            "show-seconds": e.showSeconds,
            "am-pm-mode": e.amPmMode,
            "arrow-control": e.arrowControl,
            "spinner-date": e.maxDate,
            "disabled-hours": e.disabledHours_,
            "disabled-minutes": e.disabledMinutes_,
            "disabled-seconds": e.disabledSeconds_,
            onChange: e.handleMaxChange,
            onSetOption: e.onSetOption,
            onSelectRange: e.setMaxSelectionRange
          }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2)
      ])
    ]),
    V("div", TT, [
      V("button", {
        type: "button",
        class: "el-time-panel__btn cancel",
        onClick: t[0] || (t[0] = (d) => e.handleCancel())
      }, Ie(e.t("el.datepicker.cancel")), 1),
      V("button", {
        type: "button",
        class: "el-time-panel__btn confirm",
        disabled: e.btnConfirmDisabled,
        onClick: t[1] || (t[1] = (d) => e.handleConfirm())
      }, Ie(e.t("el.datepicker.confirm")), 9, DT)
    ])
  ])) : je("v-if", !0);
}
qo.render = CT;
qo.__file = "packages/components/time-picker/src/time-picker-com/panel-time-range.vue";
var OT = Object.defineProperty, MT = Object.defineProperties, $T = Object.getOwnPropertyDescriptors, kf = Object.getOwnPropertySymbols, PT = Object.prototype.hasOwnProperty, AT = Object.prototype.propertyIsEnumerable, Tf = (e, t, n) => t in e ? OT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rs = (e, t) => {
  for (var n in t || (t = {}))
    PT.call(t, n) && Tf(e, n, t[n]);
  if (kf)
    for (var n of kf(t))
      AT.call(t, n) && Tf(e, n, t[n]);
  return e;
}, xs = (e, t) => MT(e, $T(t));
ke.extend(Ec);
var ET = Mt({
  name: "ElTimePicker",
  install: null,
  props: xs(Rs({}, Uo), {
    isRange: {
      type: Boolean,
      default: !1
    }
  }),
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = le(null), i = e.isRange ? "timerange" : "time", a = e.isRange ? qo : Li, o = xs(Rs({}, e), {
      focus: () => {
        var f;
        (f = n.value) == null || f.handleFocus();
      },
      blur: () => {
        var f;
        (f = n.value) == null || f.handleBlur();
      }
    });
    return Vr("ElPopperOptions", e.popperOptions), t.expose(o), () => {
      var f;
      const d = (f = e.format) != null ? f : lo;
      return Pn(ja, xs(Rs({}, e), {
        format: d,
        type: i,
        ref: n,
        "onUpdate:modelValue": (m) => t.emit("update:modelValue", m)
      }), {
        default: (m) => Pn(a, m)
      });
    };
  }
});
const jc = (e) => Array.from(Array(e).keys()), Fc = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(), Hc = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(), Is = ET;
Is.install = (e) => {
  e.component(Is.name, Is);
};
var uo = {}, NT = {
  get exports() {
    return uo;
  },
  set exports(e) {
    uo = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    return function(n, i) {
      var a = i.prototype, o = a.format;
      a.format = function(f) {
        var d = this, m = this.$locale();
        if (!this.isValid())
          return o.bind(this)(f);
        var y = this.$utils(), w = (f || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(b) {
          switch (b) {
            case "Q":
              return Math.ceil((d.$M + 1) / 3);
            case "Do":
              return m.ordinal(d.$D);
            case "gggg":
              return d.weekYear();
            case "GGGG":
              return d.isoWeekYear();
            case "wo":
              return m.ordinal(d.week(), "W");
            case "w":
            case "ww":
              return y.s(d.week(), b === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return y.s(d.isoWeek(), b === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return y.s(String(d.$H === 0 ? 24 : d.$H), b === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(d.$d.getTime() / 1e3);
            case "x":
              return d.$d.getTime();
            case "z":
              return "[" + d.offsetName() + "]";
            case "zzz":
              return "[" + d.offsetName("long") + "]";
            default:
              return b;
          }
        });
        return o.bind(this)(w);
      };
    };
  });
})(NT);
const LT = uo;
var fo = {}, RT = {
  get exports() {
    return fo;
  },
  set exports(e) {
    fo = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    var n = "week", i = "year";
    return function(a, o, f) {
      var d = o.prototype;
      d.week = function(m) {
        if (m === void 0 && (m = null), m !== null)
          return this.add(7 * (m - this.week()), "day");
        var y = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var w = f(this).startOf(i).add(1, i).date(y), b = f(this).endOf(n);
          if (w.isBefore(b))
            return 1;
        }
        var T = f(this).startOf(i).date(y).startOf(n).subtract(1, "millisecond"), O = this.diff(T, n, !0);
        return O < 0 ? f(this).startOf("week").week() : Math.ceil(O);
      }, d.weeks = function(m) {
        return m === void 0 && (m = null), this.week(m);
      };
    };
  });
})(RT);
const xT = fo;
var co = {}, IT = {
  get exports() {
    return co;
  },
  set exports(e) {
    co = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    return function(n, i) {
      i.prototype.weekYear = function() {
        var a = this.month(), o = this.week(), f = this.year();
        return o === 1 && a === 11 ? f + 1 : a === 0 && o >= 52 ? f - 1 : f;
      };
    };
  });
})(IT);
const YT = co;
var ho = {}, jT = {
  get exports() {
    return ho;
  },
  set exports(e) {
    ho = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    return function(n, i, a) {
      i.prototype.dayOfYear = function(o) {
        var f = Math.round((a(this).startOf("day") - a(this).startOf("year")) / 864e5) + 1;
        return o == null ? f : this.add(o - f, "day");
      };
    };
  });
})(jT);
const FT = ho;
var po = {}, HT = {
  get exports() {
    return po;
  },
  set exports(e) {
    po = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    return function(n, i) {
      i.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(HT);
const VT = po;
var mo = {}, WT = {
  get exports() {
    return mo;
  },
  set exports(e) {
    mo = e;
  }
};
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(zt, function() {
    return function(n, i) {
      i.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(WT);
const BT = mo;
var Ha = Mt({
  props: {
    date: {
      type: Object
    },
    minDate: {
      type: Object
    },
    maxDate: {
      type: Object
    },
    parsedValue: {
      type: [Object, Array]
    },
    selectionMode: {
      type: String,
      default: "day"
    },
    showWeekNumber: {
      type: Boolean,
      default: !1
    },
    disabledDate: {
      type: Function
    },
    cellClassName: {
      type: Function
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: !1
      })
    }
  },
  emits: ["changerange", "pick", "select"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = le(null), o = le(null), f = le([[], [], [], [], [], []]), d = e.date.$locale().weekStart || 7, m = e.date.locale("en").localeData().weekdaysShort().map((I) => I.toLowerCase()), y = Z(() => d > 3 ? 7 - d : -d), w = Z(() => {
      const I = e.date.startOf("month");
      return I.subtract(I.day() || 7, "day");
    }), b = Z(() => m.concat(m).slice(d, d + 7)), T = Z(() => {
      var I;
      const A = e.date.startOf("month"), B = A.day() || 7, u = A.daysInMonth(), ee = A.subtract(1, "month").daysInMonth(), ne = y.value, ae = f.value;
      let re = 1;
      const me = e.selectionMode === "dates" ? yi(e.parsedValue) : [], we = ke().locale(i.value).startOf("day");
      for (let U = 0; U < 6; U++) {
        const q = ae[U];
        e.showWeekNumber && (q[0] || (q[0] = {
          type: "week",
          text: w.value.add(U * 7 + 1, "day").week()
        }));
        for (let Y = 0; Y < 7; Y++) {
          let R = q[e.showWeekNumber ? Y + 1 : Y];
          R || (R = {
            row: U,
            column: Y,
            type: "normal",
            inRange: !1,
            start: !1,
            end: !1
          });
          const F = U * 7 + Y, W = w.value.add(F - ne, "day");
          R.type = "normal";
          const X = e.rangeState.endDate || e.maxDate || e.rangeState.selecting && e.minDate;
          if (R.inRange = e.minDate && W.isSameOrAfter(e.minDate, "day") && X && W.isSameOrBefore(X, "day") || e.minDate && W.isSameOrBefore(e.minDate, "day") && X && W.isSameOrAfter(X, "day"), (I = e.minDate) != null && I.isSameOrAfter(X) ? (R.start = X && W.isSame(X, "day"), R.end = e.minDate && W.isSame(e.minDate, "day")) : (R.start = e.minDate && W.isSame(e.minDate, "day"), R.end = X && W.isSame(X, "day")), W.isSame(we, "day") && (R.type = "today"), U >= 0 && U <= 1) {
            const Ae = B + ne < 0 ? 7 + B + ne : B + ne;
            Y + U * 7 >= Ae ? R.text = re++ : (R.text = ee - (Ae - Y % 7) + 1 + U * 7, R.type = "prev-month");
          } else
            re <= u ? R.text = re++ : (R.text = re++ - u, R.type = "next-month");
          const Te = W.toDate();
          R.selected = me.find((Ae) => Ae.valueOf() === W.valueOf()), R.disabled = e.disabledDate && e.disabledDate(Te), R.customClass = e.cellClassName && e.cellClassName(Te), q[e.showWeekNumber ? Y + 1 : Y] = R;
        }
        if (e.selectionMode === "week") {
          const Y = e.showWeekNumber ? 1 : 0, R = e.showWeekNumber ? 7 : 6, F = E(q[Y + 1]);
          q[Y].inRange = F, q[Y].start = F, q[R].inRange = F, q[R].end = F;
        }
      }
      return ae;
    }), O = (I, A) => A ? ke(A).locale(i.value).isSame(e.date.date(Number(I.text)), "day") : !1, x = (I) => {
      const A = [];
      return (I.type === "normal" || I.type === "today") && !I.disabled ? (A.push("available"), I.type === "today" && A.push("today")) : A.push(I.type), e.selectionMode === "day" && (I.type === "normal" || I.type === "today") && O(I, e.parsedValue) && A.push("current"), I.inRange && (I.type === "normal" || I.type === "today" || e.selectionMode === "week") && (A.push("in-range"), I.start && A.push("start-date"), I.end && A.push("end-date")), I.disabled && A.push("disabled"), I.selected && A.push("selected"), I.customClass && A.push(I.customClass), A.join(" ");
    }, C = (I, A) => {
      const B = I * 7 + (A - (e.showWeekNumber ? 1 : 0)) - y.value;
      return w.value.add(B, "day");
    }, $ = (I) => {
      if (!e.rangeState.selecting)
        return;
      let A = I.target;
      if (A.tagName === "SPAN" && (A = A.parentNode.parentNode), A.tagName === "DIV" && (A = A.parentNode), A.tagName !== "TD")
        return;
      const B = A.parentNode.rowIndex - 1, u = A.cellIndex;
      T.value[B][u].disabled || (B !== a.value || u !== o.value) && (a.value = B, o.value = u, t.emit("changerange", {
        selecting: !0,
        endDate: C(B, u)
      }));
    }, D = (I) => {
      let A = I.target;
      if (A.tagName === "SPAN" && (A = A.parentNode.parentNode), A.tagName === "DIV" && (A = A.parentNode), A.tagName !== "TD")
        return;
      const B = A.parentNode.rowIndex - 1, u = A.cellIndex, ee = T.value[B][u];
      if (ee.disabled || ee.type === "week")
        return;
      const ne = C(B, u);
      if (e.selectionMode === "range")
        e.rangeState.selecting ? (ne >= e.minDate ? t.emit("pick", { minDate: e.minDate, maxDate: ne }) : t.emit("pick", { minDate: ne, maxDate: e.minDate }), t.emit("select", !1)) : (t.emit("pick", { minDate: ne, maxDate: null }), t.emit("select", !0));
      else if (e.selectionMode === "day")
        t.emit("pick", ne);
      else if (e.selectionMode === "week") {
        const ae = ne.week(), re = `${ne.year()}w${ae}`;
        t.emit("pick", {
          year: ne.year(),
          week: ae,
          value: re,
          date: ne.startOf("week")
        });
      } else if (e.selectionMode === "dates") {
        const ae = ee.selected ? yi(e.parsedValue).filter((re) => re.valueOf() !== ne.valueOf()) : yi(e.parsedValue).concat([ne]);
        t.emit("pick", ae);
      }
    }, E = (I) => {
      if (e.selectionMode !== "week")
        return !1;
      let A = e.date.startOf("day");
      if (I.type === "prev-month" && (A = A.subtract(1, "month")), I.type === "next-month" && (A = A.add(1, "month")), A = A.date(parseInt(I.text, 10)), e.parsedValue && !Array.isArray(e.parsedValue)) {
        const B = (e.parsedValue.day() - d + 7) % 7 - 1;
        return e.parsedValue.subtract(B, "day").isSame(A, "day");
      }
      return !1;
    };
    return {
      handleMouseMove: $,
      t: n,
      rows: T,
      isWeekActive: E,
      getCellClasses: x,
      WEEKS: b,
      handleClick: D
    };
  }
});
const zT = { key: 0 };
function UT(e, t, n, i, a, o) {
  return ie(), ue("table", {
    cellspacing: "0",
    cellpadding: "0",
    class: xe(["el-date-table", { "is-week-mode": e.selectionMode === "week" }]),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f)),
    onMousemove: t[1] || (t[1] = (...f) => e.handleMouseMove && e.handleMouseMove(...f))
  }, [
    V("tbody", null, [
      V("tr", null, [
        e.showWeekNumber ? (ie(), ue("th", zT, Ie(e.t("el.datepicker.week")), 1)) : je("v-if", !0),
        (ie(!0), ue(gt, null, It(e.WEEKS, (f, d) => (ie(), ue("th", { key: d }, Ie(e.t("el.datepicker.weeks." + f)), 1))), 128))
      ]),
      (ie(!0), ue(gt, null, It(e.rows, (f, d) => (ie(), ue("tr", {
        key: d,
        class: xe(["el-date-table__row", { current: e.isWeekActive(f[1]) }])
      }, [
        (ie(!0), ue(gt, null, It(f, (m, y) => (ie(), ue("td", {
          key: y,
          class: xe(e.getCellClasses(m))
        }, [
          V("div", null, [
            V("span", null, Ie(m.text), 1)
          ])
        ], 2))), 128))
      ], 2))), 128))
    ])
  ], 34);
}
Ha.render = UT;
Ha.__file = "packages/components/date-picker/src/date-picker-com/basic-date-table.vue";
const qT = (e, t, n) => {
  const i = ke().locale(n).startOf("month").month(t).year(e), a = i.daysInMonth();
  return jc(a).map((o) => i.add(o, "day").toDate());
};
var Va = Mt({
  props: {
    disabledDate: {
      type: Function
    },
    selectionMode: {
      type: String,
      default: "month"
    },
    minDate: {
      type: Object
    },
    maxDate: {
      type: Object
    },
    date: {
      type: Object
    },
    parsedValue: {
      type: Object
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: !1
      })
    }
  },
  emits: ["changerange", "pick", "select"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = le(e.date.locale("en").localeData().monthsShort().map((T) => T.toLowerCase())), o = le([[], [], []]), f = le(null), d = le(null), m = Z(() => {
      var T;
      const O = o.value, x = ke().locale(i.value).startOf("month");
      for (let C = 0; C < 3; C++) {
        const $ = O[C];
        for (let D = 0; D < 4; D++) {
          let E = $[D];
          E || (E = {
            row: C,
            column: D,
            type: "normal",
            inRange: !1,
            start: !1,
            end: !1
          }), E.type = "normal";
          const I = C * 4 + D, A = e.date.startOf("year").month(I), B = e.rangeState.endDate || e.maxDate || e.rangeState.selecting && e.minDate;
          E.inRange = e.minDate && A.isSameOrAfter(e.minDate, "month") && B && A.isSameOrBefore(B, "month") || e.minDate && A.isSameOrBefore(e.minDate, "month") && B && A.isSameOrAfter(B, "month"), (T = e.minDate) != null && T.isSameOrAfter(B) ? (E.start = B && A.isSame(B, "month"), E.end = e.minDate && A.isSame(e.minDate, "month")) : (E.start = e.minDate && A.isSame(e.minDate, "month"), E.end = B && A.isSame(B, "month")), x.isSame(A) && (E.type = "today"), E.text = I;
          const ee = A.toDate();
          E.disabled = e.disabledDate && e.disabledDate(ee), $[D] = E;
        }
      }
      return O;
    });
    return {
      handleMouseMove: (T) => {
        if (!e.rangeState.selecting)
          return;
        let O = T.target;
        if (O.tagName === "A" && (O = O.parentNode.parentNode), O.tagName === "DIV" && (O = O.parentNode), O.tagName !== "TD")
          return;
        const x = O.parentNode.rowIndex, C = O.cellIndex;
        m.value[x][C].disabled || (x !== f.value || C !== d.value) && (f.value = x, d.value = C, t.emit("changerange", {
          selecting: !0,
          endDate: e.date.startOf("year").month(x * 4 + C)
        }));
      },
      handleMonthTableClick: (T) => {
        let O = T.target;
        if (O.tagName === "A" && (O = O.parentNode.parentNode), O.tagName === "DIV" && (O = O.parentNode), O.tagName !== "TD" || cc(O, "disabled"))
          return;
        const x = O.cellIndex, $ = O.parentNode.rowIndex * 4 + x, D = e.date.startOf("year").month($);
        e.selectionMode === "range" ? e.rangeState.selecting ? (D >= e.minDate ? t.emit("pick", { minDate: e.minDate, maxDate: D }) : t.emit("pick", { minDate: D, maxDate: e.minDate }), t.emit("select", !1)) : (t.emit("pick", { minDate: D, maxDate: null }), t.emit("select", !0)) : t.emit("pick", $);
      },
      rows: m,
      getCellStyle: (T) => {
        const O = {}, x = e.date.year(), C = new Date(), $ = T.text;
        return O.disabled = e.disabledDate ? qT(x, $, i.value).every(e.disabledDate) : !1, O.current = yi(e.parsedValue).findIndex((D) => D.year() === x && D.month() === $) >= 0, O.today = C.getFullYear() === x && C.getMonth() === $, T.inRange && (O["in-range"] = !0, T.start && (O["start-date"] = !0), T.end && (O["end-date"] = !0)), O;
      },
      t: n,
      months: a
    };
  }
});
const GT = { class: "cell" };
function KT(e, t, n, i, a, o) {
  return ie(), ue("table", {
    class: "el-month-table",
    onClick: t[0] || (t[0] = (...f) => e.handleMonthTableClick && e.handleMonthTableClick(...f)),
    onMousemove: t[1] || (t[1] = (...f) => e.handleMouseMove && e.handleMouseMove(...f))
  }, [
    V("tbody", null, [
      (ie(!0), ue(gt, null, It(e.rows, (f, d) => (ie(), ue("tr", { key: d }, [
        (ie(!0), ue(gt, null, It(f, (m, y) => (ie(), ue("td", {
          key: y,
          class: xe(e.getCellStyle(m))
        }, [
          V("div", null, [
            V("a", GT, Ie(e.t("el.datepicker.months." + e.months[m.text])), 1)
          ])
        ], 2))), 128))
      ]))), 128))
    ])
  ], 32);
}
Va.render = KT;
Va.__file = "packages/components/date-picker/src/date-picker-com/basic-month-table.vue";
const XT = (e, t) => {
  const n = ke(String(e)).locale(t).startOf("year"), a = n.endOf("year").dayOfYear();
  return jc(a).map((o) => n.add(o, "day").toDate());
};
var Go = Mt({
  props: {
    disabledDate: {
      type: Function
    },
    parsedValue: {
      type: Object
    },
    date: {
      type: Object
    }
  },
  emits: ["pick"],
  setup(e, t) {
    const { lang: n } = Un();
    return {
      startYear: Z(() => Math.floor(e.date.year() / 10) * 10),
      getCellStyle: (f) => {
        const d = {}, m = ke().locale(n.value);
        return d.disabled = e.disabledDate ? XT(f, n.value).every(e.disabledDate) : !1, d.current = yi(e.parsedValue).findIndex((y) => y.year() === f) >= 0, d.today = m.year() === f, d;
      },
      handleYearTableClick: (f) => {
        const d = f.target;
        if (d.tagName === "A") {
          if (cc(d.parentNode, "disabled"))
            return;
          const m = d.textContent || d.innerText;
          t.emit("pick", Number(m));
        }
      }
    };
  }
});
const ZT = { class: "cell" }, JT = { class: "cell" }, QT = { class: "cell" }, eD = { class: "cell" }, tD = { class: "cell" }, nD = { class: "cell" }, rD = { class: "cell" }, iD = { class: "cell" }, aD = { class: "cell" }, sD = { class: "cell" }, oD = /* @__PURE__ */ V("td", null, null, -1), lD = /* @__PURE__ */ V("td", null, null, -1);
function uD(e, t, n, i, a, o) {
  return ie(), ue("table", {
    class: "el-year-table",
    onClick: t[0] || (t[0] = (...f) => e.handleYearTableClick && e.handleYearTableClick(...f))
  }, [
    V("tbody", null, [
      V("tr", null, [
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 0)])
        }, [
          V("a", ZT, Ie(e.startYear), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 1)])
        }, [
          V("a", JT, Ie(e.startYear + 1), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 2)])
        }, [
          V("a", QT, Ie(e.startYear + 2), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 3)])
        }, [
          V("a", eD, Ie(e.startYear + 3), 1)
        ], 2)
      ]),
      V("tr", null, [
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 4)])
        }, [
          V("a", tD, Ie(e.startYear + 4), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 5)])
        }, [
          V("a", nD, Ie(e.startYear + 5), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 6)])
        }, [
          V("a", rD, Ie(e.startYear + 6), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 7)])
        }, [
          V("a", iD, Ie(e.startYear + 7), 1)
        ], 2)
      ]),
      V("tr", null, [
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 8)])
        }, [
          V("a", aD, Ie(e.startYear + 8), 1)
        ], 2),
        V("td", {
          class: xe(["available", e.getCellStyle(e.startYear + 9)])
        }, [
          V("a", sD, Ie(e.startYear + 9), 1)
        ], 2),
        oD,
        lD
      ])
    ])
  ]);
}
Go.render = uD;
Go.__file = "packages/components/date-picker/src/date-picker-com/basic-year-table.vue";
const fD = (e, t, n) => !0;
var Ko = Mt({
  components: {
    DateTable: Ha,
    ElInput: Wo,
    ElButton: Ac,
    TimePickPanel: Li,
    MonthTable: Va,
    YearTable: Go
  },
  directives: { clickoutside: Ra },
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    parsedValue: {
      type: [Object, Array]
    },
    format: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      required: !0,
      validator: Nc
    }
  },
  emits: ["pick", "set-picker-option"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = le(ke().locale(i.value)), o = Z(() => a.value.month()), f = Z(() => a.value.year()), d = le([]), m = le(null), y = le(null), w = (ce) => d.value.length > 0 ? fD(ce, d.value, e.format || "HH:mm:ss") : !0, b = (ce) => Pe ? ke(Pe).locale(i.value).year(ce.year()).month(ce.month()).date(ce.date()) : me.value ? ce.millisecond(0) : ce.startOf("day"), T = (ce, ...Fe) => {
      if (!ce)
        t.emit("pick", ce, ...Fe);
      else if (Array.isArray(ce)) {
        const lt = ce.map(b);
        t.emit("pick", lt, ...Fe);
      } else
        t.emit("pick", b(ce), ...Fe);
      m.value = null, y.value = null;
    }, O = (ce) => {
      if (B.value === "day") {
        let Fe = e.parsedValue ? e.parsedValue.year(ce.year()).month(ce.month()).date(ce.date()) : ce;
        w(Fe) || (Fe = d.value[0][0].year(ce.year()).month(ce.month()).date(ce.date())), a.value = Fe, T(Fe, me.value);
      } else
        B.value === "week" ? T(ce.date) : B.value === "dates" && T(ce, !0);
    }, x = () => {
      a.value = a.value.subtract(1, "month");
    }, C = () => {
      a.value = a.value.add(1, "month");
    }, $ = () => {
      E.value === "year" ? a.value = a.value.subtract(10, "year") : a.value = a.value.subtract(1, "year");
    }, D = () => {
      E.value === "year" ? a.value = a.value.add(10, "year") : a.value = a.value.add(1, "year");
    }, E = le("date"), I = Z(() => {
      const ce = n("el.datepicker.year");
      if (E.value === "year") {
        const Fe = Math.floor(f.value / 10) * 10;
        return ce ? `${Fe} ${ce} - ${Fe + 9} ${ce}` : `${Fe} - ${Fe + 9}`;
      }
      return `${f.value} ${ce}`;
    }), A = (ce) => {
      const Fe = typeof ce.value == "function" ? ce.value() : ce.value;
      if (Fe) {
        T(ke(Fe).locale(i.value));
        return;
      }
      ce.onClick && ce.onClick(t);
    }, B = Z(() => ["week", "month", "year", "dates"].includes(e.type) ? e.type : "day");
    Ct(() => B.value, (ce) => {
      if (["month", "year"].includes(ce)) {
        E.value = ce;
        return;
      }
      E.value = "date";
    }, { immediate: !0 });
    const u = Z(() => !!ze.length), ee = (ce) => {
      a.value = a.value.startOf("month").month(ce), B.value === "month" ? T(a.value) : E.value = "date";
    }, ne = (ce) => {
      B.value === "year" ? (a.value = a.value.startOf("year").year(ce), T(a.value)) : (a.value = a.value.year(ce), E.value = "month");
    }, ae = () => {
      E.value = "month";
    }, re = () => {
      E.value = "year";
    }, me = Z(() => e.type === "datetime" || e.type === "datetimerange"), we = Z(() => me.value || B.value === "dates"), U = () => {
      if (B.value === "dates")
        T(e.parsedValue);
      else {
        let ce = e.parsedValue;
        if (!ce) {
          const Fe = ke(Pe).locale(i.value), lt = ve();
          ce = Fe.year(lt.year()).month(lt.month()).date(lt.date());
        }
        a.value = ce, T(ce);
      }
    }, q = () => {
      const Fe = ke().locale(i.value).toDate();
      (!P || !P(Fe)) && w(Fe) && (a.value = ke().locale(i.value), T(a.value));
    }, Y = Z(() => Hc(e.format)), R = Z(() => Fc(e.format)), F = Z(() => {
      if (y.value)
        return y.value;
      if (!(!e.parsedValue && !fe))
        return (e.parsedValue || a.value).format(Y.value);
    }), W = Z(() => {
      if (m.value)
        return m.value;
      if (!(!e.parsedValue && !fe))
        return (e.parsedValue || a.value).format(R.value);
    }), X = le(!1), _e = () => {
      X.value = !0;
    }, Te = () => {
      X.value = !1;
    }, Ae = (ce, Fe, lt) => {
      const rt = e.parsedValue ? e.parsedValue.hour(ce.hour()).minute(ce.minute()).second(ce.second()) : ce;
      a.value = rt, T(a.value, !0), lt || (X.value = Fe);
    }, Ye = (ce) => {
      const Fe = ke(ce, Y.value).locale(i.value);
      Fe.isValid() && w(Fe) && (a.value = Fe.year(a.value.year()).month(a.value.month()).date(a.value.date()), y.value = null, X.value = !1, T(a.value, !0));
    }, te = (ce) => {
      const Fe = ke(ce, R.value).locale(i.value);
      if (Fe.isValid()) {
        if (P && P(Fe.toDate()))
          return;
        a.value = Fe.hour(a.value.hour()).minute(a.value.minute()).second(a.value.second()), m.value = null, T(a.value, !0);
      }
    }, Oe = (ce) => ke.isDayjs(ce) && ce.isValid() && (P ? !P(ce.toDate()) : !0), Be = (ce) => B.value === "dates" ? ce.map((Fe) => Fe.format(e.format)) : ce.format(e.format), oe = (ce) => ke(ce, e.format).locale(i.value), ve = () => ke(fe).locale(i.value), Se = (ce) => {
      const { code: Fe, keyCode: lt } = ce, rt = [
        wt.up,
        wt.down,
        wt.left,
        wt.right
      ];
      e.visible && !X.value && (rt.includes(Fe) && (Ee(lt), ce.stopPropagation(), ce.preventDefault()), Fe === wt.enter && m.value === null && y.value === null && T(a, !1));
    }, Ee = (ce) => {
      const Fe = {
        year: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (rt, _t) => rt.setFullYear(rt.getFullYear() + _t)
        },
        month: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (rt, _t) => rt.setMonth(rt.getMonth() + _t)
        },
        week: {
          38: -1,
          40: 1,
          37: -1,
          39: 1,
          offset: (rt, _t) => rt.setDate(rt.getDate() + _t * 7)
        },
        day: {
          38: -7,
          40: 7,
          37: -1,
          39: 1,
          offset: (rt, _t) => rt.setDate(rt.getDate() + _t)
        }
      }, lt = a.value.toDate();
      for (; Math.abs(a.value.diff(lt, "year", !0)) < 1; ) {
        const rt = Fe[B.value];
        if (rt.offset(lt, rt[ce]), P && P(lt))
          continue;
        const _t = ke(lt).locale(i.value);
        a.value = _t, t.emit("pick", _t, !0);
        break;
      }
    };
    t.emit("set-picker-option", ["isValidValue", Oe]), t.emit("set-picker-option", ["formatToString", Be]), t.emit("set-picker-option", ["parseUserInput", oe]), t.emit("set-picker-option", ["handleKeydown", Se]);
    const Xe = Pt("EP_PICKER_BASE"), {
      shortcuts: ze,
      disabledDate: P,
      cellClassName: de,
      defaultTime: Pe,
      defaultValue: fe,
      arrowControl: nt
    } = Xe.props;
    return Ct(() => e.parsedValue, (ce) => {
      if (ce) {
        if (B.value === "dates" || Array.isArray(ce))
          return;
        a.value = ce;
      } else
        a.value = ve();
    }, { immediate: !0 }), {
      handleTimePick: Ae,
      handleTimePickClose: Te,
      onTimePickerInputFocus: _e,
      timePickerVisible: X,
      visibleTime: F,
      visibleDate: W,
      showTime: me,
      changeToNow: q,
      onConfirm: U,
      footerVisible: we,
      handleYearPick: ne,
      showMonthPicker: ae,
      showYearPicker: re,
      handleMonthPick: ee,
      hasShortcuts: u,
      shortcuts: ze,
      arrowControl: nt,
      disabledDate: P,
      cellClassName: de,
      selectionMode: B,
      handleShortcutClick: A,
      prevYear_: $,
      nextYear_: D,
      prevMonth_: x,
      nextMonth_: C,
      innerDate: a,
      t: n,
      yearLabel: I,
      currentView: E,
      month: o,
      handleDatePick: O,
      handleVisibleTimeChange: Ye,
      handleVisibleDateChange: te,
      timeFormat: Y,
      userInputTime: y,
      userInputDate: m
    };
  }
});
const cD = { class: "el-picker-panel__body-wrapper" }, dD = {
  key: 0,
  class: "el-picker-panel__sidebar"
}, hD = ["onClick"], pD = { class: "el-picker-panel__body" }, mD = {
  key: 0,
  class: "el-date-picker__time-header"
}, vD = { class: "el-date-picker__editor-wrap" }, gD = { class: "el-date-picker__editor-wrap" }, yD = ["aria-label"], bD = ["aria-label"], wD = ["aria-label"], SD = ["aria-label"], _D = { class: "el-picker-panel__content" }, kD = { class: "el-picker-panel__footer" };
function TD(e, t, n, i, a, o) {
  const f = yt("el-input"), d = yt("time-pick-panel"), m = yt("date-table"), y = yt("year-table"), w = yt("month-table"), b = yt("el-button"), T = Da("clickoutside");
  return ie(), ue("div", {
    class: xe(["el-picker-panel el-date-picker", [
      {
        "has-sidebar": e.$slots.sidebar || e.hasShortcuts,
        "has-time": e.showTime
      }
    ]])
  }, [
    V("div", cD, [
      Wt(e.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      e.hasShortcuts ? (ie(), ue("div", dD, [
        (ie(!0), ue(gt, null, It(e.shortcuts, (O, x) => (ie(), ue("button", {
          key: x,
          type: "button",
          class: "el-picker-panel__shortcut",
          onClick: (C) => e.handleShortcutClick(O)
        }, Ie(O.text), 9, hD))), 128))
      ])) : je("v-if", !0),
      V("div", pD, [
        e.showTime ? (ie(), ue("div", mD, [
          V("span", vD, [
            at(f, {
              placeholder: e.t("el.datepicker.selectDate"),
              "model-value": e.visibleDate,
              size: "small",
              onInput: t[0] || (t[0] = (O) => e.userInputDate = O),
              onChange: e.handleVisibleDateChange
            }, null, 8, ["placeholder", "model-value", "onChange"])
          ]),
          Ot(V("span", gD, [
            at(f, {
              placeholder: e.t("el.datepicker.selectTime"),
              "model-value": e.visibleTime,
              size: "small",
              onFocus: e.onTimePickerInputFocus,
              onInput: t[1] || (t[1] = (O) => e.userInputTime = O),
              onChange: e.handleVisibleTimeChange
            }, null, 8, ["placeholder", "model-value", "onFocus", "onChange"]),
            at(d, {
              visible: e.timePickerVisible,
              format: e.timeFormat,
              "time-arrow-control": e.arrowControl,
              "parsed-value": e.innerDate,
              onPick: e.handleTimePick
            }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value", "onPick"])
          ], 512), [
            [T, e.handleTimePickClose]
          ])
        ])) : je("v-if", !0),
        Ot(V("div", {
          class: xe(["el-date-picker__header", {
            "el-date-picker__header--bordered": e.currentView === "year" || e.currentView === "month"
          }])
        }, [
          V("button", {
            type: "button",
            "aria-label": e.t("el.datepicker.prevYear"),
            class: "el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left",
            onClick: t[2] || (t[2] = (...O) => e.prevYear_ && e.prevYear_(...O))
          }, null, 8, yD),
          Ot(V("button", {
            type: "button",
            "aria-label": e.t("el.datepicker.prevMonth"),
            class: "el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left",
            onClick: t[3] || (t[3] = (...O) => e.prevMonth_ && e.prevMonth_(...O))
          }, null, 8, bD), [
            [Mn, e.currentView === "date"]
          ]),
          V("span", {
            role: "button",
            class: "el-date-picker__header-label",
            onClick: t[4] || (t[4] = (...O) => e.showYearPicker && e.showYearPicker(...O))
          }, Ie(e.yearLabel), 1),
          Ot(V("span", {
            role: "button",
            class: xe(["el-date-picker__header-label", { active: e.currentView === "month" }]),
            onClick: t[5] || (t[5] = (...O) => e.showMonthPicker && e.showMonthPicker(...O))
          }, Ie(e.t(`el.datepicker.month${e.month + 1}`)), 3), [
            [Mn, e.currentView === "date"]
          ]),
          V("button", {
            type: "button",
            "aria-label": e.t("el.datepicker.nextYear"),
            class: "el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right",
            onClick: t[6] || (t[6] = (...O) => e.nextYear_ && e.nextYear_(...O))
          }, null, 8, wD),
          Ot(V("button", {
            type: "button",
            "aria-label": e.t("el.datepicker.nextMonth"),
            class: "el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right",
            onClick: t[7] || (t[7] = (...O) => e.nextMonth_ && e.nextMonth_(...O))
          }, null, 8, SD), [
            [Mn, e.currentView === "date"]
          ])
        ], 2), [
          [Mn, e.currentView !== "time"]
        ]),
        V("div", _D, [
          e.currentView === "date" ? (ie(), Sn(m, {
            key: 0,
            "selection-mode": e.selectionMode,
            date: e.innerDate,
            "parsed-value": e.parsedValue,
            "disabled-date": e.disabledDate,
            onPick: e.handleDatePick
          }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "onPick"])) : je("v-if", !0),
          e.currentView === "year" ? (ie(), Sn(y, {
            key: 1,
            date: e.innerDate,
            "disabled-date": e.disabledDate,
            "parsed-value": e.parsedValue,
            onPick: e.handleYearPick
          }, null, 8, ["date", "disabled-date", "parsed-value", "onPick"])) : je("v-if", !0),
          e.currentView === "month" ? (ie(), Sn(w, {
            key: 2,
            date: e.innerDate,
            "parsed-value": e.parsedValue,
            "disabled-date": e.disabledDate,
            onPick: e.handleMonthPick
          }, null, 8, ["date", "parsed-value", "disabled-date", "onPick"])) : je("v-if", !0)
        ])
      ])
    ]),
    Ot(V("div", kD, [
      Ot(at(b, {
        size: "mini",
        type: "text",
        class: "el-picker-panel__link-btn",
        onClick: e.changeToNow
      }, {
        default: Bt(() => [
          nr(Ie(e.t("el.datepicker.now")), 1)
        ]),
        _: 1
      }, 8, ["onClick"]), [
        [Mn, e.selectionMode !== "dates"]
      ]),
      at(b, {
        plain: "",
        size: "mini",
        class: "el-picker-panel__link-btn",
        onClick: e.onConfirm
      }, {
        default: Bt(() => [
          nr(Ie(e.t("el.datepicker.confirm")), 1)
        ]),
        _: 1
      }, 8, ["onClick"])
    ], 512), [
      [Mn, e.footerVisible && e.currentView === "date"]
    ])
  ], 2);
}
Ko.render = TD;
Ko.__file = "packages/components/date-picker/src/date-picker-com/panel-date-pick.vue";
var Xo = Mt({
  directives: { clickoutside: Ra },
  components: { TimePickPanel: Li, DateTable: Ha, ElInput: Wo, ElButton: Ac },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array
    },
    type: {
      type: String,
      required: !0,
      validator: Nc
    }
  },
  emits: ["pick", "set-picker-option", "calendar-change"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = le(ke().locale(i.value)), o = le(ke().locale(i.value).add(1, "month")), f = le(null), d = le(null), m = le({
      min: null,
      max: null
    }), y = le({
      min: null,
      max: null
    }), w = Z(() => `${a.value.year()} ${n("el.datepicker.year")} ${n(`el.datepicker.month${a.value.month() + 1}`)}`), b = Z(() => `${o.value.year()} ${n("el.datepicker.year")} ${n(`el.datepicker.month${o.value.month() + 1}`)}`), T = Z(() => a.value.year()), O = Z(() => a.value.month()), x = Z(() => o.value.year()), C = Z(() => o.value.month()), $ = Z(() => !!_t.length), D = Z(() => m.value.min !== null ? m.value.min : f.value ? f.value.format(u.value) : ""), E = Z(() => m.value.max !== null ? m.value.max : d.value || f.value ? (d.value || f.value).format(u.value) : ""), I = Z(() => y.value.min !== null ? y.value.min : f.value ? f.value.format(B.value) : ""), A = Z(() => y.value.max !== null ? y.value.max : d.value || f.value ? (d.value || f.value).format(B.value) : ""), B = Z(() => Hc($t)), u = Z(() => Fc($t)), ee = () => {
      a.value = a.value.subtract(1, "year"), e.unlinkPanels || (o.value = a.value.add(1, "month"));
    }, ne = () => {
      a.value = a.value.subtract(1, "month"), e.unlinkPanels || (o.value = a.value.add(1, "month"));
    }, ae = () => {
      e.unlinkPanels ? o.value = o.value.add(1, "year") : (a.value = a.value.add(1, "year"), o.value = a.value.add(1, "month"));
    }, re = () => {
      e.unlinkPanels ? o.value = o.value.add(1, "month") : (a.value = a.value.add(1, "month"), o.value = a.value.add(1, "month"));
    }, me = () => {
      a.value = a.value.add(1, "year");
    }, we = () => {
      a.value = a.value.add(1, "month");
    }, U = () => {
      o.value = o.value.subtract(1, "year");
    }, q = () => {
      o.value = o.value.subtract(1, "month");
    }, Y = Z(() => {
      const ye = (O.value + 1) % 12, qe = O.value + 1 >= 12 ? 1 : 0;
      return e.unlinkPanels && new Date(T.value + qe, ye) < new Date(x.value, C.value);
    }), R = Z(() => e.unlinkPanels && x.value * 12 + C.value - (T.value * 12 + O.value + 1) >= 12), F = (ye) => Array.isArray(ye) && ye[0] && ye[1] && ye[0].valueOf() <= ye[1].valueOf(), W = le({
      endDate: null,
      selecting: !1
    }), X = Z(() => !(f.value && d.value && !W.value.selecting && F([f.value, d.value]))), _e = (ye) => {
      W.value = ye;
    }, Te = (ye) => {
      W.value.selecting = ye, ye || (W.value.endDate = null);
    }, Ae = Z(() => e.type === "datetime" || e.type === "datetimerange"), Ye = (ye = !1) => {
      F([f.value, d.value]) && t.emit("pick", [f.value, d.value], ye);
    }, te = (ye, qe) => {
      if (ye)
        return Gt ? ke(Gt[qe] || Gt).locale(i.value).year(ye.year()).month(ye.month()).date(ye.date()) : ye;
    }, Oe = (ye, qe = !0) => {
      const Ue = ye.minDate, pn = ye.maxDate, ar = te(Ue, 0), ri = te(pn, 1);
      d.value === ri && f.value === ar || (t.emit("calendar-change", [Ue.toDate(), pn && pn.toDate()]), d.value = ri, f.value = ar, !(!qe || Ae.value) && Ye());
    }, Be = (ye) => {
      const qe = typeof ye.value == "function" ? ye.value() : ye.value;
      if (qe) {
        t.emit("pick", [
          ke(qe[0]).locale(i.value),
          ke(qe[1]).locale(i.value)
        ]);
        return;
      }
      ye.onClick && ye.onClick(t);
    }, oe = le(!1), ve = le(!1), Se = () => {
      oe.value = !1;
    }, Ee = () => {
      ve.value = !1;
    }, Xe = (ye, qe) => {
      m.value[qe] = ye;
      const Ue = ke(ye, u.value).locale(i.value);
      if (Ue.isValid()) {
        if (rn && rn(Ue.toDate()))
          return;
        qe === "min" ? (a.value = Ue, f.value = (f.value || a.value).year(Ue.year()).month(Ue.month()).date(Ue.date()), e.unlinkPanels || (o.value = Ue.add(1, "month"), d.value = f.value.add(1, "month"))) : (o.value = Ue, d.value = (d.value || o.value).year(Ue.year()).month(Ue.month()).date(Ue.date()), e.unlinkPanels || (a.value = Ue.subtract(1, "month"), f.value = d.value.subtract(1, "month")));
      }
    }, ze = (ye, qe) => {
      m.value[qe] = null;
    }, P = (ye, qe) => {
      y.value[qe] = ye;
      const Ue = ke(ye, B.value).locale(i.value);
      Ue.isValid() && (qe === "min" ? (oe.value = !0, f.value = (f.value || a.value).hour(Ue.hour()).minute(Ue.minute()).second(Ue.second()), (!d.value || d.value.isBefore(f.value)) && (d.value = f.value)) : (ve.value = !0, d.value = (d.value || o.value).hour(Ue.hour()).minute(Ue.minute()).second(Ue.second()), o.value = d.value, d.value && d.value.isBefore(f.value) && (f.value = d.value)));
    }, de = (ye, qe) => {
      y.value[qe] = null, qe === "min" ? (a.value = f.value, oe.value = !1) : (o.value = d.value, ve.value = !1);
    }, Pe = (ye, qe, Ue) => {
      y.value.min || (ye && (a.value = ye, f.value = (f.value || a.value).hour(ye.hour()).minute(ye.minute()).second(ye.second())), Ue || (oe.value = qe), (!d.value || d.value.isBefore(f.value)) && (d.value = f.value, o.value = ye));
    }, fe = (ye, qe, Ue) => {
      y.value.max || (ye && (o.value = ye, d.value = (d.value || o.value).hour(ye.hour()).minute(ye.minute()).second(ye.second())), Ue || (ve.value = qe), d.value && d.value.isBefore(f.value) && (f.value = d.value));
    }, nt = () => {
      a.value = lt()[0], o.value = a.value.add(1, "month"), t.emit("pick", null);
    }, ce = (ye) => Array.isArray(ye) ? ye.map((qe) => qe.format($t)) : ye.format($t), Fe = (ye) => Array.isArray(ye) ? ye.map((qe) => ke(qe, $t).locale(i.value)) : ke(ye, $t).locale(i.value), lt = () => {
      let ye;
      if (Array.isArray(On)) {
        const qe = ke(On[0]);
        let Ue = ke(On[1]);
        return e.unlinkPanels || (Ue = qe.add(1, "month")), [qe, Ue];
      } else
        On ? ye = ke(On) : ye = ke();
      return ye = ye.locale(i.value), [ye, ye.add(1, "month")];
    };
    t.emit("set-picker-option", ["isValidValue", F]), t.emit("set-picker-option", ["parseUserInput", Fe]), t.emit("set-picker-option", ["formatToString", ce]), t.emit("set-picker-option", ["handleClear", nt]);
    const rt = Pt("EP_PICKER_BASE"), {
      shortcuts: _t,
      disabledDate: rn,
      cellClassName: xt,
      format: $t,
      defaultTime: Gt,
      defaultValue: On,
      arrowControl: In,
      clearable: ji
    } = rt.props;
    return Ct(() => e.parsedValue, (ye) => {
      if (ye && ye.length === 2)
        if (f.value = ye[0], d.value = ye[1], a.value = f.value, e.unlinkPanels && d.value) {
          const qe = f.value.year(), Ue = f.value.month(), pn = d.value.year(), ar = d.value.month();
          o.value = qe === pn && Ue === ar ? d.value.add(1, "month") : d.value;
        } else
          o.value = a.value.add(1, "month"), d.value && (o.value = o.value.hour(d.value.hour()).minute(d.value.minute()).second(d.value.second()));
      else {
        const qe = lt();
        f.value = null, d.value = null, a.value = qe[0], o.value = qe[1];
      }
    }, { immediate: !0 }), {
      shortcuts: _t,
      disabledDate: rn,
      cellClassName: xt,
      minTimePickerVisible: oe,
      maxTimePickerVisible: ve,
      handleMinTimeClose: Se,
      handleMaxTimeClose: Ee,
      handleShortcutClick: Be,
      rangeState: W,
      minDate: f,
      maxDate: d,
      handleRangePick: Oe,
      onSelect: Te,
      handleChangeRange: _e,
      btnDisabled: X,
      enableYearArrow: R,
      enableMonthArrow: Y,
      rightPrevMonth: q,
      rightPrevYear: U,
      rightNextMonth: re,
      rightNextYear: ae,
      leftPrevMonth: ne,
      leftPrevYear: ee,
      leftNextMonth: we,
      leftNextYear: me,
      hasShortcuts: $,
      leftLabel: w,
      rightLabel: b,
      leftDate: a,
      rightDate: o,
      showTime: Ae,
      t: n,
      minVisibleDate: D,
      maxVisibleDate: E,
      minVisibleTime: I,
      maxVisibleTime: A,
      arrowControl: In,
      handleDateInput: Xe,
      handleDateChange: ze,
      handleTimeInput: P,
      handleTimeChange: de,
      handleMinTimePick: Pe,
      handleMaxTimePick: fe,
      handleClear: nt,
      handleConfirm: Ye,
      timeFormat: B,
      clearable: ji
    };
  }
});
const DD = { class: "el-picker-panel__body-wrapper" }, CD = {
  key: 0,
  class: "el-picker-panel__sidebar"
}, OD = ["onClick"], MD = { class: "el-picker-panel__body" }, $D = {
  key: 0,
  class: "el-date-range-picker__time-header"
}, PD = { class: "el-date-range-picker__editors-wrap" }, AD = { class: "el-date-range-picker__time-picker-wrap" }, ED = { class: "el-date-range-picker__time-picker-wrap" }, ND = /* @__PURE__ */ V("span", { class: "el-icon-arrow-right" }, null, -1), LD = { class: "el-date-range-picker__editors-wrap is-right" }, RD = { class: "el-date-range-picker__time-picker-wrap" }, xD = { class: "el-date-range-picker__time-picker-wrap" }, ID = { class: "el-picker-panel__content el-date-range-picker__content is-left" }, YD = { class: "el-date-range-picker__header" }, jD = ["disabled"], FD = ["disabled"], HD = { class: "el-picker-panel__content el-date-range-picker__content is-right" }, VD = { class: "el-date-range-picker__header" }, WD = ["disabled"], BD = ["disabled"], zD = {
  key: 0,
  class: "el-picker-panel__footer"
};
function UD(e, t, n, i, a, o) {
  const f = yt("el-input"), d = yt("time-pick-panel"), m = yt("date-table"), y = yt("el-button"), w = Da("clickoutside");
  return ie(), ue("div", {
    class: xe(["el-picker-panel el-date-range-picker", [
      {
        "has-sidebar": e.$slots.sidebar || e.hasShortcuts,
        "has-time": e.showTime
      }
    ]])
  }, [
    V("div", DD, [
      Wt(e.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      e.hasShortcuts ? (ie(), ue("div", CD, [
        (ie(!0), ue(gt, null, It(e.shortcuts, (b, T) => (ie(), ue("button", {
          key: T,
          type: "button",
          class: "el-picker-panel__shortcut",
          onClick: (O) => e.handleShortcutClick(b)
        }, Ie(b.text), 9, OD))), 128))
      ])) : je("v-if", !0),
      V("div", MD, [
        e.showTime ? (ie(), ue("div", $D, [
          V("span", PD, [
            V("span", AD, [
              at(f, {
                size: "small",
                disabled: e.rangeState.selecting,
                placeholder: e.t("el.datepicker.startDate"),
                class: "el-date-range-picker__editor",
                "model-value": e.minVisibleDate,
                onInput: t[0] || (t[0] = (b) => e.handleDateInput(b, "min")),
                onChange: t[1] || (t[1] = (b) => e.handleDateChange(b, "min"))
              }, null, 8, ["disabled", "placeholder", "model-value"])
            ]),
            Ot(V("span", ED, [
              at(f, {
                size: "small",
                class: "el-date-range-picker__editor",
                disabled: e.rangeState.selecting,
                placeholder: e.t("el.datepicker.startTime"),
                "model-value": e.minVisibleTime,
                onFocus: t[2] || (t[2] = (b) => e.minTimePickerVisible = !0),
                onInput: t[3] || (t[3] = (b) => e.handleTimeInput(b, "min")),
                onChange: t[4] || (t[4] = (b) => e.handleTimeChange(b, "min"))
              }, null, 8, ["disabled", "placeholder", "model-value"]),
              at(d, {
                visible: e.minTimePickerVisible,
                format: e.timeFormat,
                "datetime-role": "start",
                "time-arrow-control": e.arrowControl,
                "parsed-value": e.leftDate,
                onPick: e.handleMinTimePick
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value", "onPick"])
            ], 512), [
              [w, e.handleMinTimeClose]
            ])
          ]),
          ND,
          V("span", LD, [
            V("span", RD, [
              at(f, {
                size: "small",
                class: "el-date-range-picker__editor",
                disabled: e.rangeState.selecting,
                placeholder: e.t("el.datepicker.endDate"),
                "model-value": e.maxVisibleDate,
                readonly: !e.minDate,
                onInput: t[5] || (t[5] = (b) => e.handleDateInput(b, "max")),
                onChange: t[6] || (t[6] = (b) => e.handleDateChange(b, "max"))
              }, null, 8, ["disabled", "placeholder", "model-value", "readonly"])
            ]),
            Ot(V("span", xD, [
              at(f, {
                size: "small",
                class: "el-date-range-picker__editor",
                disabled: e.rangeState.selecting,
                placeholder: e.t("el.datepicker.endTime"),
                "model-value": e.maxVisibleTime,
                readonly: !e.minDate,
                onFocus: t[7] || (t[7] = (b) => e.minDate && (e.maxTimePickerVisible = !0)),
                onInput: t[8] || (t[8] = (b) => e.handleTimeInput(b, "max")),
                onChange: t[9] || (t[9] = (b) => e.handleTimeChange(b, "max"))
              }, null, 8, ["disabled", "placeholder", "model-value", "readonly"]),
              at(d, {
                "datetime-role": "end",
                visible: e.maxTimePickerVisible,
                format: e.timeFormat,
                "time-arrow-control": e.arrowControl,
                "parsed-value": e.rightDate,
                onPick: e.handleMaxTimePick
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value", "onPick"])
            ], 512), [
              [w, e.handleMaxTimeClose]
            ])
          ])
        ])) : je("v-if", !0),
        V("div", ID, [
          V("div", YD, [
            V("button", {
              type: "button",
              class: "el-picker-panel__icon-btn el-icon-d-arrow-left",
              onClick: t[10] || (t[10] = (...b) => e.leftPrevYear && e.leftPrevYear(...b))
            }),
            V("button", {
              type: "button",
              class: "el-picker-panel__icon-btn el-icon-arrow-left",
              onClick: t[11] || (t[11] = (...b) => e.leftPrevMonth && e.leftPrevMonth(...b))
            }),
            e.unlinkPanels ? (ie(), ue("button", {
              key: 0,
              type: "button",
              disabled: !e.enableYearArrow,
              class: xe([{ "is-disabled": !e.enableYearArrow }, "el-picker-panel__icon-btn el-icon-d-arrow-right"]),
              onClick: t[12] || (t[12] = (...b) => e.leftNextYear && e.leftNextYear(...b))
            }, null, 10, jD)) : je("v-if", !0),
            e.unlinkPanels ? (ie(), ue("button", {
              key: 1,
              type: "button",
              disabled: !e.enableMonthArrow,
              class: xe([{ "is-disabled": !e.enableMonthArrow }, "el-picker-panel__icon-btn el-icon-arrow-right"]),
              onClick: t[13] || (t[13] = (...b) => e.leftNextMonth && e.leftNextMonth(...b))
            }, null, 10, FD)) : je("v-if", !0),
            V("div", null, Ie(e.leftLabel), 1)
          ]),
          at(m, {
            "selection-mode": "range",
            date: e.leftDate,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "range-state": e.rangeState,
            "disabled-date": e.disabledDate,
            "cell-class-name": e.cellClassName,
            onChangerange: e.handleChangeRange,
            onPick: e.handleRangePick,
            onSelect: e.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onPick", "onSelect"])
        ]),
        V("div", HD, [
          V("div", VD, [
            e.unlinkPanels ? (ie(), ue("button", {
              key: 0,
              type: "button",
              disabled: !e.enableYearArrow,
              class: xe([{ "is-disabled": !e.enableYearArrow }, "el-picker-panel__icon-btn el-icon-d-arrow-left"]),
              onClick: t[14] || (t[14] = (...b) => e.rightPrevYear && e.rightPrevYear(...b))
            }, null, 10, WD)) : je("v-if", !0),
            e.unlinkPanels ? (ie(), ue("button", {
              key: 1,
              type: "button",
              disabled: !e.enableMonthArrow,
              class: xe([{ "is-disabled": !e.enableMonthArrow }, "el-picker-panel__icon-btn el-icon-arrow-left"]),
              onClick: t[15] || (t[15] = (...b) => e.rightPrevMonth && e.rightPrevMonth(...b))
            }, null, 10, BD)) : je("v-if", !0),
            V("button", {
              type: "button",
              class: "el-picker-panel__icon-btn el-icon-d-arrow-right",
              onClick: t[16] || (t[16] = (...b) => e.rightNextYear && e.rightNextYear(...b))
            }),
            V("button", {
              type: "button",
              class: "el-picker-panel__icon-btn el-icon-arrow-right",
              onClick: t[17] || (t[17] = (...b) => e.rightNextMonth && e.rightNextMonth(...b))
            }),
            V("div", null, Ie(e.rightLabel), 1)
          ]),
          at(m, {
            "selection-mode": "range",
            date: e.rightDate,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "range-state": e.rangeState,
            "disabled-date": e.disabledDate,
            "cell-class-name": e.cellClassName,
            onChangerange: e.handleChangeRange,
            onPick: e.handleRangePick,
            onSelect: e.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onPick", "onSelect"])
        ])
      ])
    ]),
    e.showTime ? (ie(), ue("div", zD, [
      e.clearable ? (ie(), Sn(y, {
        key: 0,
        size: "mini",
        type: "text",
        class: "el-picker-panel__link-btn",
        onClick: e.handleClear
      }, {
        default: Bt(() => [
          nr(Ie(e.t("el.datepicker.clear")), 1)
        ]),
        _: 1
      }, 8, ["onClick"])) : je("v-if", !0),
      at(y, {
        plain: "",
        size: "mini",
        class: "el-picker-panel__link-btn",
        disabled: e.btnDisabled,
        onClick: t[18] || (t[18] = (b) => e.handleConfirm(!1))
      }, {
        default: Bt(() => [
          nr(Ie(e.t("el.datepicker.confirm")), 1)
        ]),
        _: 1
      }, 8, ["disabled"])
    ])) : je("v-if", !0)
  ], 2);
}
Xo.render = UD;
Xo.__file = "packages/components/date-picker/src/date-picker-com/panel-date-range.vue";
var Zo = Mt({
  components: { MonthTable: Va },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array
    }
  },
  emits: ["pick", "set-picker-option"],
  setup(e, t) {
    const { t: n, lang: i } = Un(), a = le(ke().locale(i.value)), o = le(ke().locale(i.value).add(1, "year")), f = Z(() => !!we.length), d = (R) => {
      const F = typeof R.value == "function" ? R.value() : R.value;
      if (F) {
        t.emit("pick", [
          ke(F[0]).locale(i.value),
          ke(F[1]).locale(i.value)
        ]);
        return;
      }
      R.onClick && R.onClick(t);
    }, m = () => {
      a.value = a.value.subtract(1, "year"), e.unlinkPanels || (o.value = o.value.subtract(1, "year"));
    }, y = () => {
      e.unlinkPanels || (a.value = a.value.add(1, "year")), o.value = o.value.add(1, "year");
    }, w = () => {
      a.value = a.value.add(1, "year");
    }, b = () => {
      o.value = o.value.subtract(1, "year");
    }, T = Z(() => `${a.value.year()} ${n("el.datepicker.year")}`), O = Z(() => `${o.value.year()} ${n("el.datepicker.year")}`), x = Z(() => a.value.year()), C = Z(() => o.value.year() === a.value.year() ? a.value.year() + 1 : o.value.year()), $ = Z(() => e.unlinkPanels && C.value > x.value + 1), D = le(null), E = le(null), I = le({
      endDate: null,
      selecting: !1
    }), A = (R) => {
      I.value = R;
    }, B = (R, F = !0) => {
      const W = R.minDate, X = R.maxDate;
      E.value === X && D.value === W || (E.value = X, D.value = W, F && ee());
    }, u = (R) => Array.isArray(R) && R && R[0] && R[1] && R[0].valueOf() <= R[1].valueOf(), ee = (R = !1) => {
      u([D.value, E.value]) && t.emit("pick", [D.value, E.value], R);
    }, ne = (R) => {
      I.value.selecting = R, R || (I.value.endDate = null);
    }, ae = (R) => R.map((F) => F.format(q)), re = () => {
      let R;
      if (Array.isArray(Y)) {
        const F = ke(Y[0]);
        let W = ke(Y[1]);
        return e.unlinkPanels || (W = F.add(1, "year")), [F, W];
      } else
        Y ? R = ke(Y) : R = ke();
      return R = R.locale(i.value), [R, R.add(1, "year")];
    };
    t.emit("set-picker-option", ["formatToString", ae]);
    const me = Pt("EP_PICKER_BASE"), { shortcuts: we, disabledDate: U, format: q, defaultValue: Y } = me.props;
    return Ct(() => e.parsedValue, (R) => {
      if (R && R.length === 2)
        if (D.value = R[0], E.value = R[1], a.value = D.value, e.unlinkPanels && E.value) {
          const F = D.value.year(), W = E.value.year();
          o.value = F === W ? E.value.add(1, "year") : E.value;
        } else
          o.value = a.value.add(1, "year");
      else {
        const F = re();
        a.value = F[0], o.value = F[1];
      }
    }, { immediate: !0 }), {
      shortcuts: we,
      disabledDate: U,
      onSelect: ne,
      handleRangePick: B,
      rangeState: I,
      handleChangeRange: A,
      minDate: D,
      maxDate: E,
      enableYearArrow: $,
      leftLabel: T,
      rightLabel: O,
      leftNextYear: w,
      leftPrevYear: m,
      rightNextYear: y,
      rightPrevYear: b,
      t: n,
      leftDate: a,
      rightDate: o,
      hasShortcuts: f,
      handleShortcutClick: d
    };
  }
});
const qD = { class: "el-picker-panel__body-wrapper" }, GD = {
  key: 0,
  class: "el-picker-panel__sidebar"
}, KD = ["onClick"], XD = { class: "el-picker-panel__body" }, ZD = { class: "el-picker-panel__content el-date-range-picker__content is-left" }, JD = { class: "el-date-range-picker__header" }, QD = ["disabled"], eC = { class: "el-picker-panel__content el-date-range-picker__content is-right" }, tC = { class: "el-date-range-picker__header" }, nC = ["disabled"];
function rC(e, t, n, i, a, o) {
  const f = yt("month-table");
  return ie(), ue("div", {
    class: xe(["el-picker-panel el-date-range-picker", [
      {
        "has-sidebar": e.$slots.sidebar || e.hasShortcuts
      }
    ]])
  }, [
    V("div", qD, [
      Wt(e.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      e.hasShortcuts ? (ie(), ue("div", GD, [
        (ie(!0), ue(gt, null, It(e.shortcuts, (d, m) => (ie(), ue("button", {
          key: m,
          type: "button",
          class: "el-picker-panel__shortcut",
          onClick: (y) => e.handleShortcutClick(d)
        }, Ie(d.text), 9, KD))), 128))
      ])) : je("v-if", !0),
      V("div", XD, [
        V("div", ZD, [
          V("div", JD, [
            V("button", {
              type: "button",
              class: "el-picker-panel__icon-btn el-icon-d-arrow-left",
              onClick: t[0] || (t[0] = (...d) => e.leftPrevYear && e.leftPrevYear(...d))
            }),
            e.unlinkPanels ? (ie(), ue("button", {
              key: 0,
              type: "button",
              disabled: !e.enableYearArrow,
              class: xe([{ "is-disabled": !e.enableYearArrow }, "el-picker-panel__icon-btn el-icon-d-arrow-right"]),
              onClick: t[1] || (t[1] = (...d) => e.leftNextYear && e.leftNextYear(...d))
            }, null, 10, QD)) : je("v-if", !0),
            V("div", null, Ie(e.leftLabel), 1)
          ]),
          at(f, {
            "selection-mode": "range",
            date: e.leftDate,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "range-state": e.rangeState,
            "disabled-date": e.disabledDate,
            onChangerange: e.handleChangeRange,
            onPick: e.handleRangePick,
            onSelect: e.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onPick", "onSelect"])
        ]),
        V("div", eC, [
          V("div", tC, [
            e.unlinkPanels ? (ie(), ue("button", {
              key: 0,
              type: "button",
              disabled: !e.enableYearArrow,
              class: xe([{ "is-disabled": !e.enableYearArrow }, "el-picker-panel__icon-btn el-icon-d-arrow-left"]),
              onClick: t[2] || (t[2] = (...d) => e.rightPrevYear && e.rightPrevYear(...d))
            }, null, 10, nC)) : je("v-if", !0),
            V("button", {
              type: "button",
              class: "el-picker-panel__icon-btn el-icon-d-arrow-right",
              onClick: t[3] || (t[3] = (...d) => e.rightNextYear && e.rightNextYear(...d))
            }),
            V("div", null, Ie(e.rightLabel), 1)
          ]),
          at(f, {
            "selection-mode": "range",
            date: e.rightDate,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "range-state": e.rangeState,
            "disabled-date": e.disabledDate,
            onChangerange: e.handleChangeRange,
            onPick: e.handleRangePick,
            onSelect: e.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onPick", "onSelect"])
        ])
      ])
    ])
  ], 2);
}
Zo.render = rC;
Zo.__file = "packages/components/date-picker/src/date-picker-com/panel-month-range.vue";
var iC = Object.defineProperty, aC = Object.defineProperties, sC = Object.getOwnPropertyDescriptors, Df = Object.getOwnPropertySymbols, oC = Object.prototype.hasOwnProperty, lC = Object.prototype.propertyIsEnumerable, Cf = (e, t, n) => t in e ? iC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ys = (e, t) => {
  for (var n in t || (t = {}))
    oC.call(t, n) && Cf(e, n, t[n]);
  if (Df)
    for (var n of Df(t))
      lC.call(t, n) && Cf(e, n, t[n]);
  return e;
}, js = (e, t) => aC(e, sC(t));
ke.extend($_);
ke.extend(LT);
ke.extend(Ec);
ke.extend(xT);
ke.extend(YT);
ke.extend(FT);
ke.extend(VT);
ke.extend(BT);
const uC = function(e) {
  return e === "daterange" || e === "datetimerange" ? Xo : e === "monthrange" ? Zo : Ko;
};
var fC = Mt({
  name: "ElDatePicker",
  install: null,
  props: js(Ys({}, Uo), {
    type: {
      type: String,
      default: "date"
    }
  }),
  emits: ["update:modelValue"],
  setup(e, t) {
    Vr("ElPopperOptions", e.popperOptions);
    const n = le(null), i = js(Ys({}, e), {
      focus: () => {
        var a;
        (a = n.value) == null || a.handleFocus();
      }
    });
    return t.expose(i), () => {
      var a;
      const o = (a = e.format) != null ? a : iT[e.type] || gi;
      return Pn(ja, js(Ys({}, e), {
        format: o,
        type: e.type,
        ref: n,
        "onUpdate:modelValue": (f) => t.emit("update:modelValue", f)
      }), {
        default: (f) => Pn(uC(e.type), f)
      });
    };
  }
});
const ia = fC;
ia.install = (e) => {
  e.component(ia.name, ia);
};
const Vc = ia;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Wc;
function pe() {
  return Wc.apply(null, arguments);
}
function cC(e) {
  Wc = e;
}
function Tn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function br(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Qe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Jo(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Qe(e, t))
      return !1;
  return !0;
}
function Vt(e) {
  return e === void 0;
}
function zn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ri(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Bc(e, t) {
  var n = [], i, a = e.length;
  for (i = 0; i < a; ++i)
    n.push(t(e[i], i));
  return n;
}
function Qn(e, t) {
  for (var n in t)
    Qe(t, n) && (e[n] = t[n]);
  return Qe(t, "toString") && (e.toString = t.toString), Qe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Rn(e, t, n, i) {
  return pd(e, t, n, i, !0).utc();
}
function dC() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function We(e) {
  return e._pf == null && (e._pf = dC()), e._pf;
}
var vo;
Array.prototype.some ? vo = Array.prototype.some : vo = function(e) {
  var t = Object(this), n = t.length >>> 0, i;
  for (i = 0; i < n; i++)
    if (i in t && e.call(this, t[i], i, t))
      return !0;
  return !1;
};
function Qo(e) {
  if (e._isValid == null) {
    var t = We(e), n = vo.call(t.parsedDateParts, function(a) {
      return a != null;
    }), i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (i = i && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = i;
    else
      return i;
  }
  return e._isValid;
}
function Wa(e) {
  var t = Rn(NaN);
  return e != null ? Qn(We(t), e) : We(t).userInvalidated = !0, t;
}
var Of = pe.momentProperties = [], Fs = !1;
function el(e, t) {
  var n, i, a, o = Of.length;
  if (Vt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Vt(t._i) || (e._i = t._i), Vt(t._f) || (e._f = t._f), Vt(t._l) || (e._l = t._l), Vt(t._strict) || (e._strict = t._strict), Vt(t._tzm) || (e._tzm = t._tzm), Vt(t._isUTC) || (e._isUTC = t._isUTC), Vt(t._offset) || (e._offset = t._offset), Vt(t._pf) || (e._pf = We(t)), Vt(t._locale) || (e._locale = t._locale), o > 0)
    for (n = 0; n < o; n++)
      i = Of[n], a = t[i], Vt(a) || (e[i] = a);
  return e;
}
function xi(e) {
  el(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Fs === !1 && (Fs = !0, pe.updateOffset(this), Fs = !1);
}
function Dn(e) {
  return e instanceof xi || e != null && e._isAMomentObject != null;
}
function zc(e) {
  pe.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function dn(e, t) {
  var n = !0;
  return Qn(function() {
    if (pe.deprecationHandler != null && pe.deprecationHandler(null, e), n) {
      var i = [], a, o, f, d = arguments.length;
      for (o = 0; o < d; o++) {
        if (a = "", typeof arguments[o] == "object") {
          a += `
[` + o + "] ";
          for (f in arguments[0])
            Qe(arguments[0], f) && (a += f + ": " + arguments[0][f] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[o];
        i.push(a);
      }
      zc(
        e + `
Arguments: ` + Array.prototype.slice.call(i).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Mf = {};
function Uc(e, t) {
  pe.deprecationHandler != null && pe.deprecationHandler(e, t), Mf[e] || (zc(t), Mf[e] = !0);
}
pe.suppressDeprecationWarnings = !1;
pe.deprecationHandler = null;
function xn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function hC(e) {
  var t, n;
  for (n in e)
    Qe(e, n) && (t = e[n], xn(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function go(e, t) {
  var n = Qn({}, e), i;
  for (i in t)
    Qe(t, i) && (br(e[i]) && br(t[i]) ? (n[i] = {}, Qn(n[i], e[i]), Qn(n[i], t[i])) : t[i] != null ? n[i] = t[i] : delete n[i]);
  for (i in e)
    Qe(e, i) && !Qe(t, i) && br(e[i]) && (n[i] = Qn({}, n[i]));
  return n;
}
function tl(e) {
  e != null && this.set(e);
}
var yo;
Object.keys ? yo = Object.keys : yo = function(e) {
  var t, n = [];
  for (t in e)
    Qe(e, t) && n.push(t);
  return n;
};
var pC = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function mC(e, t, n) {
  var i = this._calendar[e] || this._calendar.sameElse;
  return xn(i) ? i.call(t, n) : i;
}
function En(e, t, n) {
  var i = "" + Math.abs(e), a = t - i.length, o = e >= 0;
  return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i;
}
var nl = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ta = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Hs = {}, Yr = {};
function Me(e, t, n, i) {
  var a = i;
  typeof i == "string" && (a = function() {
    return this[i]();
  }), e && (Yr[e] = a), t && (Yr[t[0]] = function() {
    return En(a.apply(this, arguments), t[1], t[2]);
  }), n && (Yr[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function vC(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function gC(e) {
  var t = e.match(nl), n, i;
  for (n = 0, i = t.length; n < i; n++)
    Yr[t[n]] ? t[n] = Yr[t[n]] : t[n] = vC(t[n]);
  return function(a) {
    var o = "", f;
    for (f = 0; f < i; f++)
      o += xn(t[f]) ? t[f].call(a, e) : t[f];
    return o;
  };
}
function aa(e, t) {
  return e.isValid() ? (t = qc(t, e.localeData()), Hs[t] = Hs[t] || gC(t), Hs[t](e)) : e.localeData().invalidDate();
}
function qc(e, t) {
  var n = 5;
  function i(a) {
    return t.longDateFormat(a) || a;
  }
  for (ta.lastIndex = 0; n >= 0 && ta.test(e); )
    e = e.replace(
      ta,
      i
    ), ta.lastIndex = 0, n -= 1;
  return e;
}
var yC = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function bC(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(nl).map(function(i) {
    return i === "MMMM" || i === "MM" || i === "DD" || i === "dddd" ? i.slice(1) : i;
  }).join(""), this._longDateFormat[e]);
}
var wC = "Invalid date";
function SC() {
  return this._invalidDate;
}
var _C = "%d", kC = /\d{1,2}/;
function TC(e) {
  return this._ordinal.replace("%d", e);
}
var DC = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function CC(e, t, n, i) {
  var a = this._relativeTime[n];
  return xn(a) ? a(e, t, n, i) : a.replace(/%d/i, e);
}
function OC(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return xn(n) ? n(t) : n.replace(/%s/i, t);
}
var _i = {};
function Lt(e, t) {
  var n = e.toLowerCase();
  _i[n] = _i[n + "s"] = _i[t] = e;
}
function hn(e) {
  return typeof e == "string" ? _i[e] || _i[e.toLowerCase()] : void 0;
}
function rl(e) {
  var t = {}, n, i;
  for (i in e)
    Qe(e, i) && (n = hn(i), n && (t[n] = e[i]));
  return t;
}
var Gc = {};
function Rt(e, t) {
  Gc[e] = t;
}
function MC(e) {
  var t = [], n;
  for (n in e)
    Qe(e, n) && t.push({ unit: n, priority: Gc[n] });
  return t.sort(function(i, a) {
    return i.priority - a.priority;
  }), t;
}
function Ba(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function ln(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Ke(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = ln(t)), n;
}
function ti(e, t) {
  return function(n) {
    return n != null ? (Kc(this, e, n), pe.updateOffset(this, t), this) : ga(this, e);
  };
}
function ga(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Kc(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && Ba(e.year()) && e.month() === 1 && e.date() === 29 ? (n = Ke(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    Xa(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function $C(e) {
  return e = hn(e), xn(this[e]) ? this[e]() : this;
}
function PC(e, t) {
  if (typeof e == "object") {
    e = rl(e);
    var n = MC(e), i, a = n.length;
    for (i = 0; i < a; i++)
      this[n[i].unit](e[n[i].unit]);
  } else if (e = hn(e), xn(this[e]))
    return this[e](t);
  return this;
}
var Xc = /\d/, nn = /\d\d/, Zc = /\d{3}/, il = /\d{4}/, za = /[+-]?\d{6}/, ht = /\d\d?/, Jc = /\d\d\d\d?/, Qc = /\d\d\d\d\d\d?/, Ua = /\d{1,3}/, al = /\d{1,4}/, qa = /[+-]?\d{1,6}/, ni = /\d+/, Ga = /[+-]?\d+/, AC = /Z|[+-]\d\d:?\d\d/gi, Ka = /Z|[+-]\d\d(?::?\d\d)?/gi, EC = /[+-]?\d+(\.\d{1,3})?/, Ii = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ya;
ya = {};
function be(e, t, n) {
  ya[e] = xn(t) ? t : function(i, a) {
    return i && n ? n : t;
  };
}
function NC(e, t) {
  return Qe(ya, e) ? ya[e](t._strict, t._locale) : new RegExp(LC(e));
}
function LC(e) {
  return Qt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, i, a, o) {
        return n || i || a || o;
      }
    )
  );
}
function Qt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var bo = {};
function ot(e, t) {
  var n, i = t, a;
  for (typeof e == "string" && (e = [e]), zn(t) && (i = function(o, f) {
    f[t] = Ke(o);
  }), a = e.length, n = 0; n < a; n++)
    bo[e[n]] = i;
}
function Yi(e, t) {
  ot(e, function(n, i, a, o) {
    a._w = a._w || {}, t(n, a._w, a, o);
  });
}
function RC(e, t, n) {
  t != null && Qe(bo, e) && bo[e](t, n._a, n, e);
}
var Nt = 0, Vn = 1, $n = 2, Dt = 3, wn = 4, Wn = 5, gr = 6, xC = 7, IC = 8;
function YC(e, t) {
  return (e % t + t) % t;
}
var bt;
Array.prototype.indexOf ? bt = Array.prototype.indexOf : bt = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Xa(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = YC(t, 12);
  return e += (t - n) / 12, n === 1 ? Ba(e) ? 29 : 28 : 31 - n % 7 % 2;
}
Me("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Me("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Me("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Lt("month", "M");
Rt("month", 8);
be("M", ht);
be("MM", ht, nn);
be("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
be("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
ot(["M", "MM"], function(e, t) {
  t[Vn] = Ke(e) - 1;
});
ot(["MMM", "MMMM"], function(e, t, n, i) {
  var a = n._locale.monthsParse(e, i, n._strict);
  a != null ? t[Vn] = a : We(n).invalidMonth = e;
});
var jC = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ed = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), td = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, FC = Ii, HC = Ii;
function VC(e, t) {
  return e ? Tn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || td).test(t) ? "format" : "standalone"][e.month()] : Tn(this._months) ? this._months : this._months.standalone;
}
function WC(e, t) {
  return e ? Tn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[td.test(t) ? "format" : "standalone"][e.month()] : Tn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function BC(e, t, n) {
  var i, a, o, f = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i)
      o = Rn([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = bt.call(this._shortMonthsParse, f), a !== -1 ? a : null) : (a = bt.call(this._longMonthsParse, f), a !== -1 ? a : null) : t === "MMM" ? (a = bt.call(this._shortMonthsParse, f), a !== -1 ? a : (a = bt.call(this._longMonthsParse, f), a !== -1 ? a : null)) : (a = bt.call(this._longMonthsParse, f), a !== -1 ? a : (a = bt.call(this._shortMonthsParse, f), a !== -1 ? a : null));
}
function zC(e, t, n) {
  var i, a, o;
  if (this._monthsParseExact)
    return BC.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
    if (a = Rn([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[i] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[i] && (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[i].test(e))
      return i;
    if (n && t === "MMM" && this._shortMonthsParse[i].test(e))
      return i;
    if (!n && this._monthsParse[i].test(e))
      return i;
  }
}
function nd(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Ke(t);
    else if (t = e.localeData().monthsParse(t), !zn(t))
      return e;
  }
  return n = Math.min(e.date(), Xa(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function rd(e) {
  return e != null ? (nd(this, e), pe.updateOffset(this, !0), this) : ga(this, "Month");
}
function UC() {
  return Xa(this.year(), this.month());
}
function qC(e) {
  return this._monthsParseExact ? (Qe(this, "_monthsRegex") || id.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Qe(this, "_monthsShortRegex") || (this._monthsShortRegex = FC), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function GC(e) {
  return this._monthsParseExact ? (Qe(this, "_monthsRegex") || id.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Qe(this, "_monthsRegex") || (this._monthsRegex = HC), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function id() {
  function e(f, d) {
    return d.length - f.length;
  }
  var t = [], n = [], i = [], a, o;
  for (a = 0; a < 12; a++)
    o = Rn([2e3, a]), t.push(this.monthsShort(o, "")), n.push(this.months(o, "")), i.push(this.months(o, "")), i.push(this.monthsShort(o, ""));
  for (t.sort(e), n.sort(e), i.sort(e), a = 0; a < 12; a++)
    t[a] = Qt(t[a]), n[a] = Qt(n[a]);
  for (a = 0; a < 24; a++)
    i[a] = Qt(i[a]);
  this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
Me("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? En(e, 4) : "+" + e;
});
Me(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Me(0, ["YYYY", 4], 0, "year");
Me(0, ["YYYYY", 5], 0, "year");
Me(0, ["YYYYYY", 6, !0], 0, "year");
Lt("year", "y");
Rt("year", 1);
be("Y", Ga);
be("YY", ht, nn);
be("YYYY", al, il);
be("YYYYY", qa, za);
be("YYYYYY", qa, za);
ot(["YYYYY", "YYYYYY"], Nt);
ot("YYYY", function(e, t) {
  t[Nt] = e.length === 2 ? pe.parseTwoDigitYear(e) : Ke(e);
});
ot("YY", function(e, t) {
  t[Nt] = pe.parseTwoDigitYear(e);
});
ot("Y", function(e, t) {
  t[Nt] = parseInt(e, 10);
});
function ki(e) {
  return Ba(e) ? 366 : 365;
}
pe.parseTwoDigitYear = function(e) {
  return Ke(e) + (Ke(e) > 68 ? 1900 : 2e3);
};
var ad = ti("FullYear", !0);
function KC() {
  return Ba(this.year());
}
function XC(e, t, n, i, a, o, f) {
  var d;
  return e < 100 && e >= 0 ? (d = new Date(e + 400, t, n, i, a, o, f), isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e, t, n, i, a, o, f), d;
}
function Mi(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function ba(e, t, n) {
  var i = 7 + t - n, a = (7 + Mi(e, 0, i).getUTCDay() - t) % 7;
  return -a + i - 1;
}
function sd(e, t, n, i, a) {
  var o = (7 + n - i) % 7, f = ba(e, i, a), d = 1 + 7 * (t - 1) + o + f, m, y;
  return d <= 0 ? (m = e - 1, y = ki(m) + d) : d > ki(e) ? (m = e + 1, y = d - ki(e)) : (m = e, y = d), {
    year: m,
    dayOfYear: y
  };
}
function $i(e, t, n) {
  var i = ba(e.year(), t, n), a = Math.floor((e.dayOfYear() - i - 1) / 7) + 1, o, f;
  return a < 1 ? (f = e.year() - 1, o = a + Bn(f, t, n)) : a > Bn(e.year(), t, n) ? (o = a - Bn(e.year(), t, n), f = e.year() + 1) : (f = e.year(), o = a), {
    week: o,
    year: f
  };
}
function Bn(e, t, n) {
  var i = ba(e, t, n), a = ba(e + 1, t, n);
  return (ki(e) - i + a) / 7;
}
Me("w", ["ww", 2], "wo", "week");
Me("W", ["WW", 2], "Wo", "isoWeek");
Lt("week", "w");
Lt("isoWeek", "W");
Rt("week", 5);
Rt("isoWeek", 5);
be("w", ht);
be("ww", ht, nn);
be("W", ht);
be("WW", ht, nn);
Yi(
  ["w", "ww", "W", "WW"],
  function(e, t, n, i) {
    t[i.substr(0, 1)] = Ke(e);
  }
);
function ZC(e) {
  return $i(e, this._week.dow, this._week.doy).week;
}
var JC = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function QC() {
  return this._week.dow;
}
function eO() {
  return this._week.doy;
}
function tO(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function nO(e) {
  var t = $i(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Me("d", 0, "do", "day");
Me("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Me("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Me("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Me("e", 0, 0, "weekday");
Me("E", 0, 0, "isoWeekday");
Lt("day", "d");
Lt("weekday", "e");
Lt("isoWeekday", "E");
Rt("day", 11);
Rt("weekday", 11);
Rt("isoWeekday", 11);
be("d", ht);
be("e", ht);
be("E", ht);
be("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
be("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
be("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Yi(["dd", "ddd", "dddd"], function(e, t, n, i) {
  var a = n._locale.weekdaysParse(e, i, n._strict);
  a != null ? t.d = a : We(n).invalidWeekday = e;
});
Yi(["d", "e", "E"], function(e, t, n, i) {
  t[i] = Ke(e);
});
function rO(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function iO(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function sl(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var aO = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), od = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), sO = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), oO = Ii, lO = Ii, uO = Ii;
function fO(e, t) {
  var n = Tn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? sl(n, this._week.dow) : e ? n[e.day()] : n;
}
function cO(e) {
  return e === !0 ? sl(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function dO(e) {
  return e === !0 ? sl(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function hO(e, t, n) {
  var i, a, o, f = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i)
      o = Rn([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(
        o,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(
        o,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (a = bt.call(this._weekdaysParse, f), a !== -1 ? a : null) : t === "ddd" ? (a = bt.call(this._shortWeekdaysParse, f), a !== -1 ? a : null) : (a = bt.call(this._minWeekdaysParse, f), a !== -1 ? a : null) : t === "dddd" ? (a = bt.call(this._weekdaysParse, f), a !== -1 || (a = bt.call(this._shortWeekdaysParse, f), a !== -1) ? a : (a = bt.call(this._minWeekdaysParse, f), a !== -1 ? a : null)) : t === "ddd" ? (a = bt.call(this._shortWeekdaysParse, f), a !== -1 || (a = bt.call(this._weekdaysParse, f), a !== -1) ? a : (a = bt.call(this._minWeekdaysParse, f), a !== -1 ? a : null)) : (a = bt.call(this._minWeekdaysParse, f), a !== -1 || (a = bt.call(this._weekdaysParse, f), a !== -1) ? a : (a = bt.call(this._shortWeekdaysParse, f), a !== -1 ? a : null));
}
function pO(e, t, n) {
  var i, a, o;
  if (this._weekdaysParseExact)
    return hO.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
    if (a = Rn([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[i] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[i] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[i] || (o = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[i].test(e))
      return i;
    if (n && t === "ddd" && this._shortWeekdaysParse[i].test(e))
      return i;
    if (n && t === "dd" && this._minWeekdaysParse[i].test(e))
      return i;
    if (!n && this._weekdaysParse[i].test(e))
      return i;
  }
}
function mO(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = rO(e, this.localeData()), this.add(e - t, "d")) : t;
}
function vO(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function gO(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = iO(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function yO(e) {
  return this._weekdaysParseExact ? (Qe(this, "_weekdaysRegex") || ol.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Qe(this, "_weekdaysRegex") || (this._weekdaysRegex = oO), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function bO(e) {
  return this._weekdaysParseExact ? (Qe(this, "_weekdaysRegex") || ol.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Qe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = lO), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function wO(e) {
  return this._weekdaysParseExact ? (Qe(this, "_weekdaysRegex") || ol.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Qe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = uO), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function ol() {
  function e(w, b) {
    return b.length - w.length;
  }
  var t = [], n = [], i = [], a = [], o, f, d, m, y;
  for (o = 0; o < 7; o++)
    f = Rn([2e3, 1]).day(o), d = Qt(this.weekdaysMin(f, "")), m = Qt(this.weekdaysShort(f, "")), y = Qt(this.weekdays(f, "")), t.push(d), n.push(m), i.push(y), a.push(d), a.push(m), a.push(y);
  t.sort(e), n.sort(e), i.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + i.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ll() {
  return this.hours() % 12 || 12;
}
function SO() {
  return this.hours() || 24;
}
Me("H", ["HH", 2], 0, "hour");
Me("h", ["hh", 2], 0, ll);
Me("k", ["kk", 2], 0, SO);
Me("hmm", 0, 0, function() {
  return "" + ll.apply(this) + En(this.minutes(), 2);
});
Me("hmmss", 0, 0, function() {
  return "" + ll.apply(this) + En(this.minutes(), 2) + En(this.seconds(), 2);
});
Me("Hmm", 0, 0, function() {
  return "" + this.hours() + En(this.minutes(), 2);
});
Me("Hmmss", 0, 0, function() {
  return "" + this.hours() + En(this.minutes(), 2) + En(this.seconds(), 2);
});
function ld(e, t) {
  Me(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ld("a", !0);
ld("A", !1);
Lt("hour", "h");
Rt("hour", 13);
function ud(e, t) {
  return t._meridiemParse;
}
be("a", ud);
be("A", ud);
be("H", ht);
be("h", ht);
be("k", ht);
be("HH", ht, nn);
be("hh", ht, nn);
be("kk", ht, nn);
be("hmm", Jc);
be("hmmss", Qc);
be("Hmm", Jc);
be("Hmmss", Qc);
ot(["H", "HH"], Dt);
ot(["k", "kk"], function(e, t, n) {
  var i = Ke(e);
  t[Dt] = i === 24 ? 0 : i;
});
ot(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
ot(["h", "hh"], function(e, t, n) {
  t[Dt] = Ke(e), We(n).bigHour = !0;
});
ot("hmm", function(e, t, n) {
  var i = e.length - 2;
  t[Dt] = Ke(e.substr(0, i)), t[wn] = Ke(e.substr(i)), We(n).bigHour = !0;
});
ot("hmmss", function(e, t, n) {
  var i = e.length - 4, a = e.length - 2;
  t[Dt] = Ke(e.substr(0, i)), t[wn] = Ke(e.substr(i, 2)), t[Wn] = Ke(e.substr(a)), We(n).bigHour = !0;
});
ot("Hmm", function(e, t, n) {
  var i = e.length - 2;
  t[Dt] = Ke(e.substr(0, i)), t[wn] = Ke(e.substr(i));
});
ot("Hmmss", function(e, t, n) {
  var i = e.length - 4, a = e.length - 2;
  t[Dt] = Ke(e.substr(0, i)), t[wn] = Ke(e.substr(i, 2)), t[Wn] = Ke(e.substr(a));
});
function _O(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var kO = /[ap]\.?m?\.?/i, TO = ti("Hours", !0);
function DO(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var fd = {
  calendar: pC,
  longDateFormat: yC,
  invalidDate: wC,
  ordinal: _C,
  dayOfMonthOrdinalParse: kC,
  relativeTime: DC,
  months: jC,
  monthsShort: ed,
  week: JC,
  weekdays: aO,
  weekdaysMin: sO,
  weekdaysShort: od,
  meridiemParse: kO
}, mt = {}, pi = {}, Pi;
function CO(e, t) {
  var n, i = Math.min(e.length, t.length);
  for (n = 0; n < i; n += 1)
    if (e[n] !== t[n])
      return n;
  return i;
}
function $f(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function OO(e) {
  for (var t = 0, n, i, a, o; t < e.length; ) {
    for (o = $f(e[t]).split("-"), n = o.length, i = $f(e[t + 1]), i = i ? i.split("-") : null; n > 0; ) {
      if (a = Za(o.slice(0, n).join("-")), a)
        return a;
      if (i && i.length >= n && CO(o, i) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Pi;
}
function MO(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Za(e) {
  var t = null, n;
  if (mt[e] === void 0 && typeof module < "u" && module && module.exports && MO(e))
    try {
      t = Pi._abbr, n = require, n("./locale/" + e), tr(t);
    } catch {
      mt[e] = null;
    }
  return mt[e];
}
function tr(e, t) {
  var n;
  return e && (Vt(t) ? n = qn(e) : n = ul(e, t), n ? Pi = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Pi._abbr;
}
function ul(e, t) {
  if (t !== null) {
    var n, i = fd;
    if (t.abbr = e, mt[e] != null)
      Uc(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), i = mt[e]._config;
    else if (t.parentLocale != null)
      if (mt[t.parentLocale] != null)
        i = mt[t.parentLocale]._config;
      else if (n = Za(t.parentLocale), n != null)
        i = n._config;
      else
        return pi[t.parentLocale] || (pi[t.parentLocale] = []), pi[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return mt[e] = new tl(go(i, t)), pi[e] && pi[e].forEach(function(a) {
      ul(a.name, a.config);
    }), tr(e), mt[e];
  } else
    return delete mt[e], null;
}
function $O(e, t) {
  if (t != null) {
    var n, i, a = fd;
    mt[e] != null && mt[e].parentLocale != null ? mt[e].set(go(mt[e]._config, t)) : (i = Za(e), i != null && (a = i._config), t = go(a, t), i == null && (t.abbr = e), n = new tl(t), n.parentLocale = mt[e], mt[e] = n), tr(e);
  } else
    mt[e] != null && (mt[e].parentLocale != null ? (mt[e] = mt[e].parentLocale, e === tr() && tr(e)) : mt[e] != null && delete mt[e]);
  return mt[e];
}
function qn(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Pi;
  if (!Tn(e)) {
    if (t = Za(e), t)
      return t;
    e = [e];
  }
  return OO(e);
}
function PO() {
  return yo(mt);
}
function fl(e) {
  var t, n = e._a;
  return n && We(e).overflow === -2 && (t = n[Vn] < 0 || n[Vn] > 11 ? Vn : n[$n] < 1 || n[$n] > Xa(n[Nt], n[Vn]) ? $n : n[Dt] < 0 || n[Dt] > 24 || n[Dt] === 24 && (n[wn] !== 0 || n[Wn] !== 0 || n[gr] !== 0) ? Dt : n[wn] < 0 || n[wn] > 59 ? wn : n[Wn] < 0 || n[Wn] > 59 ? Wn : n[gr] < 0 || n[gr] > 999 ? gr : -1, We(e)._overflowDayOfYear && (t < Nt || t > $n) && (t = $n), We(e)._overflowWeeks && t === -1 && (t = xC), We(e)._overflowWeekday && t === -1 && (t = IC), We(e).overflow = t), e;
}
var AO = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, EO = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, NO = /Z|[+-]\d\d(?::?\d\d)?/, na = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Vs = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], LO = /^\/?Date\((-?\d+)/i, RO = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, xO = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function cd(e) {
  var t, n, i = e._i, a = AO.exec(i) || EO.exec(i), o, f, d, m, y = na.length, w = Vs.length;
  if (a) {
    for (We(e).iso = !0, t = 0, n = y; t < n; t++)
      if (na[t][1].exec(a[1])) {
        f = na[t][0], o = na[t][2] !== !1;
        break;
      }
    if (f == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = w; t < n; t++)
        if (Vs[t][1].exec(a[3])) {
          d = (a[2] || " ") + Vs[t][0];
          break;
        }
      if (d == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!o && d != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (NO.exec(a[4]))
        m = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = f + (d || "") + (m || ""), dl(e);
  } else
    e._isValid = !1;
}
function IO(e, t, n, i, a, o) {
  var f = [
    YO(e),
    ed.indexOf(t),
    parseInt(n, 10),
    parseInt(i, 10),
    parseInt(a, 10)
  ];
  return o && f.push(parseInt(o, 10)), f;
}
function YO(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function jO(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function FO(e, t, n) {
  if (e) {
    var i = od.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (i !== a)
      return We(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function HO(e, t, n) {
  if (e)
    return xO[e];
  if (t)
    return 0;
  var i = parseInt(n, 10), a = i % 100, o = (i - a) / 100;
  return o * 60 + a;
}
function dd(e) {
  var t = RO.exec(jO(e._i)), n;
  if (t) {
    if (n = IO(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !FO(t[1], n, e))
      return;
    e._a = n, e._tzm = HO(t[8], t[9], t[10]), e._d = Mi.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), We(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function VO(e) {
  var t = LO.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (cd(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (dd(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : pe.createFromInputFallback(e);
}
pe.createFromInputFallback = dn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Nr(e, t, n) {
  return e ?? t ?? n;
}
function WO(e) {
  var t = new Date(pe.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function cl(e) {
  var t, n, i = [], a, o, f;
  if (!e._d) {
    for (a = WO(e), e._w && e._a[$n] == null && e._a[Vn] == null && BO(e), e._dayOfYear != null && (f = Nr(e._a[Nt], a[Nt]), (e._dayOfYear > ki(f) || e._dayOfYear === 0) && (We(e)._overflowDayOfYear = !0), n = Mi(f, 0, e._dayOfYear), e._a[Vn] = n.getUTCMonth(), e._a[$n] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = i[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = i[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Dt] === 24 && e._a[wn] === 0 && e._a[Wn] === 0 && e._a[gr] === 0 && (e._nextDay = !0, e._a[Dt] = 0), e._d = (e._useUTC ? Mi : XC).apply(
      null,
      i
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Dt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (We(e).weekdayMismatch = !0);
  }
}
function BO(e) {
  var t, n, i, a, o, f, d, m, y;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, f = 4, n = Nr(
    t.GG,
    e._a[Nt],
    $i(dt(), 1, 4).year
  ), i = Nr(t.W, 1), a = Nr(t.E, 1), (a < 1 || a > 7) && (m = !0)) : (o = e._locale._week.dow, f = e._locale._week.doy, y = $i(dt(), o, f), n = Nr(t.gg, e._a[Nt], y.year), i = Nr(t.w, y.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (m = !0)) : t.e != null ? (a = t.e + o, (t.e < 0 || t.e > 6) && (m = !0)) : a = o), i < 1 || i > Bn(n, o, f) ? We(e)._overflowWeeks = !0 : m != null ? We(e)._overflowWeekday = !0 : (d = sd(n, i, a, o, f), e._a[Nt] = d.year, e._dayOfYear = d.dayOfYear);
}
pe.ISO_8601 = function() {
};
pe.RFC_2822 = function() {
};
function dl(e) {
  if (e._f === pe.ISO_8601) {
    cd(e);
    return;
  }
  if (e._f === pe.RFC_2822) {
    dd(e);
    return;
  }
  e._a = [], We(e).empty = !0;
  var t = "" + e._i, n, i, a, o, f, d = t.length, m = 0, y, w;
  for (a = qc(e._f, e._locale).match(nl) || [], w = a.length, n = 0; n < w; n++)
    o = a[n], i = (t.match(NC(o, e)) || [])[0], i && (f = t.substr(0, t.indexOf(i)), f.length > 0 && We(e).unusedInput.push(f), t = t.slice(
      t.indexOf(i) + i.length
    ), m += i.length), Yr[o] ? (i ? We(e).empty = !1 : We(e).unusedTokens.push(o), RC(o, i, e)) : e._strict && !i && We(e).unusedTokens.push(o);
  We(e).charsLeftOver = d - m, t.length > 0 && We(e).unusedInput.push(t), e._a[Dt] <= 12 && We(e).bigHour === !0 && e._a[Dt] > 0 && (We(e).bigHour = void 0), We(e).parsedDateParts = e._a.slice(0), We(e).meridiem = e._meridiem, e._a[Dt] = zO(
    e._locale,
    e._a[Dt],
    e._meridiem
  ), y = We(e).era, y !== null && (e._a[Nt] = e._locale.erasConvertYear(y, e._a[Nt])), cl(e), fl(e);
}
function zO(e, t, n) {
  var i;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (i = e.isPM(n), i && t < 12 && (t += 12), !i && t === 12 && (t = 0)), t);
}
function UO(e) {
  var t, n, i, a, o, f, d = !1, m = e._f.length;
  if (m === 0) {
    We(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < m; a++)
    o = 0, f = !1, t = el({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], dl(t), Qo(t) && (f = !0), o += We(t).charsLeftOver, o += We(t).unusedTokens.length * 10, We(t).score = o, d ? o < i && (i = o, n = t) : (i == null || o < i || f) && (i = o, n = t, f && (d = !0));
  Qn(e, n || t);
}
function qO(e) {
  if (!e._d) {
    var t = rl(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Bc(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(i) {
        return i && parseInt(i, 10);
      }
    ), cl(e);
  }
}
function GO(e) {
  var t = new xi(fl(hd(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function hd(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || qn(e._l), t === null || n === void 0 && t === "" ? Wa({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Dn(t) ? new xi(fl(t)) : (Ri(t) ? e._d = t : Tn(n) ? UO(e) : n ? dl(e) : KO(e), Qo(e) || (e._d = null), e));
}
function KO(e) {
  var t = e._i;
  Vt(t) ? e._d = new Date(pe.now()) : Ri(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? VO(e) : Tn(t) ? (e._a = Bc(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), cl(e)) : br(t) ? qO(e) : zn(t) ? e._d = new Date(t) : pe.createFromInputFallback(e);
}
function pd(e, t, n, i, a) {
  var o = {};
  return (t === !0 || t === !1) && (i = t, t = void 0), (n === !0 || n === !1) && (i = n, n = void 0), (br(e) && Jo(e) || Tn(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = e, o._f = t, o._strict = i, GO(o);
}
function dt(e, t, n, i) {
  return pd(e, t, n, i, !1);
}
var XO = dn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = dt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Wa();
  }
), ZO = dn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = dt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Wa();
  }
);
function md(e, t) {
  var n, i;
  if (t.length === 1 && Tn(t[0]) && (t = t[0]), !t.length)
    return dt();
  for (n = t[0], i = 1; i < t.length; ++i)
    (!t[i].isValid() || t[i][e](n)) && (n = t[i]);
  return n;
}
function JO() {
  var e = [].slice.call(arguments, 0);
  return md("isBefore", e);
}
function QO() {
  var e = [].slice.call(arguments, 0);
  return md("isAfter", e);
}
var eM = function() {
  return Date.now ? Date.now() : +new Date();
}, mi = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function tM(e) {
  var t, n = !1, i, a = mi.length;
  for (t in e)
    if (Qe(e, t) && !(bt.call(mi, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (i = 0; i < a; ++i)
    if (e[mi[i]]) {
      if (n)
        return !1;
      parseFloat(e[mi[i]]) !== Ke(e[mi[i]]) && (n = !0);
    }
  return !0;
}
function nM() {
  return this._isValid;
}
function rM() {
  return Cn(NaN);
}
function Ja(e) {
  var t = rl(e), n = t.year || 0, i = t.quarter || 0, a = t.month || 0, o = t.week || t.isoWeek || 0, f = t.day || 0, d = t.hour || 0, m = t.minute || 0, y = t.second || 0, w = t.millisecond || 0;
  this._isValid = tM(t), this._milliseconds = +w + y * 1e3 + // 1000
  m * 6e4 + // 1000 * 60
  d * 1e3 * 60 * 60, this._days = +f + o * 7, this._months = +a + i * 3 + n * 12, this._data = {}, this._locale = qn(), this._bubble();
}
function sa(e) {
  return e instanceof Ja;
}
function wo(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function iM(e, t, n) {
  var i = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), o = 0, f;
  for (f = 0; f < i; f++)
    (n && e[f] !== t[f] || !n && Ke(e[f]) !== Ke(t[f])) && o++;
  return o + a;
}
function vd(e, t) {
  Me(e, 0, 0, function() {
    var n = this.utcOffset(), i = "+";
    return n < 0 && (n = -n, i = "-"), i + En(~~(n / 60), 2) + t + En(~~n % 60, 2);
  });
}
vd("Z", ":");
vd("ZZ", "");
be("Z", Ka);
be("ZZ", Ka);
ot(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = hl(Ka, e);
});
var aM = /([\+\-]|\d\d)/gi;
function hl(e, t) {
  var n = (t || "").match(e), i, a, o;
  return n === null ? null : (i = n[n.length - 1] || [], a = (i + "").match(aM) || ["-", 0, 0], o = +(a[1] * 60) + Ke(a[2]), o === 0 ? 0 : a[0] === "+" ? o : -o);
}
function pl(e, t) {
  var n, i;
  return t._isUTC ? (n = t.clone(), i = (Dn(e) || Ri(e) ? e.valueOf() : dt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), pe.updateOffset(n, !1), n) : dt(e).local();
}
function So(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
pe.updateOffset = function() {
};
function sM(e, t, n) {
  var i = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = hl(Ka, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = So(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), i !== e && (!t || this._changeInProgress ? bd(
      this,
      Cn(e - i, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, pe.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? i : So(this);
}
function oM(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function lM(e) {
  return this.utcOffset(0, e);
}
function uM(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(So(this), "m")), this;
}
function fM() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = hl(AC, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function cM(e) {
  return this.isValid() ? (e = e ? dt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function dM() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function hM() {
  if (!Vt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return el(e, this), e = hd(e), e._a ? (t = e._isUTC ? Rn(e._a) : dt(e._a), this._isDSTShifted = this.isValid() && iM(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function pM() {
  return this.isValid() ? !this._isUTC : !1;
}
function mM() {
  return this.isValid() ? this._isUTC : !1;
}
function gd() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var vM = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, gM = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Cn(e, t) {
  var n = e, i = null, a, o, f;
  return sa(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : zn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (i = vM.exec(e)) ? (a = i[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Ke(i[$n]) * a,
    h: Ke(i[Dt]) * a,
    m: Ke(i[wn]) * a,
    s: Ke(i[Wn]) * a,
    ms: Ke(wo(i[gr] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (i = gM.exec(e)) ? (a = i[1] === "-" ? -1 : 1, n = {
    y: mr(i[2], a),
    M: mr(i[3], a),
    w: mr(i[4], a),
    d: mr(i[5], a),
    h: mr(i[6], a),
    m: mr(i[7], a),
    s: mr(i[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (f = yM(
    dt(n.from),
    dt(n.to)
  ), n = {}, n.ms = f.milliseconds, n.M = f.months), o = new Ja(n), sa(e) && Qe(e, "_locale") && (o._locale = e._locale), sa(e) && Qe(e, "_isValid") && (o._isValid = e._isValid), o;
}
Cn.fn = Ja.prototype;
Cn.invalid = rM;
function mr(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Pf(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function yM(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = pl(t, e), e.isBefore(t) ? n = Pf(e, t) : (n = Pf(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function yd(e, t) {
  return function(n, i) {
    var a, o;
    return i !== null && !isNaN(+i) && (Uc(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = n, n = i, i = o), a = Cn(n, i), bd(this, a, e), this;
  };
}
function bd(e, t, n, i) {
  var a = t._milliseconds, o = wo(t._days), f = wo(t._months);
  e.isValid() && (i = i ?? !0, f && nd(e, ga(e, "Month") + f * n), o && Kc(e, "Date", ga(e, "Date") + o * n), a && e._d.setTime(e._d.valueOf() + a * n), i && pe.updateOffset(e, o || f));
}
var bM = yd(1, "add"), wM = yd(-1, "subtract");
function wd(e) {
  return typeof e == "string" || e instanceof String;
}
function SM(e) {
  return Dn(e) || Ri(e) || wd(e) || zn(e) || kM(e) || _M(e) || e === null || e === void 0;
}
function _M(e) {
  var t = br(e) && !Jo(e), n = !1, i = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, o, f = i.length;
  for (a = 0; a < f; a += 1)
    o = i[a], n = n || Qe(e, o);
  return t && n;
}
function kM(e) {
  var t = Tn(e), n = !1;
  return t && (n = e.filter(function(i) {
    return !zn(i) && wd(e);
  }).length === 0), t && n;
}
function TM(e) {
  var t = br(e) && !Jo(e), n = !1, i = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, o;
  for (a = 0; a < i.length; a += 1)
    o = i[a], n = n || Qe(e, o);
  return t && n;
}
function DM(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function CM(e, t) {
  arguments.length === 1 && (arguments[0] ? SM(arguments[0]) ? (e = arguments[0], t = void 0) : TM(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || dt(), i = pl(n, this).startOf("day"), a = pe.calendarFormat(this, i) || "sameElse", o = t && (xn(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    o || this.localeData().calendar(a, this, dt(n))
  );
}
function OM() {
  return new xi(this);
}
function MM(e, t) {
  var n = Dn(e) ? e : dt(e);
  return this.isValid() && n.isValid() ? (t = hn(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function $M(e, t) {
  var n = Dn(e) ? e : dt(e);
  return this.isValid() && n.isValid() ? (t = hn(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function PM(e, t, n, i) {
  var a = Dn(e) ? e : dt(e), o = Dn(t) ? t : dt(t);
  return this.isValid() && a.isValid() && o.isValid() ? (i = i || "()", (i[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (i[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n))) : !1;
}
function AM(e, t) {
  var n = Dn(e) ? e : dt(e), i;
  return this.isValid() && n.isValid() ? (t = hn(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf())) : !1;
}
function EM(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function NM(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function LM(e, t, n) {
  var i, a, o;
  if (!this.isValid())
    return NaN;
  if (i = pl(e, this), !i.isValid())
    return NaN;
  switch (a = (i.utcOffset() - this.utcOffset()) * 6e4, t = hn(t), t) {
    case "year":
      o = oa(this, i) / 12;
      break;
    case "month":
      o = oa(this, i);
      break;
    case "quarter":
      o = oa(this, i) / 3;
      break;
    case "second":
      o = (this - i) / 1e3;
      break;
    case "minute":
      o = (this - i) / 6e4;
      break;
    case "hour":
      o = (this - i) / 36e5;
      break;
    case "day":
      o = (this - i - a) / 864e5;
      break;
    case "week":
      o = (this - i - a) / 6048e5;
      break;
    default:
      o = this - i;
  }
  return n ? o : ln(o);
}
function oa(e, t) {
  if (e.date() < t.date())
    return -oa(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), i = e.clone().add(n, "months"), a, o;
  return t - i < 0 ? (a = e.clone().add(n - 1, "months"), o = (t - i) / (i - a)) : (a = e.clone().add(n + 1, "months"), o = (t - i) / (a - i)), -(n + o) || 0;
}
pe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
pe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function RM() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function xM(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? aa(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : xn(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", aa(n, "Z")) : aa(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function IM() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, i, a, o;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(n + i + a + o);
}
function YM(e) {
  e || (e = this.isUtc() ? pe.defaultFormatUtc : pe.defaultFormat);
  var t = aa(this, e);
  return this.localeData().postformat(t);
}
function jM(e, t) {
  return this.isValid() && (Dn(e) && e.isValid() || dt(e).isValid()) ? Cn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function FM(e) {
  return this.from(dt(), e);
}
function HM(e, t) {
  return this.isValid() && (Dn(e) && e.isValid() || dt(e).isValid()) ? Cn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function VM(e) {
  return this.to(dt(), e);
}
function Sd(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = qn(e), t != null && (this._locale = t), this);
}
var _d = dn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function kd() {
  return this._locale;
}
var wa = 1e3, jr = 60 * wa, Sa = 60 * jr, Td = (365 * 400 + 97) * 24 * Sa;
function Fr(e, t) {
  return (e % t + t) % t;
}
function Dd(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Td : new Date(e, t, n).valueOf();
}
function Cd(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Td : Date.UTC(e, t, n);
}
function WM(e) {
  var t, n;
  if (e = hn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Cd : Dd, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Fr(
        t + (this._isUTC ? 0 : this.utcOffset() * jr),
        Sa
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Fr(t, jr);
      break;
    case "second":
      t = this._d.valueOf(), t -= Fr(t, wa);
      break;
  }
  return this._d.setTime(t), pe.updateOffset(this, !0), this;
}
function BM(e) {
  var t, n;
  if (e = hn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Cd : Dd, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Sa - Fr(
        t + (this._isUTC ? 0 : this.utcOffset() * jr),
        Sa
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += jr - Fr(t, jr) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += wa - Fr(t, wa) - 1;
      break;
  }
  return this._d.setTime(t), pe.updateOffset(this, !0), this;
}
function zM() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function UM() {
  return Math.floor(this.valueOf() / 1e3);
}
function qM() {
  return new Date(this.valueOf());
}
function GM() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function KM() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function XM() {
  return this.isValid() ? this.toISOString() : null;
}
function ZM() {
  return Qo(this);
}
function JM() {
  return Qn({}, We(this));
}
function QM() {
  return We(this).overflow;
}
function e$() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Me("N", 0, 0, "eraAbbr");
Me("NN", 0, 0, "eraAbbr");
Me("NNN", 0, 0, "eraAbbr");
Me("NNNN", 0, 0, "eraName");
Me("NNNNN", 0, 0, "eraNarrow");
Me("y", ["y", 1], "yo", "eraYear");
Me("y", ["yy", 2], 0, "eraYear");
Me("y", ["yyy", 3], 0, "eraYear");
Me("y", ["yyyy", 4], 0, "eraYear");
be("N", ml);
be("NN", ml);
be("NNN", ml);
be("NNNN", c$);
be("NNNNN", d$);
ot(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, i) {
    var a = n._locale.erasParse(e, i, n._strict);
    a ? We(n).era = a : We(n).invalidEra = e;
  }
);
be("y", ni);
be("yy", ni);
be("yyy", ni);
be("yyyy", ni);
be("yo", h$);
ot(["y", "yy", "yyy", "yyyy"], Nt);
ot(["yo"], function(e, t, n, i) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Nt] = n._locale.eraYearOrdinalParse(e, a) : t[Nt] = parseInt(e, 10);
});
function t$(e, t) {
  var n, i, a, o = this._eras || qn("en")._eras;
  for (n = 0, i = o.length; n < i; ++n) {
    switch (typeof o[n].since) {
      case "string":
        a = pe(o[n].since).startOf("day"), o[n].since = a.valueOf();
        break;
    }
    switch (typeof o[n].until) {
      case "undefined":
        o[n].until = 1 / 0;
        break;
      case "string":
        a = pe(o[n].until).startOf("day").valueOf(), o[n].until = a.valueOf();
        break;
    }
  }
  return o;
}
function n$(e, t, n) {
  var i, a, o = this.eras(), f, d, m;
  for (e = e.toUpperCase(), i = 0, a = o.length; i < a; ++i)
    if (f = o[i].name.toUpperCase(), d = o[i].abbr.toUpperCase(), m = o[i].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (d === e)
            return o[i];
          break;
        case "NNNN":
          if (f === e)
            return o[i];
          break;
        case "NNNNN":
          if (m === e)
            return o[i];
          break;
      }
    else if ([f, d, m].indexOf(e) >= 0)
      return o[i];
}
function r$(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? pe(e.since).year() : pe(e.since).year() + (t - e.offset) * n;
}
function i$() {
  var e, t, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return i[e].name;
  return "";
}
function a$() {
  var e, t, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return i[e].narrow;
  return "";
}
function s$() {
  var e, t, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return i[e].abbr;
  return "";
}
function o$() {
  var e, t, n, i, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, i = this.clone().startOf("day").valueOf(), a[e].since <= i && i <= a[e].until || a[e].until <= i && i <= a[e].since)
      return (this.year() - pe(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function l$(e) {
  return Qe(this, "_erasNameRegex") || vl.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function u$(e) {
  return Qe(this, "_erasAbbrRegex") || vl.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function f$(e) {
  return Qe(this, "_erasNarrowRegex") || vl.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ml(e, t) {
  return t.erasAbbrRegex(e);
}
function c$(e, t) {
  return t.erasNameRegex(e);
}
function d$(e, t) {
  return t.erasNarrowRegex(e);
}
function h$(e, t) {
  return t._eraYearOrdinalRegex || ni;
}
function vl() {
  var e = [], t = [], n = [], i = [], a, o, f = this.eras();
  for (a = 0, o = f.length; a < o; ++a)
    t.push(Qt(f[a].name)), e.push(Qt(f[a].abbr)), n.push(Qt(f[a].narrow)), i.push(Qt(f[a].name)), i.push(Qt(f[a].abbr)), i.push(Qt(f[a].narrow));
  this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
Me(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Me(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Qa(e, t) {
  Me(0, [e, e.length], 0, t);
}
Qa("gggg", "weekYear");
Qa("ggggg", "weekYear");
Qa("GGGG", "isoWeekYear");
Qa("GGGGG", "isoWeekYear");
Lt("weekYear", "gg");
Lt("isoWeekYear", "GG");
Rt("weekYear", 1);
Rt("isoWeekYear", 1);
be("G", Ga);
be("g", Ga);
be("GG", ht, nn);
be("gg", ht, nn);
be("GGGG", al, il);
be("gggg", al, il);
be("GGGGG", qa, za);
be("ggggg", qa, za);
Yi(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, i) {
    t[i.substr(0, 2)] = Ke(e);
  }
);
Yi(["gg", "GG"], function(e, t, n, i) {
  t[i] = pe.parseTwoDigitYear(e);
});
function p$(e) {
  return Od.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function m$(e) {
  return Od.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function v$() {
  return Bn(this.year(), 1, 4);
}
function g$() {
  return Bn(this.isoWeekYear(), 1, 4);
}
function y$() {
  var e = this.localeData()._week;
  return Bn(this.year(), e.dow, e.doy);
}
function b$() {
  var e = this.localeData()._week;
  return Bn(this.weekYear(), e.dow, e.doy);
}
function Od(e, t, n, i, a) {
  var o;
  return e == null ? $i(this, i, a).year : (o = Bn(e, i, a), t > o && (t = o), w$.call(this, e, t, n, i, a));
}
function w$(e, t, n, i, a) {
  var o = sd(e, t, n, i, a), f = Mi(o.year, 0, o.dayOfYear);
  return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this;
}
Me("Q", 0, "Qo", "quarter");
Lt("quarter", "Q");
Rt("quarter", 7);
be("Q", Xc);
ot("Q", function(e, t) {
  t[Vn] = (Ke(e) - 1) * 3;
});
function S$(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Me("D", ["DD", 2], "Do", "date");
Lt("date", "D");
Rt("date", 9);
be("D", ht);
be("DD", ht, nn);
be("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
ot(["D", "DD"], $n);
ot("Do", function(e, t) {
  t[$n] = Ke(e.match(ht)[0]);
});
var Md = ti("Date", !0);
Me("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Lt("dayOfYear", "DDD");
Rt("dayOfYear", 4);
be("DDD", Ua);
be("DDDD", Zc);
ot(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Ke(e);
});
function _$(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Me("m", ["mm", 2], 0, "minute");
Lt("minute", "m");
Rt("minute", 14);
be("m", ht);
be("mm", ht, nn);
ot(["m", "mm"], wn);
var k$ = ti("Minutes", !1);
Me("s", ["ss", 2], 0, "second");
Lt("second", "s");
Rt("second", 15);
be("s", ht);
be("ss", ht, nn);
ot(["s", "ss"], Wn);
var T$ = ti("Seconds", !1);
Me("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Me(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Me(0, ["SSS", 3], 0, "millisecond");
Me(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Me(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Me(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Me(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Me(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Me(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Lt("millisecond", "ms");
Rt("millisecond", 16);
be("S", Ua, Xc);
be("SS", Ua, nn);
be("SSS", Ua, Zc);
var er, $d;
for (er = "SSSS"; er.length <= 9; er += "S")
  be(er, ni);
function D$(e, t) {
  t[gr] = Ke(("0." + e) * 1e3);
}
for (er = "S"; er.length <= 9; er += "S")
  ot(er, D$);
$d = ti("Milliseconds", !1);
Me("z", 0, 0, "zoneAbbr");
Me("zz", 0, 0, "zoneName");
function C$() {
  return this._isUTC ? "UTC" : "";
}
function O$() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var se = xi.prototype;
se.add = bM;
se.calendar = CM;
se.clone = OM;
se.diff = LM;
se.endOf = BM;
se.format = YM;
se.from = jM;
se.fromNow = FM;
se.to = HM;
se.toNow = VM;
se.get = $C;
se.invalidAt = QM;
se.isAfter = MM;
se.isBefore = $M;
se.isBetween = PM;
se.isSame = AM;
se.isSameOrAfter = EM;
se.isSameOrBefore = NM;
se.isValid = ZM;
se.lang = _d;
se.locale = Sd;
se.localeData = kd;
se.max = ZO;
se.min = XO;
se.parsingFlags = JM;
se.set = PC;
se.startOf = WM;
se.subtract = wM;
se.toArray = GM;
se.toObject = KM;
se.toDate = qM;
se.toISOString = xM;
se.inspect = IM;
typeof Symbol < "u" && Symbol.for != null && (se[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
se.toJSON = XM;
se.toString = RM;
se.unix = UM;
se.valueOf = zM;
se.creationData = e$;
se.eraName = i$;
se.eraNarrow = a$;
se.eraAbbr = s$;
se.eraYear = o$;
se.year = ad;
se.isLeapYear = KC;
se.weekYear = p$;
se.isoWeekYear = m$;
se.quarter = se.quarters = S$;
se.month = rd;
se.daysInMonth = UC;
se.week = se.weeks = tO;
se.isoWeek = se.isoWeeks = nO;
se.weeksInYear = y$;
se.weeksInWeekYear = b$;
se.isoWeeksInYear = v$;
se.isoWeeksInISOWeekYear = g$;
se.date = Md;
se.day = se.days = mO;
se.weekday = vO;
se.isoWeekday = gO;
se.dayOfYear = _$;
se.hour = se.hours = TO;
se.minute = se.minutes = k$;
se.second = se.seconds = T$;
se.millisecond = se.milliseconds = $d;
se.utcOffset = sM;
se.utc = lM;
se.local = uM;
se.parseZone = fM;
se.hasAlignedHourOffset = cM;
se.isDST = dM;
se.isLocal = pM;
se.isUtcOffset = mM;
se.isUtc = gd;
se.isUTC = gd;
se.zoneAbbr = C$;
se.zoneName = O$;
se.dates = dn(
  "dates accessor is deprecated. Use date instead.",
  Md
);
se.months = dn(
  "months accessor is deprecated. Use month instead",
  rd
);
se.years = dn(
  "years accessor is deprecated. Use year instead",
  ad
);
se.zone = dn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  oM
);
se.isDSTShifted = dn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  hM
);
function M$(e) {
  return dt(e * 1e3);
}
function $$() {
  return dt.apply(null, arguments).parseZone();
}
function Pd(e) {
  return e;
}
var et = tl.prototype;
et.calendar = mC;
et.longDateFormat = bC;
et.invalidDate = SC;
et.ordinal = TC;
et.preparse = Pd;
et.postformat = Pd;
et.relativeTime = CC;
et.pastFuture = OC;
et.set = hC;
et.eras = t$;
et.erasParse = n$;
et.erasConvertYear = r$;
et.erasAbbrRegex = u$;
et.erasNameRegex = l$;
et.erasNarrowRegex = f$;
et.months = VC;
et.monthsShort = WC;
et.monthsParse = zC;
et.monthsRegex = GC;
et.monthsShortRegex = qC;
et.week = ZC;
et.firstDayOfYear = eO;
et.firstDayOfWeek = QC;
et.weekdays = fO;
et.weekdaysMin = dO;
et.weekdaysShort = cO;
et.weekdaysParse = pO;
et.weekdaysRegex = yO;
et.weekdaysShortRegex = bO;
et.weekdaysMinRegex = wO;
et.isPM = _O;
et.meridiem = DO;
function _a(e, t, n, i) {
  var a = qn(), o = Rn().set(i, t);
  return a[n](o, e);
}
function Ad(e, t, n) {
  if (zn(e) && (t = e, e = void 0), e = e || "", t != null)
    return _a(e, t, n, "month");
  var i, a = [];
  for (i = 0; i < 12; i++)
    a[i] = _a(e, i, n, "month");
  return a;
}
function gl(e, t, n, i) {
  typeof e == "boolean" ? (zn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, zn(t) && (n = t, t = void 0), t = t || "");
  var a = qn(), o = e ? a._week.dow : 0, f, d = [];
  if (n != null)
    return _a(t, (n + o) % 7, i, "day");
  for (f = 0; f < 7; f++)
    d[f] = _a(t, (f + o) % 7, i, "day");
  return d;
}
function P$(e, t) {
  return Ad(e, t, "months");
}
function A$(e, t) {
  return Ad(e, t, "monthsShort");
}
function E$(e, t, n) {
  return gl(e, t, n, "weekdays");
}
function N$(e, t, n) {
  return gl(e, t, n, "weekdaysShort");
}
function L$(e, t, n) {
  return gl(e, t, n, "weekdaysMin");
}
tr("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = Ke(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
pe.lang = dn(
  "moment.lang is deprecated. Use moment.locale instead.",
  tr
);
pe.langData = dn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  qn
);
var Fn = Math.abs;
function R$() {
  var e = this._data;
  return this._milliseconds = Fn(this._milliseconds), this._days = Fn(this._days), this._months = Fn(this._months), e.milliseconds = Fn(e.milliseconds), e.seconds = Fn(e.seconds), e.minutes = Fn(e.minutes), e.hours = Fn(e.hours), e.months = Fn(e.months), e.years = Fn(e.years), this;
}
function Ed(e, t, n, i) {
  var a = Cn(t, n);
  return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble();
}
function x$(e, t) {
  return Ed(this, e, t, 1);
}
function I$(e, t) {
  return Ed(this, e, t, -1);
}
function Af(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Y$() {
  var e = this._milliseconds, t = this._days, n = this._months, i = this._data, a, o, f, d, m;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Af(_o(n) + t) * 864e5, t = 0, n = 0), i.milliseconds = e % 1e3, a = ln(e / 1e3), i.seconds = a % 60, o = ln(a / 60), i.minutes = o % 60, f = ln(o / 60), i.hours = f % 24, t += ln(f / 24), m = ln(Nd(t)), n += m, t -= Af(_o(m)), d = ln(n / 12), n %= 12, i.days = t, i.months = n, i.years = d, this;
}
function Nd(e) {
  return e * 4800 / 146097;
}
function _o(e) {
  return e * 146097 / 4800;
}
function j$(e) {
  if (!this.isValid())
    return NaN;
  var t, n, i = this._milliseconds;
  if (e = hn(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + i / 864e5, n = this._months + Nd(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(_o(this._months)), e) {
      case "week":
        return t / 7 + i / 6048e5;
      case "day":
        return t + i / 864e5;
      case "hour":
        return t * 24 + i / 36e5;
      case "minute":
        return t * 1440 + i / 6e4;
      case "second":
        return t * 86400 + i / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + i;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function F$() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Ke(this._months / 12) * 31536e6 : NaN;
}
function Gn(e) {
  return function() {
    return this.as(e);
  };
}
var H$ = Gn("ms"), V$ = Gn("s"), W$ = Gn("m"), B$ = Gn("h"), z$ = Gn("d"), U$ = Gn("w"), q$ = Gn("M"), G$ = Gn("Q"), K$ = Gn("y");
function X$() {
  return Cn(this);
}
function Z$(e) {
  return e = hn(e), this.isValid() ? this[e + "s"]() : NaN;
}
function kr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var J$ = kr("milliseconds"), Q$ = kr("seconds"), eP = kr("minutes"), tP = kr("hours"), nP = kr("days"), rP = kr("months"), iP = kr("years");
function aP() {
  return ln(this.days() / 7);
}
var Hn = Math.round, Rr = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function sP(e, t, n, i, a) {
  return a.relativeTime(t || 1, !!n, e, i);
}
function oP(e, t, n, i) {
  var a = Cn(e).abs(), o = Hn(a.as("s")), f = Hn(a.as("m")), d = Hn(a.as("h")), m = Hn(a.as("d")), y = Hn(a.as("M")), w = Hn(a.as("w")), b = Hn(a.as("y")), T = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || f <= 1 && ["m"] || f < n.m && ["mm", f] || d <= 1 && ["h"] || d < n.h && ["hh", d] || m <= 1 && ["d"] || m < n.d && ["dd", m];
  return n.w != null && (T = T || w <= 1 && ["w"] || w < n.w && ["ww", w]), T = T || y <= 1 && ["M"] || y < n.M && ["MM", y] || b <= 1 && ["y"] || ["yy", b], T[2] = t, T[3] = +e > 0, T[4] = i, sP.apply(null, T);
}
function lP(e) {
  return e === void 0 ? Hn : typeof e == "function" ? (Hn = e, !0) : !1;
}
function uP(e, t) {
  return Rr[e] === void 0 ? !1 : t === void 0 ? Rr[e] : (Rr[e] = t, e === "s" && (Rr.ss = t - 1), !0);
}
function fP(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, i = Rr, a, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (i = Object.assign({}, Rr, t), t.s != null && t.ss == null && (i.ss = t.s - 1)), a = this.localeData(), o = oP(this, !n, i, a), n && (o = a.pastFuture(+this, o)), a.postformat(o);
}
var Ws = Math.abs;
function Ar(e) {
  return (e > 0) - (e < 0) || +e;
}
function es() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ws(this._milliseconds) / 1e3, t = Ws(this._days), n = Ws(this._months), i, a, o, f, d = this.asSeconds(), m, y, w, b;
  return d ? (i = ln(e / 60), a = ln(i / 60), e %= 60, i %= 60, o = ln(n / 12), n %= 12, f = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", m = d < 0 ? "-" : "", y = Ar(this._months) !== Ar(d) ? "-" : "", w = Ar(this._days) !== Ar(d) ? "-" : "", b = Ar(this._milliseconds) !== Ar(d) ? "-" : "", m + "P" + (o ? y + o + "Y" : "") + (n ? y + n + "M" : "") + (t ? w + t + "D" : "") + (a || i || e ? "T" : "") + (a ? b + a + "H" : "") + (i ? b + i + "M" : "") + (e ? b + f + "S" : "")) : "P0D";
}
var Ze = Ja.prototype;
Ze.isValid = nM;
Ze.abs = R$;
Ze.add = x$;
Ze.subtract = I$;
Ze.as = j$;
Ze.asMilliseconds = H$;
Ze.asSeconds = V$;
Ze.asMinutes = W$;
Ze.asHours = B$;
Ze.asDays = z$;
Ze.asWeeks = U$;
Ze.asMonths = q$;
Ze.asQuarters = G$;
Ze.asYears = K$;
Ze.valueOf = F$;
Ze._bubble = Y$;
Ze.clone = X$;
Ze.get = Z$;
Ze.milliseconds = J$;
Ze.seconds = Q$;
Ze.minutes = eP;
Ze.hours = tP;
Ze.days = nP;
Ze.weeks = aP;
Ze.months = rP;
Ze.years = iP;
Ze.humanize = fP;
Ze.toISOString = es;
Ze.toString = es;
Ze.toJSON = es;
Ze.locale = Sd;
Ze.localeData = kd;
Ze.toIsoString = dn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  es
);
Ze.lang = _d;
Me("X", 0, 0, "unix");
Me("x", 0, 0, "valueOf");
be("x", Ga);
be("X", EC);
ot("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
ot("x", function(e, t, n) {
  n._d = new Date(Ke(e));
});
//! moment.js
pe.version = "2.29.4";
cC(dt);
pe.fn = se;
pe.min = JO;
pe.max = QO;
pe.now = eM;
pe.utc = Rn;
pe.unix = M$;
pe.months = P$;
pe.isDate = Ri;
pe.locale = tr;
pe.invalid = Wa;
pe.duration = Cn;
pe.isMoment = Dn;
pe.weekdays = E$;
pe.parseZone = $$;
pe.localeData = qn;
pe.isDuration = sa;
pe.monthsShort = A$;
pe.weekdaysMin = L$;
pe.defineLocale = ul;
pe.updateLocale = $O;
pe.locales = PO;
pe.weekdaysShort = N$;
pe.normalizeUnits = hn;
pe.relativeTimeRounding = lP;
pe.relativeTimeThreshold = uP;
pe.calendarFormat = DM;
pe.prototype = se;
pe.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
var ko = {}, cP = {
  get exports() {
    return ko;
  },
  set exports(e) {
    ko = e;
  }
};
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
(function(e) {
  (function(t, n) {
    e.exports = t.document ? n(t, !0) : function(i) {
      if (!i.document)
        throw new Error("jQuery requires a window with a document");
      return n(i);
    };
  })(typeof window < "u" ? window : zt, function(t, n) {
    var i = [], a = Object.getPrototypeOf, o = i.slice, f = i.flat ? function(r) {
      return i.flat.call(r);
    } : function(r) {
      return i.concat.apply([], r);
    }, d = i.push, m = i.indexOf, y = {}, w = y.toString, b = y.hasOwnProperty, T = b.toString, O = T.call(Object), x = {}, C = function(s) {
      return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function";
    }, $ = function(s) {
      return s != null && s === s.window;
    }, D = t.document, E = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function I(r, s, l) {
      l = l || D;
      var c, h, p = l.createElement("script");
      if (p.text = r, s)
        for (c in E)
          h = s[c] || s.getAttribute && s.getAttribute(c), h && p.setAttribute(c, h);
      l.head.appendChild(p).parentNode.removeChild(p);
    }
    function A(r) {
      return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? y[w.call(r)] || "object" : typeof r;
    }
    var B = "3.6.3", u = function(r, s) {
      return new u.fn.init(r, s);
    };
    u.fn = u.prototype = {
      // The current version of jQuery being used
      jquery: B,
      constructor: u,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return o.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(r) {
        return r == null ? o.call(this) : r < 0 ? this[r + this.length] : this[r];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(r) {
        var s = u.merge(this.constructor(), r);
        return s.prevObject = this, s;
      },
      // Execute a callback for every element in the matched set.
      each: function(r) {
        return u.each(this, r);
      },
      map: function(r) {
        return this.pushStack(u.map(this, function(s, l) {
          return r.call(s, l, s);
        }));
      },
      slice: function() {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(u.grep(this, function(r, s) {
          return (s + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(u.grep(this, function(r, s) {
          return s % 2;
        }));
      },
      eq: function(r) {
        var s = this.length, l = +r + (r < 0 ? s : 0);
        return this.pushStack(l >= 0 && l < s ? [this[l]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: d,
      sort: i.sort,
      splice: i.splice
    }, u.extend = u.fn.extend = function() {
      var r, s, l, c, h, p, v = arguments[0] || {}, k = 1, S = arguments.length, L = !1;
      for (typeof v == "boolean" && (L = v, v = arguments[k] || {}, k++), typeof v != "object" && !C(v) && (v = {}), k === S && (v = this, k--); k < S; k++)
        if ((r = arguments[k]) != null)
          for (s in r)
            c = r[s], !(s === "__proto__" || v === c) && (L && c && (u.isPlainObject(c) || (h = Array.isArray(c))) ? (l = v[s], h && !Array.isArray(l) ? p = [] : !h && !u.isPlainObject(l) ? p = {} : p = l, h = !1, v[s] = u.extend(L, p, c)) : c !== void 0 && (v[s] = c));
      return v;
    }, u.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (B + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(r) {
        throw new Error(r);
      },
      noop: function() {
      },
      isPlainObject: function(r) {
        var s, l;
        return !r || w.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (l = b.call(s, "constructor") && s.constructor, typeof l == "function" && T.call(l) === O) : !0);
      },
      isEmptyObject: function(r) {
        var s;
        for (s in r)
          return !1;
        return !0;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(r, s, l) {
        I(r, { nonce: s && s.nonce }, l);
      },
      each: function(r, s) {
        var l, c = 0;
        if (ee(r))
          for (l = r.length; c < l && s.call(r[c], c, r[c]) !== !1; c++)
            ;
        else
          for (c in r)
            if (s.call(r[c], c, r[c]) === !1)
              break;
        return r;
      },
      // results is for internal usage only
      makeArray: function(r, s) {
        var l = s || [];
        return r != null && (ee(Object(r)) ? u.merge(
          l,
          typeof r == "string" ? [r] : r
        ) : d.call(l, r)), l;
      },
      inArray: function(r, s, l) {
        return s == null ? -1 : m.call(s, r, l);
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function(r, s) {
        for (var l = +s.length, c = 0, h = r.length; c < l; c++)
          r[h++] = s[c];
        return r.length = h, r;
      },
      grep: function(r, s, l) {
        for (var c, h = [], p = 0, v = r.length, k = !l; p < v; p++)
          c = !s(r[p], p), c !== k && h.push(r[p]);
        return h;
      },
      // arg is for internal usage only
      map: function(r, s, l) {
        var c, h, p = 0, v = [];
        if (ee(r))
          for (c = r.length; p < c; p++)
            h = s(r[p], p, l), h != null && v.push(h);
        else
          for (p in r)
            h = s(r[p], p, l), h != null && v.push(h);
        return f(v);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: x
    }), typeof Symbol == "function" && (u.fn[Symbol.iterator] = i[Symbol.iterator]), u.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(r, s) {
        y["[object " + s + "]"] = s.toLowerCase();
      }
    );
    function ee(r) {
      var s = !!r && "length" in r && r.length, l = A(r);
      return C(r) || $(r) ? !1 : l === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r;
    }
    var ne = (
      /*!
       * Sizzle CSS Selector Engine v2.3.9
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2022-12-19
       */
      function(r) {
        var s, l, c, h, p, v, k, S, L, H, J, j, z, Ce, Ve, De, kt, St, Kt, it = "sizzle" + 1 * new Date(), He = r.document, Ft = 0, Je = 0, vt = qi(), li = qi(), Bi = qi(), Xt = qi(), lr = function(g, _) {
          return g === _ && (J = !0), 0;
        }, ur = {}.hasOwnProperty, Ht = [], Kn = Ht.pop, sn = Ht.push, Xn = Ht.push, ql = Ht.slice, fr = function(g, _) {
          for (var M = 0, G = g.length; M < G; M++)
            if (g[M] === _)
              return M;
          return -1;
        }, vs = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", cr = "(?:\\\\[\\da-fA-F]{1,6}" + tt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Gl = "\\[" + tt + "*(" + cr + ")(?:" + tt + // Operator (capture 2)
        "*([*^$|!~]?=)" + tt + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + cr + "))|)" + tt + "*\\]", gs = ":(" + cr + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Gl + ")*)|.*)\\)|)", Nh = new RegExp(tt + "+", "g"), zi = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), Lh = new RegExp("^" + tt + "*," + tt + "*"), Kl = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), Rh = new RegExp(tt + "|>"), xh = new RegExp(gs), Ih = new RegExp("^" + cr + "$"), Ui = {
          ID: new RegExp("^#(" + cr + ")"),
          CLASS: new RegExp("^\\.(" + cr + ")"),
          TAG: new RegExp("^(" + cr + "|[*])"),
          ATTR: new RegExp("^" + Gl),
          PSEUDO: new RegExp("^" + gs),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + vs + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        }, Yh = /HTML$/i, jh = /^(?:input|select|textarea|button)$/i, Fh = /^h\d$/i, ui = /^[^{]+\{\s*\[native \w/, Hh = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ys = /[+~]/, Yn = new RegExp("\\\\[\\da-fA-F]{1,6}" + tt + "?|\\\\([^\\r\\n\\f])", "g"), jn = function(g, _) {
          var M = "0x" + g.slice(1) - 65536;
          return _ || // Replace a hexadecimal escape sequence with the encoded Unicode code point
          // Support: IE <=11+
          // For values outside the Basic Multilingual Plane (BMP), manually construct a
          // surrogate pair
          (M < 0 ? String.fromCharCode(M + 65536) : String.fromCharCode(M >> 10 | 55296, M & 1023 | 56320));
        }, Xl = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Zl = function(g, _) {
          return _ ? g === "\0" ? "�" : g.slice(0, -1) + "\\" + g.charCodeAt(g.length - 1).toString(16) + " " : "\\" + g;
        }, Jl = function() {
          j();
        }, Vh = Ki(
          function(g) {
            return g.disabled === !0 && g.nodeName.toLowerCase() === "fieldset";
          },
          { dir: "parentNode", next: "legend" }
        );
        try {
          Xn.apply(
            Ht = ql.call(He.childNodes),
            He.childNodes
          ), Ht[He.childNodes.length].nodeType;
        } catch {
          Xn = {
            apply: Ht.length ? (
              // Leverage slice if possible
              function(_, M) {
                sn.apply(_, ql.call(M));
              }
            ) : (
              // Support: IE<9
              // Otherwise append directly
              function(_, M) {
                for (var G = _.length, N = 0; _[G++] = M[N++]; )
                  ;
                _.length = G - 1;
              }
            )
          };
        }
        function ut(g, _, M, G) {
          var N, K, Q, he, ge, Ne, $e, Re = _ && _.ownerDocument, Ge = _ ? _.nodeType : 9;
          if (M = M || [], typeof g != "string" || !g || Ge !== 1 && Ge !== 9 && Ge !== 11)
            return M;
          if (!G && (j(_), _ = _ || z, Ve)) {
            if (Ge !== 11 && (ge = Hh.exec(g)))
              if (N = ge[1]) {
                if (Ge === 9)
                  if (Q = _.getElementById(N)) {
                    if (Q.id === N)
                      return M.push(Q), M;
                  } else
                    return M;
                else if (Re && (Q = Re.getElementById(N)) && Kt(_, Q) && Q.id === N)
                  return M.push(Q), M;
              } else {
                if (ge[2])
                  return Xn.apply(M, _.getElementsByTagName(g)), M;
                if ((N = ge[3]) && l.getElementsByClassName && _.getElementsByClassName)
                  return Xn.apply(M, _.getElementsByClassName(N)), M;
              }
            if (l.qsa && !Xt[g + " "] && (!De || !De.test(g)) && // Support: IE 8 only
            // Exclude object elements
            (Ge !== 1 || _.nodeName.toLowerCase() !== "object")) {
              if ($e = g, Re = _, Ge === 1 && (Rh.test(g) || Kl.test(g))) {
                for (Re = ys.test(g) && ws(_.parentNode) || _, (Re !== _ || !l.scope) && ((he = _.getAttribute("id")) ? he = he.replace(Xl, Zl) : _.setAttribute("id", he = it)), Ne = v(g), K = Ne.length; K--; )
                  Ne[K] = (he ? "#" + he : ":scope") + " " + Gi(Ne[K]);
                $e = Ne.join(",");
              }
              try {
                if (l.cssSupportsSelector && // eslint-disable-next-line no-undef
                !CSS.supports("selector(:is(" + $e + "))"))
                  throw new Error();
                return Xn.apply(
                  M,
                  Re.querySelectorAll($e)
                ), M;
              } catch {
                Xt(g, !0);
              } finally {
                he === it && _.removeAttribute("id");
              }
            }
          }
          return S(g.replace(zi, "$1"), _, M, G);
        }
        function qi() {
          var g = [];
          function _(M, G) {
            return g.push(M + " ") > c.cacheLength && delete _[g.shift()], _[M + " "] = G;
          }
          return _;
        }
        function vn(g) {
          return g[it] = !0, g;
        }
        function on(g) {
          var _ = z.createElement("fieldset");
          try {
            return !!g(_);
          } catch {
            return !1;
          } finally {
            _.parentNode && _.parentNode.removeChild(_), _ = null;
          }
        }
        function bs(g, _) {
          for (var M = g.split("|"), G = M.length; G--; )
            c.attrHandle[M[G]] = _;
        }
        function Ql(g, _) {
          var M = _ && g, G = M && g.nodeType === 1 && _.nodeType === 1 && g.sourceIndex - _.sourceIndex;
          if (G)
            return G;
          if (M) {
            for (; M = M.nextSibling; )
              if (M === _)
                return -1;
          }
          return g ? 1 : -1;
        }
        function Wh(g) {
          return function(_) {
            var M = _.nodeName.toLowerCase();
            return M === "input" && _.type === g;
          };
        }
        function Bh(g) {
          return function(_) {
            var M = _.nodeName.toLowerCase();
            return (M === "input" || M === "button") && _.type === g;
          };
        }
        function eu(g) {
          return function(_) {
            return "form" in _ ? _.parentNode && _.disabled === !1 ? "label" in _ ? "label" in _.parentNode ? _.parentNode.disabled === g : _.disabled === g : _.isDisabled === g || // Where there is no isDisabled, check manually
            /* jshint -W018 */
            _.isDisabled !== !g && Vh(_) === g : _.disabled === g : "label" in _ ? _.disabled === g : !1;
          };
        }
        function dr(g) {
          return vn(function(_) {
            return _ = +_, vn(function(M, G) {
              for (var N, K = g([], M.length, _), Q = K.length; Q--; )
                M[N = K[Q]] && (M[N] = !(G[N] = M[N]));
            });
          });
        }
        function ws(g) {
          return g && typeof g.getElementsByTagName < "u" && g;
        }
        l = ut.support = {}, p = ut.isXML = function(g) {
          var _ = g && g.namespaceURI, M = g && (g.ownerDocument || g).documentElement;
          return !Yh.test(_ || M && M.nodeName || "HTML");
        }, j = ut.setDocument = function(g) {
          var _, M, G = g ? g.ownerDocument || g : He;
          return G == z || G.nodeType !== 9 || !G.documentElement || (z = G, Ce = z.documentElement, Ve = !p(z), He != z && (M = z.defaultView) && M.top !== M && (M.addEventListener ? M.addEventListener("unload", Jl, !1) : M.attachEvent && M.attachEvent("onunload", Jl)), l.scope = on(function(N) {
            return Ce.appendChild(N).appendChild(z.createElement("div")), typeof N.querySelectorAll < "u" && !N.querySelectorAll(":scope fieldset div").length;
          }), l.cssSupportsSelector = on(function() {
            return CSS.supports("selector(*)") && // Support: Firefox 78-81 only
            // In old Firefox, `:is()` didn't use forgiving parsing. In that case,
            // fail this test as there's no selector to test against that.
            // `CSS.supports` uses unforgiving parsing
            z.querySelectorAll(":is(:jqfake)") && // `*` is needed as Safari & newer Chrome implemented something in between
            // for `:has()` - it throws in `qSA` if it only contains an unsupported
            // argument but multiple ones, one of which is supported, are fine.
            // We want to play safe in case `:is()` gets the same treatment.
            !CSS.supports("selector(:is(*,:jqfake))");
          }), l.attributes = on(function(N) {
            return N.className = "i", !N.getAttribute("className");
          }), l.getElementsByTagName = on(function(N) {
            return N.appendChild(z.createComment("")), !N.getElementsByTagName("*").length;
          }), l.getElementsByClassName = ui.test(z.getElementsByClassName), l.getById = on(function(N) {
            return Ce.appendChild(N).id = it, !z.getElementsByName || !z.getElementsByName(it).length;
          }), l.getById ? (c.filter.ID = function(N) {
            var K = N.replace(Yn, jn);
            return function(Q) {
              return Q.getAttribute("id") === K;
            };
          }, c.find.ID = function(N, K) {
            if (typeof K.getElementById < "u" && Ve) {
              var Q = K.getElementById(N);
              return Q ? [Q] : [];
            }
          }) : (c.filter.ID = function(N) {
            var K = N.replace(Yn, jn);
            return function(Q) {
              var he = typeof Q.getAttributeNode < "u" && Q.getAttributeNode("id");
              return he && he.value === K;
            };
          }, c.find.ID = function(N, K) {
            if (typeof K.getElementById < "u" && Ve) {
              var Q, he, ge, Ne = K.getElementById(N);
              if (Ne) {
                if (Q = Ne.getAttributeNode("id"), Q && Q.value === N)
                  return [Ne];
                for (ge = K.getElementsByName(N), he = 0; Ne = ge[he++]; )
                  if (Q = Ne.getAttributeNode("id"), Q && Q.value === N)
                    return [Ne];
              }
              return [];
            }
          }), c.find.TAG = l.getElementsByTagName ? function(N, K) {
            if (typeof K.getElementsByTagName < "u")
              return K.getElementsByTagName(N);
            if (l.qsa)
              return K.querySelectorAll(N);
          } : function(N, K) {
            var Q, he = [], ge = 0, Ne = K.getElementsByTagName(N);
            if (N === "*") {
              for (; Q = Ne[ge++]; )
                Q.nodeType === 1 && he.push(Q);
              return he;
            }
            return Ne;
          }, c.find.CLASS = l.getElementsByClassName && function(N, K) {
            if (typeof K.getElementsByClassName < "u" && Ve)
              return K.getElementsByClassName(N);
          }, kt = [], De = [], (l.qsa = ui.test(z.querySelectorAll)) && (on(function(N) {
            var K;
            Ce.appendChild(N).innerHTML = "<a id='" + it + "'></a><select id='" + it + "-\r\\' msallowcapture=''><option selected=''></option></select>", N.querySelectorAll("[msallowcapture^='']").length && De.push("[*^$]=" + tt + `*(?:''|"")`), N.querySelectorAll("[selected]").length || De.push("\\[" + tt + "*(?:value|" + vs + ")"), N.querySelectorAll("[id~=" + it + "-]").length || De.push("~="), K = z.createElement("input"), K.setAttribute("name", ""), N.appendChild(K), N.querySelectorAll("[name='']").length || De.push("\\[" + tt + "*name" + tt + "*=" + tt + `*(?:''|"")`), N.querySelectorAll(":checked").length || De.push(":checked"), N.querySelectorAll("a#" + it + "+*").length || De.push(".#.+[+~]"), N.querySelectorAll("\\\f"), De.push("[\\r\\n\\f]");
          }), on(function(N) {
            N.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var K = z.createElement("input");
            K.setAttribute("type", "hidden"), N.appendChild(K).setAttribute("name", "D"), N.querySelectorAll("[name=d]").length && De.push("name" + tt + "*[*^$|!~]?="), N.querySelectorAll(":enabled").length !== 2 && De.push(":enabled", ":disabled"), Ce.appendChild(N).disabled = !0, N.querySelectorAll(":disabled").length !== 2 && De.push(":enabled", ":disabled"), N.querySelectorAll("*,:x"), De.push(",.*:");
          })), (l.matchesSelector = ui.test(St = Ce.matches || Ce.webkitMatchesSelector || Ce.mozMatchesSelector || Ce.oMatchesSelector || Ce.msMatchesSelector)) && on(function(N) {
            l.disconnectedMatch = St.call(N, "*"), St.call(N, "[s!='']:x"), kt.push("!=", gs);
          }), l.cssSupportsSelector || De.push(":has"), De = De.length && new RegExp(De.join("|")), kt = kt.length && new RegExp(kt.join("|")), _ = ui.test(Ce.compareDocumentPosition), Kt = _ || ui.test(Ce.contains) ? function(N, K) {
            var Q = N.nodeType === 9 && N.documentElement || N, he = K && K.parentNode;
            return N === he || !!(he && he.nodeType === 1 && (Q.contains ? Q.contains(he) : N.compareDocumentPosition && N.compareDocumentPosition(he) & 16));
          } : function(N, K) {
            if (K) {
              for (; K = K.parentNode; )
                if (K === N)
                  return !0;
            }
            return !1;
          }, lr = _ ? function(N, K) {
            if (N === K)
              return J = !0, 0;
            var Q = !N.compareDocumentPosition - !K.compareDocumentPosition;
            return Q || (Q = (N.ownerDocument || N) == (K.ownerDocument || K) ? N.compareDocumentPosition(K) : (
              // Otherwise we know they are disconnected
              1
            ), Q & 1 || !l.sortDetached && K.compareDocumentPosition(N) === Q ? N == z || N.ownerDocument == He && Kt(He, N) ? -1 : K == z || K.ownerDocument == He && Kt(He, K) ? 1 : H ? fr(H, N) - fr(H, K) : 0 : Q & 4 ? -1 : 1);
          } : function(N, K) {
            if (N === K)
              return J = !0, 0;
            var Q, he = 0, ge = N.parentNode, Ne = K.parentNode, $e = [N], Re = [K];
            if (!ge || !Ne)
              return N == z ? -1 : K == z ? 1 : (
                /* eslint-enable eqeqeq */
                ge ? -1 : Ne ? 1 : H ? fr(H, N) - fr(H, K) : 0
              );
            if (ge === Ne)
              return Ql(N, K);
            for (Q = N; Q = Q.parentNode; )
              $e.unshift(Q);
            for (Q = K; Q = Q.parentNode; )
              Re.unshift(Q);
            for (; $e[he] === Re[he]; )
              he++;
            return he ? (
              // Do a sibling check if the nodes have a common ancestor
              Ql($e[he], Re[he])
            ) : (
              // Otherwise nodes in our document sort first
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              /* eslint-disable eqeqeq */
              $e[he] == He ? -1 : Re[he] == He ? 1 : (
                /* eslint-enable eqeqeq */
                0
              )
            );
          }), z;
        }, ut.matches = function(g, _) {
          return ut(g, null, null, _);
        }, ut.matchesSelector = function(g, _) {
          if (j(g), l.matchesSelector && Ve && !Xt[_ + " "] && (!kt || !kt.test(_)) && (!De || !De.test(_)))
            try {
              var M = St.call(g, _);
              if (M || l.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              g.document && g.document.nodeType !== 11)
                return M;
            } catch {
              Xt(_, !0);
            }
          return ut(_, z, null, [g]).length > 0;
        }, ut.contains = function(g, _) {
          return (g.ownerDocument || g) != z && j(g), Kt(g, _);
        }, ut.attr = function(g, _) {
          (g.ownerDocument || g) != z && j(g);
          var M = c.attrHandle[_.toLowerCase()], G = M && ur.call(c.attrHandle, _.toLowerCase()) ? M(g, _, !Ve) : void 0;
          return G !== void 0 ? G : l.attributes || !Ve ? g.getAttribute(_) : (G = g.getAttributeNode(_)) && G.specified ? G.value : null;
        }, ut.escape = function(g) {
          return (g + "").replace(Xl, Zl);
        }, ut.error = function(g) {
          throw new Error("Syntax error, unrecognized expression: " + g);
        }, ut.uniqueSort = function(g) {
          var _, M = [], G = 0, N = 0;
          if (J = !l.detectDuplicates, H = !l.sortStable && g.slice(0), g.sort(lr), J) {
            for (; _ = g[N++]; )
              _ === g[N] && (G = M.push(N));
            for (; G--; )
              g.splice(M[G], 1);
          }
          return H = null, g;
        }, h = ut.getText = function(g) {
          var _, M = "", G = 0, N = g.nodeType;
          if (N) {
            if (N === 1 || N === 9 || N === 11) {
              if (typeof g.textContent == "string")
                return g.textContent;
              for (g = g.firstChild; g; g = g.nextSibling)
                M += h(g);
            } else if (N === 3 || N === 4)
              return g.nodeValue;
          } else
            for (; _ = g[G++]; )
              M += h(_);
          return M;
        }, c = ut.selectors = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: vn,
          match: Ui,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(g) {
              return g[1] = g[1].replace(Yn, jn), g[3] = (g[3] || g[4] || g[5] || "").replace(Yn, jn), g[2] === "~=" && (g[3] = " " + g[3] + " "), g.slice(0, 4);
            },
            CHILD: function(g) {
              return g[1] = g[1].toLowerCase(), g[1].slice(0, 3) === "nth" ? (g[3] || ut.error(g[0]), g[4] = +(g[4] ? g[5] + (g[6] || 1) : 2 * (g[3] === "even" || g[3] === "odd")), g[5] = +(g[7] + g[8] || g[3] === "odd")) : g[3] && ut.error(g[0]), g;
            },
            PSEUDO: function(g) {
              var _, M = !g[6] && g[2];
              return Ui.CHILD.test(g[0]) ? null : (g[3] ? g[2] = g[4] || g[5] || "" : M && xh.test(M) && // Get excess from tokenize (recursively)
              (_ = v(M, !0)) && // advance to the next closing parenthesis
              (_ = M.indexOf(")", M.length - _) - M.length) && (g[0] = g[0].slice(0, _), g[2] = M.slice(0, _)), g.slice(0, 3));
            }
          },
          filter: {
            TAG: function(g) {
              var _ = g.replace(Yn, jn).toLowerCase();
              return g === "*" ? function() {
                return !0;
              } : function(M) {
                return M.nodeName && M.nodeName.toLowerCase() === _;
              };
            },
            CLASS: function(g) {
              var _ = vt[g + " "];
              return _ || (_ = new RegExp("(^|" + tt + ")" + g + "(" + tt + "|$)")) && vt(
                g,
                function(M) {
                  return _.test(
                    typeof M.className == "string" && M.className || typeof M.getAttribute < "u" && M.getAttribute("class") || ""
                  );
                }
              );
            },
            ATTR: function(g, _, M) {
              return function(G) {
                var N = ut.attr(G, g);
                return N == null ? _ === "!=" : _ ? (N += "", _ === "=" ? N === M : _ === "!=" ? N !== M : _ === "^=" ? M && N.indexOf(M) === 0 : _ === "*=" ? M && N.indexOf(M) > -1 : _ === "$=" ? M && N.slice(-M.length) === M : _ === "~=" ? (" " + N.replace(Nh, " ") + " ").indexOf(M) > -1 : _ === "|=" ? N === M || N.slice(0, M.length + 1) === M + "-" : !1) : !0;
              };
            },
            CHILD: function(g, _, M, G, N) {
              var K = g.slice(0, 3) !== "nth", Q = g.slice(-4) !== "last", he = _ === "of-type";
              return G === 1 && N === 0 ? (
                // Shortcut for :nth-*(n)
                function(ge) {
                  return !!ge.parentNode;
                }
              ) : function(ge, Ne, $e) {
                var Re, Ge, ft, Le, Tt, At, Zt = K !== Q ? "nextSibling" : "previousSibling", pt = ge.parentNode, fi = he && ge.nodeName.toLowerCase(), ci = !$e && !he, Jt = !1;
                if (pt) {
                  if (K) {
                    for (; Zt; ) {
                      for (Le = ge; Le = Le[Zt]; )
                        if (he ? Le.nodeName.toLowerCase() === fi : Le.nodeType === 1)
                          return !1;
                      At = Zt = g === "only" && !At && "nextSibling";
                    }
                    return !0;
                  }
                  if (At = [Q ? pt.firstChild : pt.lastChild], Q && ci) {
                    for (Le = pt, ft = Le[it] || (Le[it] = {}), Ge = ft[Le.uniqueID] || (ft[Le.uniqueID] = {}), Re = Ge[g] || [], Tt = Re[0] === Ft && Re[1], Jt = Tt && Re[2], Le = Tt && pt.childNodes[Tt]; Le = ++Tt && Le && Le[Zt] || // Fallback to seeking `elem` from the start
                    (Jt = Tt = 0) || At.pop(); )
                      if (Le.nodeType === 1 && ++Jt && Le === ge) {
                        Ge[g] = [Ft, Tt, Jt];
                        break;
                      }
                  } else if (ci && (Le = ge, ft = Le[it] || (Le[it] = {}), Ge = ft[Le.uniqueID] || (ft[Le.uniqueID] = {}), Re = Ge[g] || [], Tt = Re[0] === Ft && Re[1], Jt = Tt), Jt === !1)
                    for (; (Le = ++Tt && Le && Le[Zt] || (Jt = Tt = 0) || At.pop()) && !((he ? Le.nodeName.toLowerCase() === fi : Le.nodeType === 1) && ++Jt && (ci && (ft = Le[it] || (Le[it] = {}), Ge = ft[Le.uniqueID] || (ft[Le.uniqueID] = {}), Ge[g] = [Ft, Jt]), Le === ge)); )
                      ;
                  return Jt -= N, Jt === G || Jt % G === 0 && Jt / G >= 0;
                }
              };
            },
            PSEUDO: function(g, _) {
              var M, G = c.pseudos[g] || c.setFilters[g.toLowerCase()] || ut.error("unsupported pseudo: " + g);
              return G[it] ? G(_) : G.length > 1 ? (M = [g, g, "", _], c.setFilters.hasOwnProperty(g.toLowerCase()) ? vn(function(N, K) {
                for (var Q, he = G(N, _), ge = he.length; ge--; )
                  Q = fr(N, he[ge]), N[Q] = !(K[Q] = he[ge]);
              }) : function(N) {
                return G(N, 0, M);
              }) : G;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: vn(function(g) {
              var _ = [], M = [], G = k(g.replace(zi, "$1"));
              return G[it] ? vn(function(N, K, Q, he) {
                for (var ge, Ne = G(N, null, he, []), $e = N.length; $e--; )
                  (ge = Ne[$e]) && (N[$e] = !(K[$e] = ge));
              }) : function(N, K, Q) {
                return _[0] = N, G(_, null, Q, M), _[0] = null, !M.pop();
              };
            }),
            has: vn(function(g) {
              return function(_) {
                return ut(g, _).length > 0;
              };
            }),
            contains: vn(function(g) {
              return g = g.replace(Yn, jn), function(_) {
                return (_.textContent || h(_)).indexOf(g) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            lang: vn(function(g) {
              return Ih.test(g || "") || ut.error("unsupported lang: " + g), g = g.replace(Yn, jn).toLowerCase(), function(_) {
                var M;
                do
                  if (M = Ve ? _.lang : _.getAttribute("xml:lang") || _.getAttribute("lang"))
                    return M = M.toLowerCase(), M === g || M.indexOf(g + "-") === 0;
                while ((_ = _.parentNode) && _.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(g) {
              var _ = r.location && r.location.hash;
              return _ && _.slice(1) === g.id;
            },
            root: function(g) {
              return g === Ce;
            },
            focus: function(g) {
              return g === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(g.type || g.href || ~g.tabIndex);
            },
            // Boolean properties
            enabled: eu(!1),
            disabled: eu(!0),
            checked: function(g) {
              var _ = g.nodeName.toLowerCase();
              return _ === "input" && !!g.checked || _ === "option" && !!g.selected;
            },
            selected: function(g) {
              return g.parentNode && g.parentNode.selectedIndex, g.selected === !0;
            },
            // Contents
            empty: function(g) {
              for (g = g.firstChild; g; g = g.nextSibling)
                if (g.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(g) {
              return !c.pseudos.empty(g);
            },
            // Element/input types
            header: function(g) {
              return Fh.test(g.nodeName);
            },
            input: function(g) {
              return jh.test(g.nodeName);
            },
            button: function(g) {
              var _ = g.nodeName.toLowerCase();
              return _ === "input" && g.type === "button" || _ === "button";
            },
            text: function(g) {
              var _;
              return g.nodeName.toLowerCase() === "input" && g.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
              ((_ = g.getAttribute("type")) == null || _.toLowerCase() === "text");
            },
            // Position-in-collection
            first: dr(function() {
              return [0];
            }),
            last: dr(function(g, _) {
              return [_ - 1];
            }),
            eq: dr(function(g, _, M) {
              return [M < 0 ? M + _ : M];
            }),
            even: dr(function(g, _) {
              for (var M = 0; M < _; M += 2)
                g.push(M);
              return g;
            }),
            odd: dr(function(g, _) {
              for (var M = 1; M < _; M += 2)
                g.push(M);
              return g;
            }),
            lt: dr(function(g, _, M) {
              for (var G = M < 0 ? M + _ : M > _ ? _ : M; --G >= 0; )
                g.push(G);
              return g;
            }),
            gt: dr(function(g, _, M) {
              for (var G = M < 0 ? M + _ : M; ++G < _; )
                g.push(G);
              return g;
            })
          }
        }, c.pseudos.nth = c.pseudos.eq;
        for (s in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          c.pseudos[s] = Wh(s);
        for (s in { submit: !0, reset: !0 })
          c.pseudos[s] = Bh(s);
        function tu() {
        }
        tu.prototype = c.filters = c.pseudos, c.setFilters = new tu(), v = ut.tokenize = function(g, _) {
          var M, G, N, K, Q, he, ge, Ne = li[g + " "];
          if (Ne)
            return _ ? 0 : Ne.slice(0);
          for (Q = g, he = [], ge = c.preFilter; Q; ) {
            (!M || (G = Lh.exec(Q))) && (G && (Q = Q.slice(G[0].length) || Q), he.push(N = [])), M = !1, (G = Kl.exec(Q)) && (M = G.shift(), N.push({
              value: M,
              // Cast descendant combinators to space
              type: G[0].replace(zi, " ")
            }), Q = Q.slice(M.length));
            for (K in c.filter)
              (G = Ui[K].exec(Q)) && (!ge[K] || (G = ge[K](G))) && (M = G.shift(), N.push({
                value: M,
                type: K,
                matches: G
              }), Q = Q.slice(M.length));
            if (!M)
              break;
          }
          return _ ? Q.length : Q ? ut.error(g) : (
            // Cache the tokens
            li(g, he).slice(0)
          );
        };
        function Gi(g) {
          for (var _ = 0, M = g.length, G = ""; _ < M; _++)
            G += g[_].value;
          return G;
        }
        function Ki(g, _, M) {
          var G = _.dir, N = _.next, K = N || G, Q = M && K === "parentNode", he = Je++;
          return _.first ? (
            // Check against closest ancestor/preceding element
            function(ge, Ne, $e) {
              for (; ge = ge[G]; )
                if (ge.nodeType === 1 || Q)
                  return g(ge, Ne, $e);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(ge, Ne, $e) {
              var Re, Ge, ft, Le = [Ft, he];
              if ($e) {
                for (; ge = ge[G]; )
                  if ((ge.nodeType === 1 || Q) && g(ge, Ne, $e))
                    return !0;
              } else
                for (; ge = ge[G]; )
                  if (ge.nodeType === 1 || Q)
                    if (ft = ge[it] || (ge[it] = {}), Ge = ft[ge.uniqueID] || (ft[ge.uniqueID] = {}), N && N === ge.nodeName.toLowerCase())
                      ge = ge[G] || ge;
                    else {
                      if ((Re = Ge[K]) && Re[0] === Ft && Re[1] === he)
                        return Le[2] = Re[2];
                      if (Ge[K] = Le, Le[2] = g(ge, Ne, $e))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function Ss(g) {
          return g.length > 1 ? function(_, M, G) {
            for (var N = g.length; N--; )
              if (!g[N](_, M, G))
                return !1;
            return !0;
          } : g[0];
        }
        function zh(g, _, M) {
          for (var G = 0, N = _.length; G < N; G++)
            ut(g, _[G], M);
          return M;
        }
        function Xi(g, _, M, G, N) {
          for (var K, Q = [], he = 0, ge = g.length, Ne = _ != null; he < ge; he++)
            (K = g[he]) && (!M || M(K, G, N)) && (Q.push(K), Ne && _.push(he));
          return Q;
        }
        function _s(g, _, M, G, N, K) {
          return G && !G[it] && (G = _s(G)), N && !N[it] && (N = _s(N, K)), vn(function(Q, he, ge, Ne) {
            var $e, Re, Ge, ft = [], Le = [], Tt = he.length, At = Q || zh(
              _ || "*",
              ge.nodeType ? [ge] : ge,
              []
            ), Zt = g && (Q || !_) ? Xi(At, ft, g, ge, Ne) : At, pt = M ? (
              // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
              N || (Q ? g : Tt || G) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                he
              )
            ) : Zt;
            if (M && M(Zt, pt, ge, Ne), G)
              for ($e = Xi(pt, Le), G($e, [], ge, Ne), Re = $e.length; Re--; )
                (Ge = $e[Re]) && (pt[Le[Re]] = !(Zt[Le[Re]] = Ge));
            if (Q) {
              if (N || g) {
                if (N) {
                  for ($e = [], Re = pt.length; Re--; )
                    (Ge = pt[Re]) && $e.push(Zt[Re] = Ge);
                  N(null, pt = [], $e, Ne);
                }
                for (Re = pt.length; Re--; )
                  (Ge = pt[Re]) && ($e = N ? fr(Q, Ge) : ft[Re]) > -1 && (Q[$e] = !(he[$e] = Ge));
              }
            } else
              pt = Xi(
                pt === he ? pt.splice(Tt, pt.length) : pt
              ), N ? N(null, he, pt, Ne) : Xn.apply(he, pt);
          });
        }
        function ks(g) {
          for (var _, M, G, N = g.length, K = c.relative[g[0].type], Q = K || c.relative[" "], he = K ? 1 : 0, ge = Ki(function(Re) {
            return Re === _;
          }, Q, !0), Ne = Ki(function(Re) {
            return fr(_, Re) > -1;
          }, Q, !0), $e = [function(Re, Ge, ft) {
            var Le = !K && (ft || Ge !== L) || ((_ = Ge).nodeType ? ge(Re, Ge, ft) : Ne(Re, Ge, ft));
            return _ = null, Le;
          }]; he < N; he++)
            if (M = c.relative[g[he].type])
              $e = [Ki(Ss($e), M)];
            else {
              if (M = c.filter[g[he].type].apply(null, g[he].matches), M[it]) {
                for (G = ++he; G < N && !c.relative[g[G].type]; G++)
                  ;
                return _s(
                  he > 1 && Ss($e),
                  he > 1 && Gi(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    g.slice(0, he - 1).concat({ value: g[he - 2].type === " " ? "*" : "" })
                  ).replace(zi, "$1"),
                  M,
                  he < G && ks(g.slice(he, G)),
                  G < N && ks(g = g.slice(G)),
                  G < N && Gi(g)
                );
              }
              $e.push(M);
            }
          return Ss($e);
        }
        function Uh(g, _) {
          var M = _.length > 0, G = g.length > 0, N = function(K, Q, he, ge, Ne) {
            var $e, Re, Ge, ft = 0, Le = "0", Tt = K && [], At = [], Zt = L, pt = K || G && c.find.TAG("*", Ne), fi = Ft += Zt == null ? 1 : Math.random() || 0.1, ci = pt.length;
            for (Ne && (L = Q == z || Q || Ne); Le !== ci && ($e = pt[Le]) != null; Le++) {
              if (G && $e) {
                for (Re = 0, !Q && $e.ownerDocument != z && (j($e), he = !Ve); Ge = g[Re++]; )
                  if (Ge($e, Q || z, he)) {
                    ge.push($e);
                    break;
                  }
                Ne && (Ft = fi);
              }
              M && (($e = !Ge && $e) && ft--, K && Tt.push($e));
            }
            if (ft += Le, M && Le !== ft) {
              for (Re = 0; Ge = _[Re++]; )
                Ge(Tt, At, Q, he);
              if (K) {
                if (ft > 0)
                  for (; Le--; )
                    Tt[Le] || At[Le] || (At[Le] = Kn.call(ge));
                At = Xi(At);
              }
              Xn.apply(ge, At), Ne && !K && At.length > 0 && ft + _.length > 1 && ut.uniqueSort(ge);
            }
            return Ne && (Ft = fi, L = Zt), Tt;
          };
          return M ? vn(N) : N;
        }
        return k = ut.compile = function(g, _) {
          var M, G = [], N = [], K = Bi[g + " "];
          if (!K) {
            for (_ || (_ = v(g)), M = _.length; M--; )
              K = ks(_[M]), K[it] ? G.push(K) : N.push(K);
            K = Bi(
              g,
              Uh(N, G)
            ), K.selector = g;
          }
          return K;
        }, S = ut.select = function(g, _, M, G) {
          var N, K, Q, he, ge, Ne = typeof g == "function" && g, $e = !G && v(g = Ne.selector || g);
          if (M = M || [], $e.length === 1) {
            if (K = $e[0] = $e[0].slice(0), K.length > 2 && (Q = K[0]).type === "ID" && _.nodeType === 9 && Ve && c.relative[K[1].type]) {
              if (_ = (c.find.ID(Q.matches[0].replace(Yn, jn), _) || [])[0], _)
                Ne && (_ = _.parentNode);
              else
                return M;
              g = g.slice(K.shift().value.length);
            }
            for (N = Ui.needsContext.test(g) ? 0 : K.length; N-- && (Q = K[N], !c.relative[he = Q.type]); )
              if ((ge = c.find[he]) && (G = ge(
                Q.matches[0].replace(Yn, jn),
                ys.test(K[0].type) && ws(_.parentNode) || _
              ))) {
                if (K.splice(N, 1), g = G.length && Gi(K), !g)
                  return Xn.apply(M, G), M;
                break;
              }
          }
          return (Ne || k(g, $e))(
            G,
            _,
            !Ve,
            M,
            !_ || ys.test(g) && ws(_.parentNode) || _
          ), M;
        }, l.sortStable = it.split("").sort(lr).join("") === it, l.detectDuplicates = !!J, j(), l.sortDetached = on(function(g) {
          return g.compareDocumentPosition(z.createElement("fieldset")) & 1;
        }), on(function(g) {
          return g.innerHTML = "<a href='#'></a>", g.firstChild.getAttribute("href") === "#";
        }) || bs("type|href|height|width", function(g, _, M) {
          if (!M)
            return g.getAttribute(_, _.toLowerCase() === "type" ? 1 : 2);
        }), (!l.attributes || !on(function(g) {
          return g.innerHTML = "<input/>", g.firstChild.setAttribute("value", ""), g.firstChild.getAttribute("value") === "";
        })) && bs("value", function(g, _, M) {
          if (!M && g.nodeName.toLowerCase() === "input")
            return g.defaultValue;
        }), on(function(g) {
          return g.getAttribute("disabled") == null;
        }) || bs(vs, function(g, _, M) {
          var G;
          if (!M)
            return g[_] === !0 ? _.toLowerCase() : (G = g.getAttributeNode(_)) && G.specified ? G.value : null;
        }), ut;
      }(t)
    );
    u.find = ne, u.expr = ne.selectors, u.expr[":"] = u.expr.pseudos, u.uniqueSort = u.unique = ne.uniqueSort, u.text = ne.getText, u.isXMLDoc = ne.isXML, u.contains = ne.contains, u.escapeSelector = ne.escape;
    var ae = function(r, s, l) {
      for (var c = [], h = l !== void 0; (r = r[s]) && r.nodeType !== 9; )
        if (r.nodeType === 1) {
          if (h && u(r).is(l))
            break;
          c.push(r);
        }
      return c;
    }, re = function(r, s) {
      for (var l = []; r; r = r.nextSibling)
        r.nodeType === 1 && r !== s && l.push(r);
      return l;
    }, me = u.expr.match.needsContext;
    function we(r, s) {
      return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase();
    }
    var U = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function q(r, s, l) {
      return C(s) ? u.grep(r, function(c, h) {
        return !!s.call(c, h, c) !== l;
      }) : s.nodeType ? u.grep(r, function(c) {
        return c === s !== l;
      }) : typeof s != "string" ? u.grep(r, function(c) {
        return m.call(s, c) > -1 !== l;
      }) : u.filter(s, r, l);
    }
    u.filter = function(r, s, l) {
      var c = s[0];
      return l && (r = ":not(" + r + ")"), s.length === 1 && c.nodeType === 1 ? u.find.matchesSelector(c, r) ? [c] : [] : u.find.matches(r, u.grep(s, function(h) {
        return h.nodeType === 1;
      }));
    }, u.fn.extend({
      find: function(r) {
        var s, l, c = this.length, h = this;
        if (typeof r != "string")
          return this.pushStack(u(r).filter(function() {
            for (s = 0; s < c; s++)
              if (u.contains(h[s], this))
                return !0;
          }));
        for (l = this.pushStack([]), s = 0; s < c; s++)
          u.find(r, h[s], l);
        return c > 1 ? u.uniqueSort(l) : l;
      },
      filter: function(r) {
        return this.pushStack(q(this, r || [], !1));
      },
      not: function(r) {
        return this.pushStack(q(this, r || [], !0));
      },
      is: function(r) {
        return !!q(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof r == "string" && me.test(r) ? u(r) : r || [],
          !1
        ).length;
      }
    });
    var Y, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, F = u.fn.init = function(r, s, l) {
      var c, h;
      if (!r)
        return this;
      if (l = l || Y, typeof r == "string")
        if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? c = [null, r, null] : c = R.exec(r), c && (c[1] || !s))
          if (c[1]) {
            if (s = s instanceof u ? s[0] : s, u.merge(this, u.parseHTML(
              c[1],
              s && s.nodeType ? s.ownerDocument || s : D,
              !0
            )), U.test(c[1]) && u.isPlainObject(s))
              for (c in s)
                C(this[c]) ? this[c](s[c]) : this.attr(c, s[c]);
            return this;
          } else
            return h = D.getElementById(c[2]), h && (this[0] = h, this.length = 1), this;
        else
          return !s || s.jquery ? (s || l).find(r) : this.constructor(s).find(r);
      else {
        if (r.nodeType)
          return this[0] = r, this.length = 1, this;
        if (C(r))
          return l.ready !== void 0 ? l.ready(r) : (
            // Execute immediately if ready is not present
            r(u)
          );
      }
      return u.makeArray(r, this);
    };
    F.prototype = u.fn, Y = u(D);
    var W = /^(?:parents|prev(?:Until|All))/, X = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    u.fn.extend({
      has: function(r) {
        var s = u(r, this), l = s.length;
        return this.filter(function() {
          for (var c = 0; c < l; c++)
            if (u.contains(this, s[c]))
              return !0;
        });
      },
      closest: function(r, s) {
        var l, c = 0, h = this.length, p = [], v = typeof r != "string" && u(r);
        if (!me.test(r)) {
          for (; c < h; c++)
            for (l = this[c]; l && l !== s; l = l.parentNode)
              if (l.nodeType < 11 && (v ? v.index(l) > -1 : (
                // Don't pass non-elements to Sizzle
                l.nodeType === 1 && u.find.matchesSelector(l, r)
              ))) {
                p.push(l);
                break;
              }
        }
        return this.pushStack(p.length > 1 ? u.uniqueSort(p) : p);
      },
      // Determine the position of an element within the set
      index: function(r) {
        return r ? typeof r == "string" ? m.call(u(r), this[0]) : m.call(
          this,
          // If it receives a jQuery object, the first element is used
          r.jquery ? r[0] : r
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(r, s) {
        return this.pushStack(
          u.uniqueSort(
            u.merge(this.get(), u(r, s))
          )
        );
      },
      addBack: function(r) {
        return this.add(
          r == null ? this.prevObject : this.prevObject.filter(r)
        );
      }
    });
    function _e(r, s) {
      for (; (r = r[s]) && r.nodeType !== 1; )
        ;
      return r;
    }
    u.each({
      parent: function(r) {
        var s = r.parentNode;
        return s && s.nodeType !== 11 ? s : null;
      },
      parents: function(r) {
        return ae(r, "parentNode");
      },
      parentsUntil: function(r, s, l) {
        return ae(r, "parentNode", l);
      },
      next: function(r) {
        return _e(r, "nextSibling");
      },
      prev: function(r) {
        return _e(r, "previousSibling");
      },
      nextAll: function(r) {
        return ae(r, "nextSibling");
      },
      prevAll: function(r) {
        return ae(r, "previousSibling");
      },
      nextUntil: function(r, s, l) {
        return ae(r, "nextSibling", l);
      },
      prevUntil: function(r, s, l) {
        return ae(r, "previousSibling", l);
      },
      siblings: function(r) {
        return re((r.parentNode || {}).firstChild, r);
      },
      children: function(r) {
        return re(r.firstChild);
      },
      contents: function(r) {
        return r.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        a(r.contentDocument) ? r.contentDocument : (we(r, "template") && (r = r.content || r), u.merge([], r.childNodes));
      }
    }, function(r, s) {
      u.fn[r] = function(l, c) {
        var h = u.map(this, s, l);
        return r.slice(-5) !== "Until" && (c = l), c && typeof c == "string" && (h = u.filter(c, h)), this.length > 1 && (X[r] || u.uniqueSort(h), W.test(r) && h.reverse()), this.pushStack(h);
      };
    });
    var Te = /[^\x20\t\r\n\f]+/g;
    function Ae(r) {
      var s = {};
      return u.each(r.match(Te) || [], function(l, c) {
        s[c] = !0;
      }), s;
    }
    u.Callbacks = function(r) {
      r = typeof r == "string" ? Ae(r) : u.extend({}, r);
      var s, l, c, h, p = [], v = [], k = -1, S = function() {
        for (h = h || r.once, c = s = !0; v.length; k = -1)
          for (l = v.shift(); ++k < p.length; )
            p[k].apply(l[0], l[1]) === !1 && r.stopOnFalse && (k = p.length, l = !1);
        r.memory || (l = !1), s = !1, h && (l ? p = [] : p = "");
      }, L = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return p && (l && !s && (k = p.length - 1, v.push(l)), function H(J) {
            u.each(J, function(j, z) {
              C(z) ? (!r.unique || !L.has(z)) && p.push(z) : z && z.length && A(z) !== "string" && H(z);
            });
          }(arguments), l && !s && S()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return u.each(arguments, function(H, J) {
            for (var j; (j = u.inArray(J, p, j)) > -1; )
              p.splice(j, 1), j <= k && k--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(H) {
          return H ? u.inArray(H, p) > -1 : p.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return p && (p = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return h = v = [], p = l = "", this;
        },
        disabled: function() {
          return !p;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return h = v = [], !l && !s && (p = l = ""), this;
        },
        locked: function() {
          return !!h;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(H, J) {
          return h || (J = J || [], J = [H, J.slice ? J.slice() : J], v.push(J), s || S()), this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          return L.fireWith(this, arguments), this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!c;
        }
      };
      return L;
    };
    function Ye(r) {
      return r;
    }
    function te(r) {
      throw r;
    }
    function Oe(r, s, l, c) {
      var h;
      try {
        r && C(h = r.promise) ? h.call(r).done(s).fail(l) : r && C(h = r.then) ? h.call(r, s, l) : s.apply(void 0, [r].slice(c));
      } catch (p) {
        l.apply(void 0, [p]);
      }
    }
    u.extend({
      Deferred: function(r) {
        var s = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            u.Callbacks("memory"),
            u.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            u.Callbacks("once memory"),
            u.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            u.Callbacks("once memory"),
            u.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], l = "pending", c = {
          state: function() {
            return l;
          },
          always: function() {
            return h.done(arguments).fail(arguments), this;
          },
          catch: function(p) {
            return c.then(null, p);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var p = arguments;
            return u.Deferred(function(v) {
              u.each(s, function(k, S) {
                var L = C(p[S[4]]) && p[S[4]];
                h[S[1]](function() {
                  var H = L && L.apply(this, arguments);
                  H && C(H.promise) ? H.promise().progress(v.notify).done(v.resolve).fail(v.reject) : v[S[0] + "With"](
                    this,
                    L ? [H] : arguments
                  );
                });
              }), p = null;
            }).promise();
          },
          then: function(p, v, k) {
            var S = 0;
            function L(H, J, j, z) {
              return function() {
                var Ce = this, Ve = arguments, De = function() {
                  var St, Kt;
                  if (!(H < S)) {
                    if (St = j.apply(Ce, Ve), St === J.promise())
                      throw new TypeError("Thenable self-resolution");
                    Kt = St && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof St == "object" || typeof St == "function") && St.then, C(Kt) ? z ? Kt.call(
                      St,
                      L(S, J, Ye, z),
                      L(S, J, te, z)
                    ) : (S++, Kt.call(
                      St,
                      L(S, J, Ye, z),
                      L(S, J, te, z),
                      L(
                        S,
                        J,
                        Ye,
                        J.notifyWith
                      )
                    )) : (j !== Ye && (Ce = void 0, Ve = [St]), (z || J.resolveWith)(Ce, Ve));
                  }
                }, kt = z ? De : function() {
                  try {
                    De();
                  } catch (St) {
                    u.Deferred.exceptionHook && u.Deferred.exceptionHook(
                      St,
                      kt.stackTrace
                    ), H + 1 >= S && (j !== te && (Ce = void 0, Ve = [St]), J.rejectWith(Ce, Ve));
                  }
                };
                H ? kt() : (u.Deferred.getStackHook && (kt.stackTrace = u.Deferred.getStackHook()), t.setTimeout(kt));
              };
            }
            return u.Deferred(function(H) {
              s[0][3].add(
                L(
                  0,
                  H,
                  C(k) ? k : Ye,
                  H.notifyWith
                )
              ), s[1][3].add(
                L(
                  0,
                  H,
                  C(p) ? p : Ye
                )
              ), s[2][3].add(
                L(
                  0,
                  H,
                  C(v) ? v : te
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(p) {
            return p != null ? u.extend(p, c) : c;
          }
        }, h = {};
        return u.each(s, function(p, v) {
          var k = v[2], S = v[5];
          c[v[1]] = k.add, S && k.add(
            function() {
              l = S;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            s[3 - p][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            s[3 - p][3].disable,
            // progress_callbacks.lock
            s[0][2].lock,
            // progress_handlers.lock
            s[0][3].lock
          ), k.add(v[3].fire), h[v[0]] = function() {
            return h[v[0] + "With"](this === h ? void 0 : this, arguments), this;
          }, h[v[0] + "With"] = k.fireWith;
        }), c.promise(h), r && r.call(h, h), h;
      },
      // Deferred helper
      when: function(r) {
        var s = arguments.length, l = s, c = Array(l), h = o.call(arguments), p = u.Deferred(), v = function(k) {
          return function(S) {
            c[k] = this, h[k] = arguments.length > 1 ? o.call(arguments) : S, --s || p.resolveWith(c, h);
          };
        };
        if (s <= 1 && (Oe(
          r,
          p.done(v(l)).resolve,
          p.reject,
          !s
        ), p.state() === "pending" || C(h[l] && h[l].then)))
          return p.then();
        for (; l--; )
          Oe(h[l], v(l), p.reject);
        return p.promise();
      }
    });
    var Be = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    u.Deferred.exceptionHook = function(r, s) {
      t.console && t.console.warn && r && Be.test(r.name) && t.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s);
    }, u.readyException = function(r) {
      t.setTimeout(function() {
        throw r;
      });
    };
    var oe = u.Deferred();
    u.fn.ready = function(r) {
      return oe.then(r).catch(function(s) {
        u.readyException(s);
      }), this;
    }, u.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: !1,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(r) {
        (r === !0 ? --u.readyWait : u.isReady) || (u.isReady = !0, !(r !== !0 && --u.readyWait > 0) && oe.resolveWith(D, [u]));
      }
    }), u.ready.then = oe.then;
    function ve() {
      D.removeEventListener("DOMContentLoaded", ve), t.removeEventListener("load", ve), u.ready();
    }
    D.readyState === "complete" || D.readyState !== "loading" && !D.documentElement.doScroll ? t.setTimeout(u.ready) : (D.addEventListener("DOMContentLoaded", ve), t.addEventListener("load", ve));
    var Se = function(r, s, l, c, h, p, v) {
      var k = 0, S = r.length, L = l == null;
      if (A(l) === "object") {
        h = !0;
        for (k in l)
          Se(r, s, k, l[k], !0, p, v);
      } else if (c !== void 0 && (h = !0, C(c) || (v = !0), L && (v ? (s.call(r, c), s = null) : (L = s, s = function(H, J, j) {
        return L.call(u(H), j);
      })), s))
        for (; k < S; k++)
          s(
            r[k],
            l,
            v ? c : c.call(r[k], k, s(r[k], l))
          );
      return h ? r : L ? s.call(r) : S ? s(r[0], l) : p;
    }, Ee = /^-ms-/, Xe = /-([a-z])/g;
    function ze(r, s) {
      return s.toUpperCase();
    }
    function P(r) {
      return r.replace(Ee, "ms-").replace(Xe, ze);
    }
    var de = function(r) {
      return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
    };
    function Pe() {
      this.expando = u.expando + Pe.uid++;
    }
    Pe.uid = 1, Pe.prototype = {
      cache: function(r) {
        var s = r[this.expando];
        return s || (s = {}, de(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
          value: s,
          configurable: !0
        }))), s;
      },
      set: function(r, s, l) {
        var c, h = this.cache(r);
        if (typeof s == "string")
          h[P(s)] = l;
        else
          for (c in s)
            h[P(c)] = s[c];
        return h;
      },
      get: function(r, s) {
        return s === void 0 ? this.cache(r) : (
          // Always use camelCase key (gh-2257)
          r[this.expando] && r[this.expando][P(s)]
        );
      },
      access: function(r, s, l) {
        return s === void 0 || s && typeof s == "string" && l === void 0 ? this.get(r, s) : (this.set(r, s, l), l !== void 0 ? l : s);
      },
      remove: function(r, s) {
        var l, c = r[this.expando];
        if (c !== void 0) {
          if (s !== void 0)
            for (Array.isArray(s) ? s = s.map(P) : (s = P(s), s = s in c ? [s] : s.match(Te) || []), l = s.length; l--; )
              delete c[s[l]];
          (s === void 0 || u.isEmptyObject(c)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando]);
        }
      },
      hasData: function(r) {
        var s = r[this.expando];
        return s !== void 0 && !u.isEmptyObject(s);
      }
    };
    var fe = new Pe(), nt = new Pe(), ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Fe = /[A-Z]/g;
    function lt(r) {
      return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : ce.test(r) ? JSON.parse(r) : r;
    }
    function rt(r, s, l) {
      var c;
      if (l === void 0 && r.nodeType === 1)
        if (c = "data-" + s.replace(Fe, "-$&").toLowerCase(), l = r.getAttribute(c), typeof l == "string") {
          try {
            l = lt(l);
          } catch {
          }
          nt.set(r, s, l);
        } else
          l = void 0;
      return l;
    }
    u.extend({
      hasData: function(r) {
        return nt.hasData(r) || fe.hasData(r);
      },
      data: function(r, s, l) {
        return nt.access(r, s, l);
      },
      removeData: function(r, s) {
        nt.remove(r, s);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(r, s, l) {
        return fe.access(r, s, l);
      },
      _removeData: function(r, s) {
        fe.remove(r, s);
      }
    }), u.fn.extend({
      data: function(r, s) {
        var l, c, h, p = this[0], v = p && p.attributes;
        if (r === void 0) {
          if (this.length && (h = nt.get(p), p.nodeType === 1 && !fe.get(p, "hasDataAttrs"))) {
            for (l = v.length; l--; )
              v[l] && (c = v[l].name, c.indexOf("data-") === 0 && (c = P(c.slice(5)), rt(p, c, h[c])));
            fe.set(p, "hasDataAttrs", !0);
          }
          return h;
        }
        return typeof r == "object" ? this.each(function() {
          nt.set(this, r);
        }) : Se(this, function(k) {
          var S;
          if (p && k === void 0)
            return S = nt.get(p, r), S !== void 0 || (S = rt(p, r), S !== void 0) ? S : void 0;
          this.each(function() {
            nt.set(this, r, k);
          });
        }, null, s, arguments.length > 1, null, !0);
      },
      removeData: function(r) {
        return this.each(function() {
          nt.remove(this, r);
        });
      }
    }), u.extend({
      queue: function(r, s, l) {
        var c;
        if (r)
          return s = (s || "fx") + "queue", c = fe.get(r, s), l && (!c || Array.isArray(l) ? c = fe.access(r, s, u.makeArray(l)) : c.push(l)), c || [];
      },
      dequeue: function(r, s) {
        s = s || "fx";
        var l = u.queue(r, s), c = l.length, h = l.shift(), p = u._queueHooks(r, s), v = function() {
          u.dequeue(r, s);
        };
        h === "inprogress" && (h = l.shift(), c--), h && (s === "fx" && l.unshift("inprogress"), delete p.stop, h.call(r, v, p)), !c && p && p.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(r, s) {
        var l = s + "queueHooks";
        return fe.get(r, l) || fe.access(r, l, {
          empty: u.Callbacks("once memory").add(function() {
            fe.remove(r, [s + "queue", l]);
          })
        });
      }
    }), u.fn.extend({
      queue: function(r, s) {
        var l = 2;
        return typeof r != "string" && (s = r, r = "fx", l--), arguments.length < l ? u.queue(this[0], r) : s === void 0 ? this : this.each(function() {
          var c = u.queue(this, r, s);
          u._queueHooks(this, r), r === "fx" && c[0] !== "inprogress" && u.dequeue(this, r);
        });
      },
      dequeue: function(r) {
        return this.each(function() {
          u.dequeue(this, r);
        });
      },
      clearQueue: function(r) {
        return this.queue(r || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(r, s) {
        var l, c = 1, h = u.Deferred(), p = this, v = this.length, k = function() {
          --c || h.resolveWith(p, [p]);
        };
        for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; v--; )
          l = fe.get(p[v], r + "queueHooks"), l && l.empty && (c++, l.empty.add(k));
        return k(), h.promise(s);
      }
    });
    var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rn = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"), xt = ["Top", "Right", "Bottom", "Left"], $t = D.documentElement, Gt = function(r) {
      return u.contains(r.ownerDocument, r);
    }, On = { composed: !0 };
    $t.getRootNode && (Gt = function(r) {
      return u.contains(r.ownerDocument, r) || r.getRootNode(On) === r.ownerDocument;
    });
    var In = function(r, s) {
      return r = s || r, r.style.display === "none" || r.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      Gt(r) && u.css(r, "display") === "none";
    };
    function ji(r, s, l, c) {
      var h, p, v = 20, k = c ? function() {
        return c.cur();
      } : function() {
        return u.css(r, s, "");
      }, S = k(), L = l && l[3] || (u.cssNumber[s] ? "" : "px"), H = r.nodeType && (u.cssNumber[s] || L !== "px" && +S) && rn.exec(u.css(r, s));
      if (H && H[3] !== L) {
        for (S = S / 2, L = L || H[3], H = +S || 1; v--; )
          u.style(r, s, H + L), (1 - p) * (1 - (p = k() / S || 0.5)) <= 0 && (v = 0), H = H / p;
        H = H * 2, u.style(r, s, H + L), l = l || [];
      }
      return l && (H = +H || +S || 0, h = l[1] ? H + (l[1] + 1) * l[2] : +l[2], c && (c.unit = L, c.start = H, c.end = h)), h;
    }
    var ye = {};
    function qe(r) {
      var s, l = r.ownerDocument, c = r.nodeName, h = ye[c];
      return h || (s = l.body.appendChild(l.createElement(c)), h = u.css(s, "display"), s.parentNode.removeChild(s), h === "none" && (h = "block"), ye[c] = h, h);
    }
    function Ue(r, s) {
      for (var l, c, h = [], p = 0, v = r.length; p < v; p++)
        c = r[p], c.style && (l = c.style.display, s ? (l === "none" && (h[p] = fe.get(c, "display") || null, h[p] || (c.style.display = "")), c.style.display === "" && In(c) && (h[p] = qe(c))) : l !== "none" && (h[p] = "none", fe.set(c, "display", l)));
      for (p = 0; p < v; p++)
        h[p] != null && (r[p].style.display = h[p]);
      return r;
    }
    u.fn.extend({
      show: function() {
        return Ue(this, !0);
      },
      hide: function() {
        return Ue(this);
      },
      toggle: function(r) {
        return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
          In(this) ? u(this).show() : u(this).hide();
        });
      }
    });
    var pn = /^(?:checkbox|radio)$/i, ar = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ri = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var r = D.createDocumentFragment(), s = r.appendChild(D.createElement("div")), l = D.createElement("input");
      l.setAttribute("type", "radio"), l.setAttribute("checked", "checked"), l.setAttribute("name", "t"), s.appendChild(l), x.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", x.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", x.option = !!s.lastChild;
    })();
    var an = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, x.option || (an.optgroup = an.option = [1, "<select multiple='multiple'>", "</select>"]);
    function Yt(r, s) {
      var l;
      return typeof r.getElementsByTagName < "u" ? l = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? l = r.querySelectorAll(s || "*") : l = [], s === void 0 || s && we(r, s) ? u.merge([r], l) : l;
    }
    function ns(r, s) {
      for (var l = 0, c = r.length; l < c; l++)
        fe.set(
          r[l],
          "globalEval",
          !s || fe.get(s[l], "globalEval")
        );
    }
    var Xd = /<|&#?\w+;/;
    function Sl(r, s, l, c, h) {
      for (var p, v, k, S, L, H, J = s.createDocumentFragment(), j = [], z = 0, Ce = r.length; z < Ce; z++)
        if (p = r[z], p || p === 0)
          if (A(p) === "object")
            u.merge(j, p.nodeType ? [p] : p);
          else if (!Xd.test(p))
            j.push(s.createTextNode(p));
          else {
            for (v = v || J.appendChild(s.createElement("div")), k = (ar.exec(p) || ["", ""])[1].toLowerCase(), S = an[k] || an._default, v.innerHTML = S[1] + u.htmlPrefilter(p) + S[2], H = S[0]; H--; )
              v = v.lastChild;
            u.merge(j, v.childNodes), v = J.firstChild, v.textContent = "";
          }
      for (J.textContent = "", z = 0; p = j[z++]; ) {
        if (c && u.inArray(p, c) > -1) {
          h && h.push(p);
          continue;
        }
        if (L = Gt(p), v = Yt(J.appendChild(p), "script"), L && ns(v), l)
          for (H = 0; p = v[H++]; )
            ri.test(p.type || "") && l.push(p);
      }
      return J;
    }
    var _l = /^([^.]*)(?:\.(.+)|)/;
    function Dr() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function Zd(r, s) {
      return r === Jd() == (s === "focus");
    }
    function Jd() {
      try {
        return D.activeElement;
      } catch {
      }
    }
    function rs(r, s, l, c, h, p) {
      var v, k;
      if (typeof s == "object") {
        typeof l != "string" && (c = c || l, l = void 0);
        for (k in s)
          rs(r, k, l, c, s[k], p);
        return r;
      }
      if (c == null && h == null ? (h = l, c = l = void 0) : h == null && (typeof l == "string" ? (h = c, c = void 0) : (h = c, c = l, l = void 0)), h === !1)
        h = Cr;
      else if (!h)
        return r;
      return p === 1 && (v = h, h = function(S) {
        return u().off(S), v.apply(this, arguments);
      }, h.guid = v.guid || (v.guid = u.guid++)), r.each(function() {
        u.event.add(this, s, h, c, l);
      });
    }
    u.event = {
      global: {},
      add: function(r, s, l, c, h) {
        var p, v, k, S, L, H, J, j, z, Ce, Ve, De = fe.get(r);
        if (de(r))
          for (l.handler && (p = l, l = p.handler, h = p.selector), h && u.find.matchesSelector($t, h), l.guid || (l.guid = u.guid++), (S = De.events) || (S = De.events = /* @__PURE__ */ Object.create(null)), (v = De.handle) || (v = De.handle = function(kt) {
            return typeof u < "u" && u.event.triggered !== kt.type ? u.event.dispatch.apply(r, arguments) : void 0;
          }), s = (s || "").match(Te) || [""], L = s.length; L--; )
            k = _l.exec(s[L]) || [], z = Ve = k[1], Ce = (k[2] || "").split(".").sort(), z && (J = u.event.special[z] || {}, z = (h ? J.delegateType : J.bindType) || z, J = u.event.special[z] || {}, H = u.extend({
              type: z,
              origType: Ve,
              data: c,
              handler: l,
              guid: l.guid,
              selector: h,
              needsContext: h && u.expr.match.needsContext.test(h),
              namespace: Ce.join(".")
            }, p), (j = S[z]) || (j = S[z] = [], j.delegateCount = 0, (!J.setup || J.setup.call(r, c, Ce, v) === !1) && r.addEventListener && r.addEventListener(z, v)), J.add && (J.add.call(r, H), H.handler.guid || (H.handler.guid = l.guid)), h ? j.splice(j.delegateCount++, 0, H) : j.push(H), u.event.global[z] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(r, s, l, c, h) {
        var p, v, k, S, L, H, J, j, z, Ce, Ve, De = fe.hasData(r) && fe.get(r);
        if (!(!De || !(S = De.events))) {
          for (s = (s || "").match(Te) || [""], L = s.length; L--; ) {
            if (k = _l.exec(s[L]) || [], z = Ve = k[1], Ce = (k[2] || "").split(".").sort(), !z) {
              for (z in S)
                u.event.remove(r, z + s[L], l, c, !0);
              continue;
            }
            for (J = u.event.special[z] || {}, z = (c ? J.delegateType : J.bindType) || z, j = S[z] || [], k = k[2] && new RegExp("(^|\\.)" + Ce.join("\\.(?:.*\\.|)") + "(\\.|$)"), v = p = j.length; p--; )
              H = j[p], (h || Ve === H.origType) && (!l || l.guid === H.guid) && (!k || k.test(H.namespace)) && (!c || c === H.selector || c === "**" && H.selector) && (j.splice(p, 1), H.selector && j.delegateCount--, J.remove && J.remove.call(r, H));
            v && !j.length && ((!J.teardown || J.teardown.call(r, Ce, De.handle) === !1) && u.removeEvent(r, z, De.handle), delete S[z]);
          }
          u.isEmptyObject(S) && fe.remove(r, "handle events");
        }
      },
      dispatch: function(r) {
        var s, l, c, h, p, v, k = new Array(arguments.length), S = u.event.fix(r), L = (fe.get(this, "events") || /* @__PURE__ */ Object.create(null))[S.type] || [], H = u.event.special[S.type] || {};
        for (k[0] = S, s = 1; s < arguments.length; s++)
          k[s] = arguments[s];
        if (S.delegateTarget = this, !(H.preDispatch && H.preDispatch.call(this, S) === !1)) {
          for (v = u.event.handlers.call(this, S, L), s = 0; (h = v[s++]) && !S.isPropagationStopped(); )
            for (S.currentTarget = h.elem, l = 0; (p = h.handlers[l++]) && !S.isImmediatePropagationStopped(); )
              (!S.rnamespace || p.namespace === !1 || S.rnamespace.test(p.namespace)) && (S.handleObj = p, S.data = p.data, c = ((u.event.special[p.origType] || {}).handle || p.handler).apply(h.elem, k), c !== void 0 && (S.result = c) === !1 && (S.preventDefault(), S.stopPropagation()));
          return H.postDispatch && H.postDispatch.call(this, S), S.result;
        }
      },
      handlers: function(r, s) {
        var l, c, h, p, v, k = [], S = s.delegateCount, L = r.target;
        if (S && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        L.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(r.type === "click" && r.button >= 1)) {
          for (; L !== this; L = L.parentNode || this)
            if (L.nodeType === 1 && !(r.type === "click" && L.disabled === !0)) {
              for (p = [], v = {}, l = 0; l < S; l++)
                c = s[l], h = c.selector + " ", v[h] === void 0 && (v[h] = c.needsContext ? u(h, this).index(L) > -1 : u.find(h, this, null, [L]).length), v[h] && p.push(c);
              p.length && k.push({ elem: L, handlers: p });
            }
        }
        return L = this, S < s.length && k.push({ elem: L, handlers: s.slice(S) }), k;
      },
      addProp: function(r, s) {
        Object.defineProperty(u.Event.prototype, r, {
          enumerable: !0,
          configurable: !0,
          get: C(s) ? function() {
            if (this.originalEvent)
              return s(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[r];
          },
          set: function(l) {
            Object.defineProperty(this, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: l
            });
          }
        });
      },
      fix: function(r) {
        return r[u.expando] ? r : new u.Event(r);
      },
      special: {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: !0
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(r) {
            var s = this || r;
            return pn.test(s.type) && s.click && we(s, "input") && Fi(s, "click", Dr), !1;
          },
          trigger: function(r) {
            var s = this || r;
            return pn.test(s.type) && s.click && we(s, "input") && Fi(s, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(r) {
            var s = r.target;
            return pn.test(s.type) && s.click && we(s, "input") && fe.get(s, "click") || we(s, "a");
          }
        },
        beforeunload: {
          postDispatch: function(r) {
            r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result);
          }
        }
      }
    };
    function Fi(r, s, l) {
      if (!l) {
        fe.get(r, s) === void 0 && u.event.add(r, s, Dr);
        return;
      }
      fe.set(r, s, !1), u.event.add(r, s, {
        namespace: !1,
        handler: function(c) {
          var h, p, v = fe.get(this, s);
          if (c.isTrigger & 1 && this[s]) {
            if (v.length)
              (u.event.special[s] || {}).delegateType && c.stopPropagation();
            else if (v = o.call(arguments), fe.set(this, s, v), h = l(this, s), this[s](), p = fe.get(this, s), v !== p || h ? fe.set(this, s, !1) : p = {}, v !== p)
              return c.stopImmediatePropagation(), c.preventDefault(), p && p.value;
          } else
            v.length && (fe.set(this, s, {
              value: u.event.trigger(
                // Support: IE <=9 - 11+
                // Extend with the prototype to reset the above stopImmediatePropagation()
                u.extend(v[0], u.Event.prototype),
                v.slice(1),
                this
              )
            }), c.stopImmediatePropagation());
        }
      });
    }
    u.removeEvent = function(r, s, l) {
      r.removeEventListener && r.removeEventListener(s, l);
    }, u.Event = function(r, s) {
      if (!(this instanceof u.Event))
        return new u.Event(r, s);
      r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && // Support: Android <=2.3 only
      r.returnValue === !1 ? Dr : Cr, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && u.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[u.expando] = !0;
    }, u.Event.prototype = {
      constructor: u.Event,
      isDefaultPrevented: Cr,
      isPropagationStopped: Cr,
      isImmediatePropagationStopped: Cr,
      isSimulated: !1,
      preventDefault: function() {
        var r = this.originalEvent;
        this.isDefaultPrevented = Dr, r && !this.isSimulated && r.preventDefault();
      },
      stopPropagation: function() {
        var r = this.originalEvent;
        this.isPropagationStopped = Dr, r && !this.isSimulated && r.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var r = this.originalEvent;
        this.isImmediatePropagationStopped = Dr, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation();
      }
    }, u.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, u.event.addProp), u.each({ focus: "focusin", blur: "focusout" }, function(r, s) {
      u.event.special[r] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          return Fi(this, r, Zd), !1;
        },
        trigger: function() {
          return Fi(this, r), !0;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(l) {
          return fe.get(l.target, r);
        },
        delegateType: s
      };
    }), u.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(r, s) {
      u.event.special[r] = {
        delegateType: s,
        bindType: s,
        handle: function(l) {
          var c, h = this, p = l.relatedTarget, v = l.handleObj;
          return (!p || p !== h && !u.contains(h, p)) && (l.type = v.origType, c = v.handler.apply(this, arguments), l.type = s), c;
        }
      };
    }), u.fn.extend({
      on: function(r, s, l, c) {
        return rs(this, r, s, l, c);
      },
      one: function(r, s, l, c) {
        return rs(this, r, s, l, c, 1);
      },
      off: function(r, s, l) {
        var c, h;
        if (r && r.preventDefault && r.handleObj)
          return c = r.handleObj, u(r.delegateTarget).off(
            c.namespace ? c.origType + "." + c.namespace : c.origType,
            c.selector,
            c.handler
          ), this;
        if (typeof r == "object") {
          for (h in r)
            this.off(h, s, r[h]);
          return this;
        }
        return (s === !1 || typeof s == "function") && (l = s, s = void 0), l === !1 && (l = Cr), this.each(function() {
          u.event.remove(this, r, l, s);
        });
      }
    });
    var Qd = /<script|<style|<link/i, eh = /checked\s*(?:[^=]|=\s*.checked.)/i, th = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function kl(r, s) {
      return we(r, "table") && we(s.nodeType !== 11 ? s : s.firstChild, "tr") && u(r).children("tbody")[0] || r;
    }
    function nh(r) {
      return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r;
    }
    function rh(r) {
      return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r;
    }
    function Tl(r, s) {
      var l, c, h, p, v, k, S;
      if (s.nodeType === 1) {
        if (fe.hasData(r) && (p = fe.get(r), S = p.events, S)) {
          fe.remove(s, "handle events");
          for (h in S)
            for (l = 0, c = S[h].length; l < c; l++)
              u.event.add(s, h, S[h][l]);
        }
        nt.hasData(r) && (v = nt.access(r), k = u.extend({}, v), nt.set(s, k));
      }
    }
    function ih(r, s) {
      var l = s.nodeName.toLowerCase();
      l === "input" && pn.test(r.type) ? s.checked = r.checked : (l === "input" || l === "textarea") && (s.defaultValue = r.defaultValue);
    }
    function Or(r, s, l, c) {
      s = f(s);
      var h, p, v, k, S, L, H = 0, J = r.length, j = J - 1, z = s[0], Ce = C(z);
      if (Ce || J > 1 && typeof z == "string" && !x.checkClone && eh.test(z))
        return r.each(function(Ve) {
          var De = r.eq(Ve);
          Ce && (s[0] = z.call(this, Ve, De.html())), Or(De, s, l, c);
        });
      if (J && (h = Sl(s, r[0].ownerDocument, !1, r, c), p = h.firstChild, h.childNodes.length === 1 && (h = p), p || c)) {
        for (v = u.map(Yt(h, "script"), nh), k = v.length; H < J; H++)
          S = h, H !== j && (S = u.clone(S, !0, !0), k && u.merge(v, Yt(S, "script"))), l.call(r[H], S, H);
        if (k)
          for (L = v[v.length - 1].ownerDocument, u.map(v, rh), H = 0; H < k; H++)
            S = v[H], ri.test(S.type || "") && !fe.access(S, "globalEval") && u.contains(L, S) && (S.src && (S.type || "").toLowerCase() !== "module" ? u._evalUrl && !S.noModule && u._evalUrl(S.src, {
              nonce: S.nonce || S.getAttribute("nonce")
            }, L) : I(S.textContent.replace(th, ""), S, L));
      }
      return r;
    }
    function Dl(r, s, l) {
      for (var c, h = s ? u.filter(s, r) : r, p = 0; (c = h[p]) != null; p++)
        !l && c.nodeType === 1 && u.cleanData(Yt(c)), c.parentNode && (l && Gt(c) && ns(Yt(c, "script")), c.parentNode.removeChild(c));
      return r;
    }
    u.extend({
      htmlPrefilter: function(r) {
        return r;
      },
      clone: function(r, s, l) {
        var c, h, p, v, k = r.cloneNode(!0), S = Gt(r);
        if (!x.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !u.isXMLDoc(r))
          for (v = Yt(k), p = Yt(r), c = 0, h = p.length; c < h; c++)
            ih(p[c], v[c]);
        if (s)
          if (l)
            for (p = p || Yt(r), v = v || Yt(k), c = 0, h = p.length; c < h; c++)
              Tl(p[c], v[c]);
          else
            Tl(r, k);
        return v = Yt(k, "script"), v.length > 0 && ns(v, !S && Yt(r, "script")), k;
      },
      cleanData: function(r) {
        for (var s, l, c, h = u.event.special, p = 0; (l = r[p]) !== void 0; p++)
          if (de(l)) {
            if (s = l[fe.expando]) {
              if (s.events)
                for (c in s.events)
                  h[c] ? u.event.remove(l, c) : u.removeEvent(l, c, s.handle);
              l[fe.expando] = void 0;
            }
            l[nt.expando] && (l[nt.expando] = void 0);
          }
      }
    }), u.fn.extend({
      detach: function(r) {
        return Dl(this, r, !0);
      },
      remove: function(r) {
        return Dl(this, r);
      },
      text: function(r) {
        return Se(this, function(s) {
          return s === void 0 ? u.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s);
          });
        }, null, r, arguments.length);
      },
      append: function() {
        return Or(this, arguments, function(r) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var s = kl(this, r);
            s.appendChild(r);
          }
        });
      },
      prepend: function() {
        return Or(this, arguments, function(r) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var s = kl(this, r);
            s.insertBefore(r, s.firstChild);
          }
        });
      },
      before: function() {
        return Or(this, arguments, function(r) {
          this.parentNode && this.parentNode.insertBefore(r, this);
        });
      },
      after: function() {
        return Or(this, arguments, function(r) {
          this.parentNode && this.parentNode.insertBefore(r, this.nextSibling);
        });
      },
      empty: function() {
        for (var r, s = 0; (r = this[s]) != null; s++)
          r.nodeType === 1 && (u.cleanData(Yt(r, !1)), r.textContent = "");
        return this;
      },
      clone: function(r, s) {
        return r = r ?? !1, s = s ?? r, this.map(function() {
          return u.clone(this, r, s);
        });
      },
      html: function(r) {
        return Se(this, function(s) {
          var l = this[0] || {}, c = 0, h = this.length;
          if (s === void 0 && l.nodeType === 1)
            return l.innerHTML;
          if (typeof s == "string" && !Qd.test(s) && !an[(ar.exec(s) || ["", ""])[1].toLowerCase()]) {
            s = u.htmlPrefilter(s);
            try {
              for (; c < h; c++)
                l = this[c] || {}, l.nodeType === 1 && (u.cleanData(Yt(l, !1)), l.innerHTML = s);
              l = 0;
            } catch {
            }
          }
          l && this.empty().append(s);
        }, null, r, arguments.length);
      },
      replaceWith: function() {
        var r = [];
        return Or(this, arguments, function(s) {
          var l = this.parentNode;
          u.inArray(this, r) < 0 && (u.cleanData(Yt(this)), l && l.replaceChild(s, this));
        }, r);
      }
    }), u.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(r, s) {
      u.fn[r] = function(l) {
        for (var c, h = [], p = u(l), v = p.length - 1, k = 0; k <= v; k++)
          c = k === v ? this : this.clone(!0), u(p[k])[s](c), d.apply(h, c.get());
        return this.pushStack(h);
      };
    });
    var is = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"), as = /^--/, Hi = function(r) {
      var s = r.ownerDocument.defaultView;
      return (!s || !s.opener) && (s = t), s.getComputedStyle(r);
    }, Cl = function(r, s, l) {
      var c, h, p = {};
      for (h in s)
        p[h] = r.style[h], r.style[h] = s[h];
      c = l.call(r);
      for (h in s)
        r.style[h] = p[h];
      return c;
    }, ah = new RegExp(xt.join("|"), "i"), Ol = "[\\x20\\t\\r\\n\\f]", sh = new RegExp(
      "^" + Ol + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ol + "+$",
      "g"
    );
    (function() {
      function r() {
        if (L) {
          S.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", L.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", $t.appendChild(S).appendChild(L);
          var H = t.getComputedStyle(L);
          l = H.top !== "1%", k = s(H.marginLeft) === 12, L.style.right = "60%", p = s(H.right) === 36, c = s(H.width) === 36, L.style.position = "absolute", h = s(L.offsetWidth / 3) === 12, $t.removeChild(S), L = null;
        }
      }
      function s(H) {
        return Math.round(parseFloat(H));
      }
      var l, c, h, p, v, k, S = D.createElement("div"), L = D.createElement("div");
      L.style && (L.style.backgroundClip = "content-box", L.cloneNode(!0).style.backgroundClip = "", x.clearCloneStyle = L.style.backgroundClip === "content-box", u.extend(x, {
        boxSizingReliable: function() {
          return r(), c;
        },
        pixelBoxStyles: function() {
          return r(), p;
        },
        pixelPosition: function() {
          return r(), l;
        },
        reliableMarginLeft: function() {
          return r(), k;
        },
        scrollboxSize: function() {
          return r(), h;
        },
        // Support: IE 9 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Behavior in IE 9 is more subtle than in newer versions & it passes
        // some versions of this test; make sure not to make it pass there!
        //
        // Support: Firefox 70+
        // Only Firefox includes border widths
        // in computed dimensions. (gh-4529)
        reliableTrDimensions: function() {
          var H, J, j, z;
          return v == null && (H = D.createElement("table"), J = D.createElement("tr"), j = D.createElement("div"), H.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", J.style.cssText = "border:1px solid", J.style.height = "1px", j.style.height = "9px", j.style.display = "block", $t.appendChild(H).appendChild(J).appendChild(j), z = t.getComputedStyle(J), v = parseInt(z.height, 10) + parseInt(z.borderTopWidth, 10) + parseInt(z.borderBottomWidth, 10) === J.offsetHeight, $t.removeChild(H)), v;
        }
      }));
    })();
    function ii(r, s, l) {
      var c, h, p, v, k = as.test(s), S = r.style;
      return l = l || Hi(r), l && (v = l.getPropertyValue(s) || l[s], k && v && (v = v.replace(sh, "$1") || void 0), v === "" && !Gt(r) && (v = u.style(r, s)), !x.pixelBoxStyles() && is.test(v) && ah.test(s) && (c = S.width, h = S.minWidth, p = S.maxWidth, S.minWidth = S.maxWidth = S.width = v, v = l.width, S.width = c, S.minWidth = h, S.maxWidth = p)), v !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        v + ""
      ) : v;
    }
    function Ml(r, s) {
      return {
        get: function() {
          if (r()) {
            delete this.get;
            return;
          }
          return (this.get = s).apply(this, arguments);
        }
      };
    }
    var $l = ["Webkit", "Moz", "ms"], Pl = D.createElement("div").style, Al = {};
    function oh(r) {
      for (var s = r[0].toUpperCase() + r.slice(1), l = $l.length; l--; )
        if (r = $l[l] + s, r in Pl)
          return r;
    }
    function ss(r) {
      var s = u.cssProps[r] || Al[r];
      return s || (r in Pl ? r : Al[r] = oh(r) || r);
    }
    var lh = /^(none|table(?!-c[ea]).+)/, uh = { position: "absolute", visibility: "hidden", display: "block" }, El = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Nl(r, s, l) {
      var c = rn.exec(s);
      return c ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, c[2] - (l || 0)) + (c[3] || "px")
      ) : s;
    }
    function os(r, s, l, c, h, p) {
      var v = s === "width" ? 1 : 0, k = 0, S = 0;
      if (l === (c ? "border" : "content"))
        return 0;
      for (; v < 4; v += 2)
        l === "margin" && (S += u.css(r, l + xt[v], !0, h)), c ? (l === "content" && (S -= u.css(r, "padding" + xt[v], !0, h)), l !== "margin" && (S -= u.css(r, "border" + xt[v] + "Width", !0, h))) : (S += u.css(r, "padding" + xt[v], !0, h), l !== "padding" ? S += u.css(r, "border" + xt[v] + "Width", !0, h) : k += u.css(r, "border" + xt[v] + "Width", !0, h));
      return !c && p >= 0 && (S += Math.max(0, Math.ceil(
        r["offset" + s[0].toUpperCase() + s.slice(1)] - p - S - k - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), S;
    }
    function Ll(r, s, l) {
      var c = Hi(r), h = !x.boxSizingReliable() || l, p = h && u.css(r, "boxSizing", !1, c) === "border-box", v = p, k = ii(r, s, c), S = "offset" + s[0].toUpperCase() + s.slice(1);
      if (is.test(k)) {
        if (!l)
          return k;
        k = "auto";
      }
      return (!x.boxSizingReliable() && p || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !x.reliableTrDimensions() && we(r, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      k === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(k) && u.css(r, "display", !1, c) === "inline") && // Make sure the element is visible & connected
      r.getClientRects().length && (p = u.css(r, "boxSizing", !1, c) === "border-box", v = S in r, v && (k = r[S])), k = parseFloat(k) || 0, k + os(
        r,
        s,
        l || (p ? "border" : "content"),
        v,
        c,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        k
      ) + "px";
    }
    u.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function(r, s) {
            if (s) {
              var l = ii(r, "opacity");
              return l === "" ? "1" : l;
            }
          }
        }
      },
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
      // Get and set the style property on a DOM Node
      style: function(r, s, l, c) {
        if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
          var h, p, v, k = P(s), S = as.test(s), L = r.style;
          if (S || (s = ss(k)), v = u.cssHooks[s] || u.cssHooks[k], l !== void 0) {
            if (p = typeof l, p === "string" && (h = rn.exec(l)) && h[1] && (l = ji(r, s, h), p = "number"), l == null || l !== l)
              return;
            p === "number" && !S && (l += h && h[3] || (u.cssNumber[k] ? "" : "px")), !x.clearCloneStyle && l === "" && s.indexOf("background") === 0 && (L[s] = "inherit"), (!v || !("set" in v) || (l = v.set(r, l, c)) !== void 0) && (S ? L.setProperty(s, l) : L[s] = l);
          } else
            return v && "get" in v && (h = v.get(r, !1, c)) !== void 0 ? h : L[s];
        }
      },
      css: function(r, s, l, c) {
        var h, p, v, k = P(s), S = as.test(s);
        return S || (s = ss(k)), v = u.cssHooks[s] || u.cssHooks[k], v && "get" in v && (h = v.get(r, !0, l)), h === void 0 && (h = ii(r, s, c)), h === "normal" && s in El && (h = El[s]), l === "" || l ? (p = parseFloat(h), l === !0 || isFinite(p) ? p || 0 : h) : h;
      }
    }), u.each(["height", "width"], function(r, s) {
      u.cssHooks[s] = {
        get: function(l, c, h) {
          if (c)
            return lh.test(u.css(l, "display")) && // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            (!l.getClientRects().length || !l.getBoundingClientRect().width) ? Cl(l, uh, function() {
              return Ll(l, s, h);
            }) : Ll(l, s, h);
        },
        set: function(l, c, h) {
          var p, v = Hi(l), k = !x.scrollboxSize() && v.position === "absolute", S = k || h, L = S && u.css(l, "boxSizing", !1, v) === "border-box", H = h ? os(
            l,
            s,
            h,
            L,
            v
          ) : 0;
          return L && k && (H -= Math.ceil(
            l["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(v[s]) - os(l, s, "border", !1, v) - 0.5
          )), H && (p = rn.exec(c)) && (p[3] || "px") !== "px" && (l.style[s] = c, c = u.css(l, s)), Nl(l, c, H);
        }
      };
    }), u.cssHooks.marginLeft = Ml(
      x.reliableMarginLeft,
      function(r, s) {
        if (s)
          return (parseFloat(ii(r, "marginLeft")) || r.getBoundingClientRect().left - Cl(r, { marginLeft: 0 }, function() {
            return r.getBoundingClientRect().left;
          })) + "px";
      }
    ), u.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(r, s) {
      u.cssHooks[r + s] = {
        expand: function(l) {
          for (var c = 0, h = {}, p = typeof l == "string" ? l.split(" ") : [l]; c < 4; c++)
            h[r + xt[c] + s] = p[c] || p[c - 2] || p[0];
          return h;
        }
      }, r !== "margin" && (u.cssHooks[r + s].set = Nl);
    }), u.fn.extend({
      css: function(r, s) {
        return Se(this, function(l, c, h) {
          var p, v, k = {}, S = 0;
          if (Array.isArray(c)) {
            for (p = Hi(l), v = c.length; S < v; S++)
              k[c[S]] = u.css(l, c[S], !1, p);
            return k;
          }
          return h !== void 0 ? u.style(l, c, h) : u.css(l, c);
        }, r, s, arguments.length > 1);
      }
    });
    function jt(r, s, l, c, h) {
      return new jt.prototype.init(r, s, l, c, h);
    }
    u.Tween = jt, jt.prototype = {
      constructor: jt,
      init: function(r, s, l, c, h, p) {
        this.elem = r, this.prop = l, this.easing = h || u.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = c, this.unit = p || (u.cssNumber[l] ? "" : "px");
      },
      cur: function() {
        var r = jt.propHooks[this.prop];
        return r && r.get ? r.get(this) : jt.propHooks._default.get(this);
      },
      run: function(r) {
        var s, l = jt.propHooks[this.prop];
        return this.options.duration ? this.pos = s = u.easing[this.easing](
          r,
          this.options.duration * r,
          0,
          1,
          this.options.duration
        ) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), l && l.set ? l.set(this) : jt.propHooks._default.set(this), this;
      }
    }, jt.prototype.init.prototype = jt.prototype, jt.propHooks = {
      _default: {
        get: function(r) {
          var s;
          return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = u.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s);
        },
        set: function(r) {
          u.fx.step[r.prop] ? u.fx.step[r.prop](r) : r.elem.nodeType === 1 && (u.cssHooks[r.prop] || r.elem.style[ss(r.prop)] != null) ? u.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now;
        }
      }
    }, jt.propHooks.scrollTop = jt.propHooks.scrollLeft = {
      set: function(r) {
        r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
      }
    }, u.easing = {
      linear: function(r) {
        return r;
      },
      swing: function(r) {
        return 0.5 - Math.cos(r * Math.PI) / 2;
      },
      _default: "swing"
    }, u.fx = jt.prototype.init, u.fx.step = {};
    var Mr, Vi, fh = /^(?:toggle|show|hide)$/, ch = /queueHooks$/;
    function ls() {
      Vi && (D.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(ls) : t.setTimeout(ls, u.fx.interval), u.fx.tick());
    }
    function Rl() {
      return t.setTimeout(function() {
        Mr = void 0;
      }), Mr = Date.now();
    }
    function Wi(r, s) {
      var l, c = 0, h = { height: r };
      for (s = s ? 1 : 0; c < 4; c += 2 - s)
        l = xt[c], h["margin" + l] = h["padding" + l] = r;
      return s && (h.opacity = h.width = r), h;
    }
    function xl(r, s, l) {
      for (var c, h = (mn.tweeners[s] || []).concat(mn.tweeners["*"]), p = 0, v = h.length; p < v; p++)
        if (c = h[p].call(l, s, r))
          return c;
    }
    function dh(r, s, l) {
      var c, h, p, v, k, S, L, H, J = "width" in s || "height" in s, j = this, z = {}, Ce = r.style, Ve = r.nodeType && In(r), De = fe.get(r, "fxshow");
      l.queue || (v = u._queueHooks(r, "fx"), v.unqueued == null && (v.unqueued = 0, k = v.empty.fire, v.empty.fire = function() {
        v.unqueued || k();
      }), v.unqueued++, j.always(function() {
        j.always(function() {
          v.unqueued--, u.queue(r, "fx").length || v.empty.fire();
        });
      }));
      for (c in s)
        if (h = s[c], fh.test(h)) {
          if (delete s[c], p = p || h === "toggle", h === (Ve ? "hide" : "show"))
            if (h === "show" && De && De[c] !== void 0)
              Ve = !0;
            else
              continue;
          z[c] = De && De[c] || u.style(r, c);
        }
      if (S = !u.isEmptyObject(s), !(!S && u.isEmptyObject(z))) {
        J && r.nodeType === 1 && (l.overflow = [Ce.overflow, Ce.overflowX, Ce.overflowY], L = De && De.display, L == null && (L = fe.get(r, "display")), H = u.css(r, "display"), H === "none" && (L ? H = L : (Ue([r], !0), L = r.style.display || L, H = u.css(r, "display"), Ue([r]))), (H === "inline" || H === "inline-block" && L != null) && u.css(r, "float") === "none" && (S || (j.done(function() {
          Ce.display = L;
        }), L == null && (H = Ce.display, L = H === "none" ? "" : H)), Ce.display = "inline-block")), l.overflow && (Ce.overflow = "hidden", j.always(function() {
          Ce.overflow = l.overflow[0], Ce.overflowX = l.overflow[1], Ce.overflowY = l.overflow[2];
        })), S = !1;
        for (c in z)
          S || (De ? "hidden" in De && (Ve = De.hidden) : De = fe.access(r, "fxshow", { display: L }), p && (De.hidden = !Ve), Ve && Ue([r], !0), j.done(function() {
            Ve || Ue([r]), fe.remove(r, "fxshow");
            for (c in z)
              u.style(r, c, z[c]);
          })), S = xl(Ve ? De[c] : 0, c, j), c in De || (De[c] = S.start, Ve && (S.end = S.start, S.start = 0));
      }
    }
    function hh(r, s) {
      var l, c, h, p, v;
      for (l in r)
        if (c = P(l), h = s[c], p = r[l], Array.isArray(p) && (h = p[1], p = r[l] = p[0]), l !== c && (r[c] = p, delete r[l]), v = u.cssHooks[c], v && "expand" in v) {
          p = v.expand(p), delete r[c];
          for (l in p)
            l in r || (r[l] = p[l], s[l] = h);
        } else
          s[c] = h;
    }
    function mn(r, s, l) {
      var c, h, p = 0, v = mn.prefilters.length, k = u.Deferred().always(function() {
        delete S.elem;
      }), S = function() {
        if (h)
          return !1;
        for (var J = Mr || Rl(), j = Math.max(0, L.startTime + L.duration - J), z = j / L.duration || 0, Ce = 1 - z, Ve = 0, De = L.tweens.length; Ve < De; Ve++)
          L.tweens[Ve].run(Ce);
        return k.notifyWith(r, [L, Ce, j]), Ce < 1 && De ? j : (De || k.notifyWith(r, [L, 1, 0]), k.resolveWith(r, [L]), !1);
      }, L = k.promise({
        elem: r,
        props: u.extend({}, s),
        opts: u.extend(!0, {
          specialEasing: {},
          easing: u.easing._default
        }, l),
        originalProperties: s,
        originalOptions: l,
        startTime: Mr || Rl(),
        duration: l.duration,
        tweens: [],
        createTween: function(J, j) {
          var z = u.Tween(
            r,
            L.opts,
            J,
            j,
            L.opts.specialEasing[J] || L.opts.easing
          );
          return L.tweens.push(z), z;
        },
        stop: function(J) {
          var j = 0, z = J ? L.tweens.length : 0;
          if (h)
            return this;
          for (h = !0; j < z; j++)
            L.tweens[j].run(1);
          return J ? (k.notifyWith(r, [L, 1, 0]), k.resolveWith(r, [L, J])) : k.rejectWith(r, [L, J]), this;
        }
      }), H = L.props;
      for (hh(H, L.opts.specialEasing); p < v; p++)
        if (c = mn.prefilters[p].call(L, r, H, L.opts), c)
          return C(c.stop) && (u._queueHooks(L.elem, L.opts.queue).stop = c.stop.bind(c)), c;
      return u.map(H, xl, L), C(L.opts.start) && L.opts.start.call(r, L), L.progress(L.opts.progress).done(L.opts.done, L.opts.complete).fail(L.opts.fail).always(L.opts.always), u.fx.timer(
        u.extend(S, {
          elem: r,
          anim: L,
          queue: L.opts.queue
        })
      ), L;
    }
    u.Animation = u.extend(mn, {
      tweeners: {
        "*": [function(r, s) {
          var l = this.createTween(r, s);
          return ji(l.elem, r, rn.exec(s), l), l;
        }]
      },
      tweener: function(r, s) {
        C(r) ? (s = r, r = ["*"]) : r = r.match(Te);
        for (var l, c = 0, h = r.length; c < h; c++)
          l = r[c], mn.tweeners[l] = mn.tweeners[l] || [], mn.tweeners[l].unshift(s);
      },
      prefilters: [dh],
      prefilter: function(r, s) {
        s ? mn.prefilters.unshift(r) : mn.prefilters.push(r);
      }
    }), u.speed = function(r, s, l) {
      var c = r && typeof r == "object" ? u.extend({}, r) : {
        complete: l || !l && s || C(r) && r,
        duration: r,
        easing: l && s || s && !C(s) && s
      };
      return u.fx.off ? c.duration = 0 : typeof c.duration != "number" && (c.duration in u.fx.speeds ? c.duration = u.fx.speeds[c.duration] : c.duration = u.fx.speeds._default), (c.queue == null || c.queue === !0) && (c.queue = "fx"), c.old = c.complete, c.complete = function() {
        C(c.old) && c.old.call(this), c.queue && u.dequeue(this, c.queue);
      }, c;
    }, u.fn.extend({
      fadeTo: function(r, s, l, c) {
        return this.filter(In).css("opacity", 0).show().end().animate({ opacity: s }, r, l, c);
      },
      animate: function(r, s, l, c) {
        var h = u.isEmptyObject(r), p = u.speed(s, l, c), v = function() {
          var k = mn(this, u.extend({}, r), p);
          (h || fe.get(this, "finish")) && k.stop(!0);
        };
        return v.finish = v, h || p.queue === !1 ? this.each(v) : this.queue(p.queue, v);
      },
      stop: function(r, s, l) {
        var c = function(h) {
          var p = h.stop;
          delete h.stop, p(l);
        };
        return typeof r != "string" && (l = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
          var h = !0, p = r != null && r + "queueHooks", v = u.timers, k = fe.get(this);
          if (p)
            k[p] && k[p].stop && c(k[p]);
          else
            for (p in k)
              k[p] && k[p].stop && ch.test(p) && c(k[p]);
          for (p = v.length; p--; )
            v[p].elem === this && (r == null || v[p].queue === r) && (v[p].anim.stop(l), h = !1, v.splice(p, 1));
          (h || !l) && u.dequeue(this, r);
        });
      },
      finish: function(r) {
        return r !== !1 && (r = r || "fx"), this.each(function() {
          var s, l = fe.get(this), c = l[r + "queue"], h = l[r + "queueHooks"], p = u.timers, v = c ? c.length : 0;
          for (l.finish = !0, u.queue(this, r, []), h && h.stop && h.stop.call(this, !0), s = p.length; s--; )
            p[s].elem === this && p[s].queue === r && (p[s].anim.stop(!0), p.splice(s, 1));
          for (s = 0; s < v; s++)
            c[s] && c[s].finish && c[s].finish.call(this);
          delete l.finish;
        });
      }
    }), u.each(["toggle", "show", "hide"], function(r, s) {
      var l = u.fn[s];
      u.fn[s] = function(c, h, p) {
        return c == null || typeof c == "boolean" ? l.apply(this, arguments) : this.animate(Wi(s, !0), c, h, p);
      };
    }), u.each({
      slideDown: Wi("show"),
      slideUp: Wi("hide"),
      slideToggle: Wi("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(r, s) {
      u.fn[r] = function(l, c, h) {
        return this.animate(s, l, c, h);
      };
    }), u.timers = [], u.fx.tick = function() {
      var r, s = 0, l = u.timers;
      for (Mr = Date.now(); s < l.length; s++)
        r = l[s], !r() && l[s] === r && l.splice(s--, 1);
      l.length || u.fx.stop(), Mr = void 0;
    }, u.fx.timer = function(r) {
      u.timers.push(r), u.fx.start();
    }, u.fx.interval = 13, u.fx.start = function() {
      Vi || (Vi = !0, ls());
    }, u.fx.stop = function() {
      Vi = null;
    }, u.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }, u.fn.delay = function(r, s) {
      return r = u.fx && u.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(l, c) {
        var h = t.setTimeout(l, r);
        c.stop = function() {
          t.clearTimeout(h);
        };
      });
    }, function() {
      var r = D.createElement("input"), s = D.createElement("select"), l = s.appendChild(D.createElement("option"));
      r.type = "checkbox", x.checkOn = r.value !== "", x.optSelected = l.selected, r = D.createElement("input"), r.value = "t", r.type = "radio", x.radioValue = r.value === "t";
    }();
    var Il, ai = u.expr.attrHandle;
    u.fn.extend({
      attr: function(r, s) {
        return Se(this, u.attr, r, s, arguments.length > 1);
      },
      removeAttr: function(r) {
        return this.each(function() {
          u.removeAttr(this, r);
        });
      }
    }), u.extend({
      attr: function(r, s, l) {
        var c, h, p = r.nodeType;
        if (!(p === 3 || p === 8 || p === 2)) {
          if (typeof r.getAttribute > "u")
            return u.prop(r, s, l);
          if ((p !== 1 || !u.isXMLDoc(r)) && (h = u.attrHooks[s.toLowerCase()] || (u.expr.match.bool.test(s) ? Il : void 0)), l !== void 0) {
            if (l === null) {
              u.removeAttr(r, s);
              return;
            }
            return h && "set" in h && (c = h.set(r, l, s)) !== void 0 ? c : (r.setAttribute(s, l + ""), l);
          }
          return h && "get" in h && (c = h.get(r, s)) !== null ? c : (c = u.find.attr(r, s), c ?? void 0);
        }
      },
      attrHooks: {
        type: {
          set: function(r, s) {
            if (!x.radioValue && s === "radio" && we(r, "input")) {
              var l = r.value;
              return r.setAttribute("type", s), l && (r.value = l), s;
            }
          }
        }
      },
      removeAttr: function(r, s) {
        var l, c = 0, h = s && s.match(Te);
        if (h && r.nodeType === 1)
          for (; l = h[c++]; )
            r.removeAttribute(l);
      }
    }), Il = {
      set: function(r, s, l) {
        return s === !1 ? u.removeAttr(r, l) : r.setAttribute(l, l), l;
      }
    }, u.each(u.expr.match.bool.source.match(/\w+/g), function(r, s) {
      var l = ai[s] || u.find.attr;
      ai[s] = function(c, h, p) {
        var v, k, S = h.toLowerCase();
        return p || (k = ai[S], ai[S] = v, v = l(c, h, p) != null ? S : null, ai[S] = k), v;
      };
    });
    var ph = /^(?:input|select|textarea|button)$/i, mh = /^(?:a|area)$/i;
    u.fn.extend({
      prop: function(r, s) {
        return Se(this, u.prop, r, s, arguments.length > 1);
      },
      removeProp: function(r) {
        return this.each(function() {
          delete this[u.propFix[r] || r];
        });
      }
    }), u.extend({
      prop: function(r, s, l) {
        var c, h, p = r.nodeType;
        if (!(p === 3 || p === 8 || p === 2))
          return (p !== 1 || !u.isXMLDoc(r)) && (s = u.propFix[s] || s, h = u.propHooks[s]), l !== void 0 ? h && "set" in h && (c = h.set(r, l, s)) !== void 0 ? c : r[s] = l : h && "get" in h && (c = h.get(r, s)) !== null ? c : r[s];
      },
      propHooks: {
        tabIndex: {
          get: function(r) {
            var s = u.find.attr(r, "tabindex");
            return s ? parseInt(s, 10) : ph.test(r.nodeName) || mh.test(r.nodeName) && r.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), x.optSelected || (u.propHooks.selected = {
      get: function(r) {
        var s = r.parentNode;
        return s && s.parentNode && s.parentNode.selectedIndex, null;
      },
      set: function(r) {
        var s = r.parentNode;
        s && (s.selectedIndex, s.parentNode && s.parentNode.selectedIndex);
      }
    }), u.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      u.propFix[this.toLowerCase()] = this;
    });
    function sr(r) {
      var s = r.match(Te) || [];
      return s.join(" ");
    }
    function or(r) {
      return r.getAttribute && r.getAttribute("class") || "";
    }
    function us(r) {
      return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : [];
    }
    u.fn.extend({
      addClass: function(r) {
        var s, l, c, h, p, v;
        return C(r) ? this.each(function(k) {
          u(this).addClass(r.call(this, k, or(this)));
        }) : (s = us(r), s.length ? this.each(function() {
          if (c = or(this), l = this.nodeType === 1 && " " + sr(c) + " ", l) {
            for (p = 0; p < s.length; p++)
              h = s[p], l.indexOf(" " + h + " ") < 0 && (l += h + " ");
            v = sr(l), c !== v && this.setAttribute("class", v);
          }
        }) : this);
      },
      removeClass: function(r) {
        var s, l, c, h, p, v;
        return C(r) ? this.each(function(k) {
          u(this).removeClass(r.call(this, k, or(this)));
        }) : arguments.length ? (s = us(r), s.length ? this.each(function() {
          if (c = or(this), l = this.nodeType === 1 && " " + sr(c) + " ", l) {
            for (p = 0; p < s.length; p++)
              for (h = s[p]; l.indexOf(" " + h + " ") > -1; )
                l = l.replace(" " + h + " ", " ");
            v = sr(l), c !== v && this.setAttribute("class", v);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(r, s) {
        var l, c, h, p, v = typeof r, k = v === "string" || Array.isArray(r);
        return C(r) ? this.each(function(S) {
          u(this).toggleClass(
            r.call(this, S, or(this), s),
            s
          );
        }) : typeof s == "boolean" && k ? s ? this.addClass(r) : this.removeClass(r) : (l = us(r), this.each(function() {
          if (k)
            for (p = u(this), h = 0; h < l.length; h++)
              c = l[h], p.hasClass(c) ? p.removeClass(c) : p.addClass(c);
          else
            (r === void 0 || v === "boolean") && (c = or(this), c && fe.set(this, "__className__", c), this.setAttribute && this.setAttribute(
              "class",
              c || r === !1 ? "" : fe.get(this, "__className__") || ""
            ));
        }));
      },
      hasClass: function(r) {
        var s, l, c = 0;
        for (s = " " + r + " "; l = this[c++]; )
          if (l.nodeType === 1 && (" " + sr(or(l)) + " ").indexOf(s) > -1)
            return !0;
        return !1;
      }
    });
    var vh = /\r/g;
    u.fn.extend({
      val: function(r) {
        var s, l, c, h = this[0];
        return arguments.length ? (c = C(r), this.each(function(p) {
          var v;
          this.nodeType === 1 && (c ? v = r.call(this, p, u(this).val()) : v = r, v == null ? v = "" : typeof v == "number" ? v += "" : Array.isArray(v) && (v = u.map(v, function(k) {
            return k == null ? "" : k + "";
          })), s = u.valHooks[this.type] || u.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, v, "value") === void 0) && (this.value = v));
        })) : h ? (s = u.valHooks[h.type] || u.valHooks[h.nodeName.toLowerCase()], s && "get" in s && (l = s.get(h, "value")) !== void 0 ? l : (l = h.value, typeof l == "string" ? l.replace(vh, "") : l ?? "")) : void 0;
      }
    }), u.extend({
      valHooks: {
        option: {
          get: function(r) {
            var s = u.find.attr(r, "value");
            return s ?? // Support: IE <=10 - 11 only
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            sr(u.text(r));
          }
        },
        select: {
          get: function(r) {
            var s, l, c, h = r.options, p = r.selectedIndex, v = r.type === "select-one", k = v ? null : [], S = v ? p + 1 : h.length;
            for (p < 0 ? c = S : c = v ? p : 0; c < S; c++)
              if (l = h[c], (l.selected || c === p) && // Don't return options that are disabled or in a disabled optgroup
              !l.disabled && (!l.parentNode.disabled || !we(l.parentNode, "optgroup"))) {
                if (s = u(l).val(), v)
                  return s;
                k.push(s);
              }
            return k;
          },
          set: function(r, s) {
            for (var l, c, h = r.options, p = u.makeArray(s), v = h.length; v--; )
              c = h[v], (c.selected = u.inArray(u.valHooks.option.get(c), p) > -1) && (l = !0);
            return l || (r.selectedIndex = -1), p;
          }
        }
      }
    }), u.each(["radio", "checkbox"], function() {
      u.valHooks[this] = {
        set: function(r, s) {
          if (Array.isArray(s))
            return r.checked = u.inArray(u(r).val(), s) > -1;
        }
      }, x.checkOn || (u.valHooks[this].get = function(r) {
        return r.getAttribute("value") === null ? "on" : r.value;
      });
    }), x.focusin = "onfocusin" in t;
    var Yl = /^(?:focusinfocus|focusoutblur)$/, jl = function(r) {
      r.stopPropagation();
    };
    u.extend(u.event, {
      trigger: function(r, s, l, c) {
        var h, p, v, k, S, L, H, J, j = [l || D], z = b.call(r, "type") ? r.type : r, Ce = b.call(r, "namespace") ? r.namespace.split(".") : [];
        if (p = J = v = l = l || D, !(l.nodeType === 3 || l.nodeType === 8) && !Yl.test(z + u.event.triggered) && (z.indexOf(".") > -1 && (Ce = z.split("."), z = Ce.shift(), Ce.sort()), S = z.indexOf(":") < 0 && "on" + z, r = r[u.expando] ? r : new u.Event(z, typeof r == "object" && r), r.isTrigger = c ? 2 : 3, r.namespace = Ce.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ce.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = l), s = s == null ? [r] : u.makeArray(s, [r]), H = u.event.special[z] || {}, !(!c && H.trigger && H.trigger.apply(l, s) === !1))) {
          if (!c && !H.noBubble && !$(l)) {
            for (k = H.delegateType || z, Yl.test(k + z) || (p = p.parentNode); p; p = p.parentNode)
              j.push(p), v = p;
            v === (l.ownerDocument || D) && j.push(v.defaultView || v.parentWindow || t);
          }
          for (h = 0; (p = j[h++]) && !r.isPropagationStopped(); )
            J = p, r.type = h > 1 ? k : H.bindType || z, L = (fe.get(p, "events") || /* @__PURE__ */ Object.create(null))[r.type] && fe.get(p, "handle"), L && L.apply(p, s), L = S && p[S], L && L.apply && de(p) && (r.result = L.apply(p, s), r.result === !1 && r.preventDefault());
          return r.type = z, !c && !r.isDefaultPrevented() && (!H._default || H._default.apply(j.pop(), s) === !1) && de(l) && S && C(l[z]) && !$(l) && (v = l[S], v && (l[S] = null), u.event.triggered = z, r.isPropagationStopped() && J.addEventListener(z, jl), l[z](), r.isPropagationStopped() && J.removeEventListener(z, jl), u.event.triggered = void 0, v && (l[S] = v)), r.result;
        }
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(r, s, l) {
        var c = u.extend(
          new u.Event(),
          l,
          {
            type: r,
            isSimulated: !0
          }
        );
        u.event.trigger(c, null, s);
      }
    }), u.fn.extend({
      trigger: function(r, s) {
        return this.each(function() {
          u.event.trigger(r, s, this);
        });
      },
      triggerHandler: function(r, s) {
        var l = this[0];
        if (l)
          return u.event.trigger(r, s, l, !0);
      }
    }), x.focusin || u.each({ focus: "focusin", blur: "focusout" }, function(r, s) {
      var l = function(c) {
        u.event.simulate(s, c.target, u.event.fix(c));
      };
      u.event.special[s] = {
        setup: function() {
          var c = this.ownerDocument || this.document || this, h = fe.access(c, s);
          h || c.addEventListener(r, l, !0), fe.access(c, s, (h || 0) + 1);
        },
        teardown: function() {
          var c = this.ownerDocument || this.document || this, h = fe.access(c, s) - 1;
          h ? fe.access(c, s, h) : (c.removeEventListener(r, l, !0), fe.remove(c, s));
        }
      };
    });
    var si = t.location, Fl = { guid: Date.now() }, fs = /\?/;
    u.parseXML = function(r) {
      var s, l;
      if (!r || typeof r != "string")
        return null;
      try {
        s = new t.DOMParser().parseFromString(r, "text/xml");
      } catch {
      }
      return l = s && s.getElementsByTagName("parsererror")[0], (!s || l) && u.error("Invalid XML: " + (l ? u.map(l.childNodes, function(c) {
        return c.textContent;
      }).join(`
`) : r)), s;
    };
    var gh = /\[\]$/, Hl = /\r?\n/g, yh = /^(?:submit|button|image|reset|file)$/i, bh = /^(?:input|select|textarea|keygen)/i;
    function cs(r, s, l, c) {
      var h;
      if (Array.isArray(s))
        u.each(s, function(p, v) {
          l || gh.test(r) ? c(r, v) : cs(
            r + "[" + (typeof v == "object" && v != null ? p : "") + "]",
            v,
            l,
            c
          );
        });
      else if (!l && A(s) === "object")
        for (h in s)
          cs(r + "[" + h + "]", s[h], l, c);
      else
        c(r, s);
    }
    u.param = function(r, s) {
      var l, c = [], h = function(p, v) {
        var k = C(v) ? v() : v;
        c[c.length] = encodeURIComponent(p) + "=" + encodeURIComponent(k ?? "");
      };
      if (r == null)
        return "";
      if (Array.isArray(r) || r.jquery && !u.isPlainObject(r))
        u.each(r, function() {
          h(this.name, this.value);
        });
      else
        for (l in r)
          cs(l, r[l], s, h);
      return c.join("&");
    }, u.fn.extend({
      serialize: function() {
        return u.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var r = u.prop(this, "elements");
          return r ? u.makeArray(r) : this;
        }).filter(function() {
          var r = this.type;
          return this.name && !u(this).is(":disabled") && bh.test(this.nodeName) && !yh.test(r) && (this.checked || !pn.test(r));
        }).map(function(r, s) {
          var l = u(this).val();
          return l == null ? null : Array.isArray(l) ? u.map(l, function(c) {
            return { name: s.name, value: c.replace(Hl, `\r
`) };
          }) : { name: s.name, value: l.replace(Hl, `\r
`) };
        }).get();
      }
    });
    var wh = /%20/g, Sh = /#.*$/, _h = /([?&])_=[^&]*/, kh = /^(.*?):[ \t]*([^\r\n]*)$/mg, Th = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Dh = /^(?:GET|HEAD)$/, Ch = /^\/\//, Vl = {}, ds = {}, Wl = "*/".concat("*"), hs = D.createElement("a");
    hs.href = si.href;
    function Bl(r) {
      return function(s, l) {
        typeof s != "string" && (l = s, s = "*");
        var c, h = 0, p = s.toLowerCase().match(Te) || [];
        if (C(l))
          for (; c = p[h++]; )
            c[0] === "+" ? (c = c.slice(1) || "*", (r[c] = r[c] || []).unshift(l)) : (r[c] = r[c] || []).push(l);
      };
    }
    function zl(r, s, l, c) {
      var h = {}, p = r === ds;
      function v(k) {
        var S;
        return h[k] = !0, u.each(r[k] || [], function(L, H) {
          var J = H(s, l, c);
          if (typeof J == "string" && !p && !h[J])
            return s.dataTypes.unshift(J), v(J), !1;
          if (p)
            return !(S = J);
        }), S;
      }
      return v(s.dataTypes[0]) || !h["*"] && v("*");
    }
    function ps(r, s) {
      var l, c, h = u.ajaxSettings.flatOptions || {};
      for (l in s)
        s[l] !== void 0 && ((h[l] ? r : c || (c = {}))[l] = s[l]);
      return c && u.extend(!0, r, c), r;
    }
    function Oh(r, s, l) {
      for (var c, h, p, v, k = r.contents, S = r.dataTypes; S[0] === "*"; )
        S.shift(), c === void 0 && (c = r.mimeType || s.getResponseHeader("Content-Type"));
      if (c) {
        for (h in k)
          if (k[h] && k[h].test(c)) {
            S.unshift(h);
            break;
          }
      }
      if (S[0] in l)
        p = S[0];
      else {
        for (h in l) {
          if (!S[0] || r.converters[h + " " + S[0]]) {
            p = h;
            break;
          }
          v || (v = h);
        }
        p = p || v;
      }
      if (p)
        return p !== S[0] && S.unshift(p), l[p];
    }
    function Mh(r, s, l, c) {
      var h, p, v, k, S, L = {}, H = r.dataTypes.slice();
      if (H[1])
        for (v in r.converters)
          L[v.toLowerCase()] = r.converters[v];
      for (p = H.shift(); p; )
        if (r.responseFields[p] && (l[r.responseFields[p]] = s), !S && c && r.dataFilter && (s = r.dataFilter(s, r.dataType)), S = p, p = H.shift(), p) {
          if (p === "*")
            p = S;
          else if (S !== "*" && S !== p) {
            if (v = L[S + " " + p] || L["* " + p], !v) {
              for (h in L)
                if (k = h.split(" "), k[1] === p && (v = L[S + " " + k[0]] || L["* " + k[0]], v)) {
                  v === !0 ? v = L[h] : L[h] !== !0 && (p = k[0], H.unshift(k[1]));
                  break;
                }
            }
            if (v !== !0)
              if (v && r.throws)
                s = v(s);
              else
                try {
                  s = v(s);
                } catch (J) {
                  return {
                    state: "parsererror",
                    error: v ? J : "No conversion from " + S + " to " + p
                  };
                }
          }
        }
      return { state: "success", data: s };
    }
    u.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: si.href,
        type: "GET",
        isLocal: Th.test(si.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": Wl,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": !0,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": u.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(r, s) {
        return s ? (
          // Building a settings object
          ps(ps(r, u.ajaxSettings), s)
        ) : (
          // Extending ajaxSettings
          ps(u.ajaxSettings, r)
        );
      },
      ajaxPrefilter: Bl(Vl),
      ajaxTransport: Bl(ds),
      // Main method
      ajax: function(r, s) {
        typeof r == "object" && (s = r, r = void 0), s = s || {};
        var l, c, h, p, v, k, S, L, H, J, j = u.ajaxSetup({}, s), z = j.context || j, Ce = j.context && (z.nodeType || z.jquery) ? u(z) : u.event, Ve = u.Deferred(), De = u.Callbacks("once memory"), kt = j.statusCode || {}, St = {}, Kt = {}, it = "canceled", He = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(Je) {
            var vt;
            if (S) {
              if (!p)
                for (p = {}; vt = kh.exec(h); )
                  p[vt[1].toLowerCase() + " "] = (p[vt[1].toLowerCase() + " "] || []).concat(vt[2]);
              vt = p[Je.toLowerCase() + " "];
            }
            return vt == null ? null : vt.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return S ? h : null;
          },
          // Caches the header
          setRequestHeader: function(Je, vt) {
            return S == null && (Je = Kt[Je.toLowerCase()] = Kt[Je.toLowerCase()] || Je, St[Je] = vt), this;
          },
          // Overrides response content-type header
          overrideMimeType: function(Je) {
            return S == null && (j.mimeType = Je), this;
          },
          // Status-dependent callbacks
          statusCode: function(Je) {
            var vt;
            if (Je)
              if (S)
                He.always(Je[He.status]);
              else
                for (vt in Je)
                  kt[vt] = [kt[vt], Je[vt]];
            return this;
          },
          // Cancel the request
          abort: function(Je) {
            var vt = Je || it;
            return l && l.abort(vt), Ft(0, vt), this;
          }
        };
        if (Ve.promise(He), j.url = ((r || j.url || si.href) + "").replace(Ch, si.protocol + "//"), j.type = s.method || s.type || j.method || j.type, j.dataTypes = (j.dataType || "*").toLowerCase().match(Te) || [""], j.crossDomain == null) {
          k = D.createElement("a");
          try {
            k.href = j.url, k.href = k.href, j.crossDomain = hs.protocol + "//" + hs.host != k.protocol + "//" + k.host;
          } catch {
            j.crossDomain = !0;
          }
        }
        if (j.data && j.processData && typeof j.data != "string" && (j.data = u.param(j.data, j.traditional)), zl(Vl, j, s, He), S)
          return He;
        L = u.event && j.global, L && u.active++ === 0 && u.event.trigger("ajaxStart"), j.type = j.type.toUpperCase(), j.hasContent = !Dh.test(j.type), c = j.url.replace(Sh, ""), j.hasContent ? j.data && j.processData && (j.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (j.data = j.data.replace(wh, "+")) : (J = j.url.slice(c.length), j.data && (j.processData || typeof j.data == "string") && (c += (fs.test(c) ? "&" : "?") + j.data, delete j.data), j.cache === !1 && (c = c.replace(_h, "$1"), J = (fs.test(c) ? "&" : "?") + "_=" + Fl.guid++ + J), j.url = c + J), j.ifModified && (u.lastModified[c] && He.setRequestHeader("If-Modified-Since", u.lastModified[c]), u.etag[c] && He.setRequestHeader("If-None-Match", u.etag[c])), (j.data && j.hasContent && j.contentType !== !1 || s.contentType) && He.setRequestHeader("Content-Type", j.contentType), He.setRequestHeader(
          "Accept",
          j.dataTypes[0] && j.accepts[j.dataTypes[0]] ? j.accepts[j.dataTypes[0]] + (j.dataTypes[0] !== "*" ? ", " + Wl + "; q=0.01" : "") : j.accepts["*"]
        );
        for (H in j.headers)
          He.setRequestHeader(H, j.headers[H]);
        if (j.beforeSend && (j.beforeSend.call(z, He, j) === !1 || S))
          return He.abort();
        if (it = "abort", De.add(j.complete), He.done(j.success), He.fail(j.error), l = zl(ds, j, s, He), !l)
          Ft(-1, "No Transport");
        else {
          if (He.readyState = 1, L && Ce.trigger("ajaxSend", [He, j]), S)
            return He;
          j.async && j.timeout > 0 && (v = t.setTimeout(function() {
            He.abort("timeout");
          }, j.timeout));
          try {
            S = !1, l.send(St, Ft);
          } catch (Je) {
            if (S)
              throw Je;
            Ft(-1, Je);
          }
        }
        function Ft(Je, vt, li, Bi) {
          var Xt, lr, ur, Ht, Kn, sn = vt;
          S || (S = !0, v && t.clearTimeout(v), l = void 0, h = Bi || "", He.readyState = Je > 0 ? 4 : 0, Xt = Je >= 200 && Je < 300 || Je === 304, li && (Ht = Oh(j, He, li)), !Xt && u.inArray("script", j.dataTypes) > -1 && u.inArray("json", j.dataTypes) < 0 && (j.converters["text script"] = function() {
          }), Ht = Mh(j, Ht, He, Xt), Xt ? (j.ifModified && (Kn = He.getResponseHeader("Last-Modified"), Kn && (u.lastModified[c] = Kn), Kn = He.getResponseHeader("etag"), Kn && (u.etag[c] = Kn)), Je === 204 || j.type === "HEAD" ? sn = "nocontent" : Je === 304 ? sn = "notmodified" : (sn = Ht.state, lr = Ht.data, ur = Ht.error, Xt = !ur)) : (ur = sn, (Je || !sn) && (sn = "error", Je < 0 && (Je = 0))), He.status = Je, He.statusText = (vt || sn) + "", Xt ? Ve.resolveWith(z, [lr, sn, He]) : Ve.rejectWith(z, [He, sn, ur]), He.statusCode(kt), kt = void 0, L && Ce.trigger(
            Xt ? "ajaxSuccess" : "ajaxError",
            [He, j, Xt ? lr : ur]
          ), De.fireWith(z, [He, sn]), L && (Ce.trigger("ajaxComplete", [He, j]), --u.active || u.event.trigger("ajaxStop")));
        }
        return He;
      },
      getJSON: function(r, s, l) {
        return u.get(r, s, l, "json");
      },
      getScript: function(r, s) {
        return u.get(r, void 0, s, "script");
      }
    }), u.each(["get", "post"], function(r, s) {
      u[s] = function(l, c, h, p) {
        return C(c) && (p = p || h, h = c, c = void 0), u.ajax(u.extend({
          url: l,
          type: s,
          dataType: p,
          data: c,
          success: h
        }, u.isPlainObject(l) && l));
      };
    }), u.ajaxPrefilter(function(r) {
      var s;
      for (s in r.headers)
        s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "");
    }), u._evalUrl = function(r, s, l) {
      return u.ajax({
        url: r,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(c) {
          u.globalEval(c, s, l);
        }
      });
    }, u.fn.extend({
      wrapAll: function(r) {
        var s;
        return this[0] && (C(r) && (r = r.call(this[0])), s = u(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
          for (var l = this; l.firstElementChild; )
            l = l.firstElementChild;
          return l;
        }).append(this)), this;
      },
      wrapInner: function(r) {
        return C(r) ? this.each(function(s) {
          u(this).wrapInner(r.call(this, s));
        }) : this.each(function() {
          var s = u(this), l = s.contents();
          l.length ? l.wrapAll(r) : s.append(r);
        });
      },
      wrap: function(r) {
        var s = C(r);
        return this.each(function(l) {
          u(this).wrapAll(s ? r.call(this, l) : r);
        });
      },
      unwrap: function(r) {
        return this.parent(r).not("body").each(function() {
          u(this).replaceWith(this.childNodes);
        }), this;
      }
    }), u.expr.pseudos.hidden = function(r) {
      return !u.expr.pseudos.visible(r);
    }, u.expr.pseudos.visible = function(r) {
      return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
    }, u.ajaxSettings.xhr = function() {
      try {
        return new t.XMLHttpRequest();
      } catch {
      }
    };
    var $h = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, oi = u.ajaxSettings.xhr();
    x.cors = !!oi && "withCredentials" in oi, x.ajax = oi = !!oi, u.ajaxTransport(function(r) {
      var s, l;
      if (x.cors || oi && !r.crossDomain)
        return {
          send: function(c, h) {
            var p, v = r.xhr();
            if (v.open(
              r.type,
              r.url,
              r.async,
              r.username,
              r.password
            ), r.xhrFields)
              for (p in r.xhrFields)
                v[p] = r.xhrFields[p];
            r.mimeType && v.overrideMimeType && v.overrideMimeType(r.mimeType), !r.crossDomain && !c["X-Requested-With"] && (c["X-Requested-With"] = "XMLHttpRequest");
            for (p in c)
              v.setRequestHeader(p, c[p]);
            s = function(k) {
              return function() {
                s && (s = l = v.onload = v.onerror = v.onabort = v.ontimeout = v.onreadystatechange = null, k === "abort" ? v.abort() : k === "error" ? typeof v.status != "number" ? h(0, "error") : h(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  v.status,
                  v.statusText
                ) : h(
                  $h[v.status] || v.status,
                  v.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (v.responseType || "text") !== "text" || typeof v.responseText != "string" ? { binary: v.response } : { text: v.responseText },
                  v.getAllResponseHeaders()
                ));
              };
            }, v.onload = s(), l = v.onerror = v.ontimeout = s("error"), v.onabort !== void 0 ? v.onabort = l : v.onreadystatechange = function() {
              v.readyState === 4 && t.setTimeout(function() {
                s && l();
              });
            }, s = s("abort");
            try {
              v.send(r.hasContent && r.data || null);
            } catch (k) {
              if (s)
                throw k;
            }
          },
          abort: function() {
            s && s();
          }
        };
    }), u.ajaxPrefilter(function(r) {
      r.crossDomain && (r.contents.script = !1);
    }), u.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(r) {
          return u.globalEval(r), r;
        }
      }
    }), u.ajaxPrefilter("script", function(r) {
      r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET");
    }), u.ajaxTransport("script", function(r) {
      if (r.crossDomain || r.scriptAttrs) {
        var s, l;
        return {
          send: function(c, h) {
            s = u("<script>").attr(r.scriptAttrs || {}).prop({ charset: r.scriptCharset, src: r.url }).on("load error", l = function(p) {
              s.remove(), l = null, p && h(p.type === "error" ? 404 : 200, p.type);
            }), D.head.appendChild(s[0]);
          },
          abort: function() {
            l && l();
          }
        };
      }
    });
    var Ul = [], ms = /(=)\?(?=&|$)|\?\?/;
    u.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var r = Ul.pop() || u.expando + "_" + Fl.guid++;
        return this[r] = !0, r;
      }
    }), u.ajaxPrefilter("json jsonp", function(r, s, l) {
      var c, h, p, v = r.jsonp !== !1 && (ms.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ms.test(r.data) && "data");
      if (v || r.dataTypes[0] === "jsonp")
        return c = r.jsonpCallback = C(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, v ? r[v] = r[v].replace(ms, "$1" + c) : r.jsonp !== !1 && (r.url += (fs.test(r.url) ? "&" : "?") + r.jsonp + "=" + c), r.converters["script json"] = function() {
          return p || u.error(c + " was not called"), p[0];
        }, r.dataTypes[0] = "json", h = t[c], t[c] = function() {
          p = arguments;
        }, l.always(function() {
          h === void 0 ? u(t).removeProp(c) : t[c] = h, r[c] && (r.jsonpCallback = s.jsonpCallback, Ul.push(c)), p && C(h) && h(p[0]), p = h = void 0;
        }), "script";
    }), x.createHTMLDocument = function() {
      var r = D.implementation.createHTMLDocument("").body;
      return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2;
    }(), u.parseHTML = function(r, s, l) {
      if (typeof r != "string")
        return [];
      typeof s == "boolean" && (l = s, s = !1);
      var c, h, p;
      return s || (x.createHTMLDocument ? (s = D.implementation.createHTMLDocument(""), c = s.createElement("base"), c.href = D.location.href, s.head.appendChild(c)) : s = D), h = U.exec(r), p = !l && [], h ? [s.createElement(h[1])] : (h = Sl([r], s, p), p && p.length && u(p).remove(), u.merge([], h.childNodes));
    }, u.fn.load = function(r, s, l) {
      var c, h, p, v = this, k = r.indexOf(" ");
      return k > -1 && (c = sr(r.slice(k)), r = r.slice(0, k)), C(s) ? (l = s, s = void 0) : s && typeof s == "object" && (h = "POST"), v.length > 0 && u.ajax({
        url: r,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: h || "GET",
        dataType: "html",
        data: s
      }).done(function(S) {
        p = arguments, v.html(c ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          u("<div>").append(u.parseHTML(S)).find(c)
        ) : (
          // Otherwise use the full result
          S
        ));
      }).always(l && function(S, L) {
        v.each(function() {
          l.apply(this, p || [S.responseText, L, S]);
        });
      }), this;
    }, u.expr.pseudos.animated = function(r) {
      return u.grep(u.timers, function(s) {
        return r === s.elem;
      }).length;
    }, u.offset = {
      setOffset: function(r, s, l) {
        var c, h, p, v, k, S, L, H = u.css(r, "position"), J = u(r), j = {};
        H === "static" && (r.style.position = "relative"), k = J.offset(), p = u.css(r, "top"), S = u.css(r, "left"), L = (H === "absolute" || H === "fixed") && (p + S).indexOf("auto") > -1, L ? (c = J.position(), v = c.top, h = c.left) : (v = parseFloat(p) || 0, h = parseFloat(S) || 0), C(s) && (s = s.call(r, l, u.extend({}, k))), s.top != null && (j.top = s.top - k.top + v), s.left != null && (j.left = s.left - k.left + h), "using" in s ? s.using.call(r, j) : J.css(j);
      }
    }, u.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(r) {
        if (arguments.length)
          return r === void 0 ? this : this.each(function(h) {
            u.offset.setOffset(this, r, h);
          });
        var s, l, c = this[0];
        if (c)
          return c.getClientRects().length ? (s = c.getBoundingClientRect(), l = c.ownerDocument.defaultView, {
            top: s.top + l.pageYOffset,
            left: s.left + l.pageXOffset
          }) : { top: 0, left: 0 };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (this[0]) {
          var r, s, l, c = this[0], h = { top: 0, left: 0 };
          if (u.css(c, "position") === "fixed")
            s = c.getBoundingClientRect();
          else {
            for (s = this.offset(), l = c.ownerDocument, r = c.offsetParent || l.documentElement; r && (r === l.body || r === l.documentElement) && u.css(r, "position") === "static"; )
              r = r.parentNode;
            r && r !== c && r.nodeType === 1 && (h = u(r).offset(), h.top += u.css(r, "borderTopWidth", !0), h.left += u.css(r, "borderLeftWidth", !0));
          }
          return {
            top: s.top - h.top - u.css(c, "marginTop", !0),
            left: s.left - h.left - u.css(c, "marginLeft", !0)
          };
        }
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          for (var r = this.offsetParent; r && u.css(r, "position") === "static"; )
            r = r.offsetParent;
          return r || $t;
        });
      }
    }), u.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(r, s) {
      var l = s === "pageYOffset";
      u.fn[r] = function(c) {
        return Se(this, function(h, p, v) {
          var k;
          if ($(h) ? k = h : h.nodeType === 9 && (k = h.defaultView), v === void 0)
            return k ? k[s] : h[p];
          k ? k.scrollTo(
            l ? k.pageXOffset : v,
            l ? v : k.pageYOffset
          ) : h[p] = v;
        }, r, c, arguments.length);
      };
    }), u.each(["top", "left"], function(r, s) {
      u.cssHooks[s] = Ml(
        x.pixelPosition,
        function(l, c) {
          if (c)
            return c = ii(l, s), is.test(c) ? u(l).position()[s] + "px" : c;
        }
      );
    }), u.each({ Height: "height", Width: "width" }, function(r, s) {
      u.each({
        padding: "inner" + r,
        content: s,
        "": "outer" + r
      }, function(l, c) {
        u.fn[c] = function(h, p) {
          var v = arguments.length && (l || typeof h != "boolean"), k = l || (h === !0 || p === !0 ? "margin" : "border");
          return Se(this, function(S, L, H) {
            var J;
            return $(S) ? c.indexOf("outer") === 0 ? S["inner" + r] : S.document.documentElement["client" + r] : S.nodeType === 9 ? (J = S.documentElement, Math.max(
              S.body["scroll" + r],
              J["scroll" + r],
              S.body["offset" + r],
              J["offset" + r],
              J["client" + r]
            )) : H === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              u.css(S, L, k)
            ) : (
              // Set width or height on the element
              u.style(S, L, H, k)
            );
          }, s, v ? h : void 0, v);
        };
      });
    }), u.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(r, s) {
      u.fn[s] = function(l) {
        return this.on(s, l);
      };
    }), u.fn.extend({
      bind: function(r, s, l) {
        return this.on(r, null, s, l);
      },
      unbind: function(r, s) {
        return this.off(r, null, s);
      },
      delegate: function(r, s, l, c) {
        return this.on(s, r, l, c);
      },
      undelegate: function(r, s, l) {
        return arguments.length === 1 ? this.off(r, "**") : this.off(s, r || "**", l);
      },
      hover: function(r, s) {
        return this.mouseenter(r).mouseleave(s || r);
      }
    }), u.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(r, s) {
        u.fn[s] = function(l, c) {
          return arguments.length > 0 ? this.on(s, null, l, c) : this.trigger(s);
        };
      }
    );
    var Ph = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    u.proxy = function(r, s) {
      var l, c, h;
      if (typeof s == "string" && (l = r[s], s = r, r = l), !!C(r))
        return c = o.call(arguments, 2), h = function() {
          return r.apply(s || this, c.concat(o.call(arguments)));
        }, h.guid = r.guid = r.guid || u.guid++, h;
    }, u.holdReady = function(r) {
      r ? u.readyWait++ : u.ready(!0);
    }, u.isArray = Array.isArray, u.parseJSON = JSON.parse, u.nodeName = we, u.isFunction = C, u.isWindow = $, u.camelCase = P, u.type = A, u.now = Date.now, u.isNumeric = function(r) {
      var s = u.type(r);
      return (s === "number" || s === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(r - parseFloat(r));
    }, u.trim = function(r) {
      return r == null ? "" : (r + "").replace(Ph, "$1");
    };
    var Ah = t.jQuery, Eh = t.$;
    return u.noConflict = function(r) {
      return t.$ === u && (t.$ = Eh), r && t.jQuery === u && (t.jQuery = Ah), u;
    }, typeof n > "u" && (t.jQuery = t.$ = u), u;
  });
})(cP);
const Ef = ko;
const Tr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, dP = {
  name: "TimeController",
  emits: ["controllerModeChange", "preTimeTickClick", "nextTimeTickClick", "animationRangeTimeChange", "playAnimationClick", "multipleValueChange"],
  props: {
    animationTime: {
      type: [Date, Number],
      default: Date.now()
    },
    offsetTime: {
      type: Number,
      default: 2
    },
    multipleValue: {
      type: Number,
      default: 1
    }
  },
  setup(e, { emit: t }) {
    const n = rr({
      showPlayMode: !1,
      multipleList: [
        { name: "auto", value: "auto" },
        { name: "3X", value: 3 },
        { name: "2X", value: 2 },
        { name: "1X", value: 1 }
      ],
      curMultipleItem: { name: "1X", value: 1 },
      offsetTimeList: [
        { name: "6小时", value: 6 },
        { name: "4小时", value: 4 },
        { name: "2小时", value: 2 },
        { name: "1小时", value: 1 }
      ],
      offsetTimeItem: { name: "2小时", value: 2 },
      multipleDom: null,
      multipleDom2: null,
      animationStartTime: null,
      isPlay: !1,
      animationTime: e.animationTime
    });
    Ct(() => e.animationTime, ($, D) => {
      D !== $ && (n.animation = $);
    });
    const i = le(null), a = le(null), o = () => {
      const $ = n.multipleList.find((E) => E.value === e.multipleValue), D = n.offsetTimeList.find((E) => E.value === e.offsetTime);
      $ && (n.curMultipleItem = $), D && (n.offsetTimeItem = D);
    };
    Nn(() => {
      n.multipleDom = Ef(".rotation-option-1"), n.multipleDom2 = Ef(".rotation-option-2"), n.multipleDom.hide(), n.multipleDom2.hide(), o();
    });
    const f = ($) => {
      n[$].slideToggle();
    }, d = ($) => {
      n.curMultipleItem = $, n.multipleDom.slideUp(), t("multipleValueChange", { isPlay: n.isPlay, value: n.curMultipleItem.value });
    }, m = ($, D) => {
      n.showPlayMode = $, t("controllerModeChange", { isPlayMode: n.showPlayMode });
    }, y = () => {
      t("preTimeTickClick", { value: n.curMultipleItem.value });
    }, w = () => {
      t("nextTimeTickClick", { value: n.curMultipleItem.value });
    }, b = () => {
      n.isPlay = !n.isPlay, t("playAnimationClick", n.isPlay);
    }, T = () => {
      console.log("animationStartTimeChange"), console.log(n.animationTime), n.isPlay = !1, t("playAnimationClick", n.isPlay), t("animationRangeTimeChange", { startTime: n.animationTime, offsetTime: n.offsetTimeItem.value });
    }, O = ($) => {
      n.offsetTimeItem = $, n.multipleDom2.slideUp(), t("animationRangeTimeChange", { startTime: n.animationTime, offsetTime: n.offsetTimeItem.value });
    }, x = ($) => $.getTime() > Date.now();
    return {
      ...Oo(n),
      state: n,
      RotationOption1Ref: i,
      RotationOption2Ref: a,
      showMultipleBox: f,
      setMultipleClick: d,
      clickPlayModeHandle: m,
      preTimeTick: y,
      nextTimeTick: w,
      animationStartTimeChange: T,
      disabledDate: x,
      clickPlayHandle: b,
      setTimeRangeClick: O
    };
  }
}, yl = (e) => (Mo("data-v-53ea4bad"), e = e(), $o(), e), hP = { class: "time-control" }, pP = { class: "option-time" }, mP = { class: "rotation-multiple" }, vP = /* @__PURE__ */ yl(() => /* @__PURE__ */ V("span", { class: "cdywIF icon-timeline-shang" }, null, -1)), gP = {
  class: "rotation-option rotation-option-1",
  ref: "RotationOption1Ref"
}, yP = ["onClick"], bP = /* @__PURE__ */ yl(() => /* @__PURE__ */ V("span", { class: "cdywIF icon-timeline-cunchu" }, null, -1)), wP = { class: "date-time-choose" }, SP = { class: "rotation-multiple rotation-multiple-timeHour" }, _P = /* @__PURE__ */ yl(() => /* @__PURE__ */ V("span", { class: "cdywIF icon-timeline-shang" }, null, -1)), kP = {
  class: "rotation-option rotation-option-2",
  ref: "RotationOption2Ref"
}, TP = ["onClick"];
function DP(e, t, n, i, a, o) {
  const f = Vc;
  return ie(), ue("div", hP, [
    V("span", {
      class: "cdywIF icon-timeline-zuobian icon-color",
      onClick: t[0] || (t[0] = (...d) => i.preTimeTick && i.preTimeTick(...d))
    }),
    Ot(V("span", {
      class: "cdywIF icon-timeline-bofang1 icon-color",
      onClick: t[1] || (t[1] = (d) => i.clickPlayModeHandle(!0, 470))
    }, null, 512), [
      [Mn, !e.showPlayMode]
    ]),
    Ot(V("div", pP, [
      V("span", {
        class: xe(["cdywIF icon-color", { "icon-timeline-bofang1": !e.isPlay, "icon-timeline-zanting1": e.isPlay }]),
        onClick: t[2] || (t[2] = (...d) => i.clickPlayHandle && i.clickPlayHandle(...d))
      }, null, 2),
      V("span", {
        class: "cdywIF icon-timeline-24gf-stop icon-stop",
        onClick: t[3] || (t[3] = (d) => i.clickPlayModeHandle(!1, 500))
      }),
      V("div", mP, [
        V("div", {
          class: "rotation-text",
          onClick: t[4] || (t[4] = (d) => i.showMultipleBox("multipleDom"))
        }, [
          nr(Ie(e.curMultipleItem.name) + " ", 1),
          vP
        ]),
        V("div", gP, [
          (ie(!0), ue(gt, null, It(e.multipleList, (d, m) => (ie(), ue("li", {
            key: m,
            onClick: (y) => i.setMultipleClick(d)
          }, Ie(d.name), 9, yP))), 128))
        ], 512)
      ]),
      bP,
      V("div", wP, [
        at(f, {
          modelValue: i.state.animationTime,
          "onUpdate:modelValue": t[5] || (t[5] = (d) => i.state.animationTime = d),
          type: "datetime",
          clearable: !1,
          onChange: i.animationStartTimeChange,
          disabledDate: i.disabledDate,
          format: "MM-DD HH:mm"
        }, null, 8, ["modelValue", "onChange", "disabledDate"])
      ]),
      V("div", SP, [
        V("div", {
          class: "rotation-text",
          onClick: t[6] || (t[6] = (d) => i.showMultipleBox("multipleDom2"))
        }, [
          nr(Ie(e.offsetTimeItem.name) + " ", 1),
          _P
        ]),
        V("div", kP, [
          (ie(!0), ue(gt, null, It(e.offsetTimeList, (d, m) => (ie(), ue("li", {
            key: m,
            onClick: (y) => i.setTimeRangeClick(d)
          }, Ie(d.name), 9, TP))), 128))
        ], 512)
      ])
    ], 512), [
      [Mn, e.showPlayMode]
    ]),
    V("span", {
      class: "cdywIF icon-timeline-youbian icon-color",
      onClick: t[7] || (t[7] = (...d) => i.nextTimeTick && i.nextTimeTick(...d))
    })
  ]);
}
const CP = /* @__PURE__ */ Tr(dP, [["render", DP], ["__scopeId", "data-v-53ea4bad"]]), Ld = /^(\d{1,2})([smMhHdD])$/, Lr = {
  s: 1e3,
  m: 60 * 1e3,
  M: 60 * 1e3,
  h: 60 * 60 * 1e3,
  H: 60 * 60 * 1e3,
  d: 24 * 60 * 60 * 1e3,
  D: 24 * 60 * 60 * 1e3
}, Gr = {
  s: { unit: "minute", carryUnitTime: Lr.m, tickLevel: [1, 2, 6], colors: ["blue", "orange", "orangered"], formatTime: "HH:mm:ss", scale: 0.9 },
  m: { unit: "hour", carryUnitTime: Lr.H, tickLevel: [1, 2, 6], colors: ["black", "orangered", "black"], formatTime: "HH:mm", scale: 1 },
  M: { unit: "hour", carryUnitTime: Lr.H, tickLevel: [1, 2, 6], colors: ["black", "orangered", "black"], formatTime: "HH:mm", scale: 1 },
  h: { unit: "day", carryUnitTime: Lr.D, tickLevel: [0.5, 1, 2, 12], colors: ["black", "blue", "black", "orangered"], formatTime: "MM-DD:HH", scale: 0.8 },
  H: { unit: "day", carryUnitTime: Lr.D, tickLevel: [0.5, 1, 2, 12], colors: ["black", "blue", "black", "orangered"], formatTime: "MM-DD:HH", scale: 0.8 }
};
function Rd(e) {
  let t;
  return e && (t = e.match(Ld)) ? {
    value: t[1] | 0,
    unit: t[2]
  } : t;
}
function OP(e) {
  let t, n;
  if (e && (t = e.match(Ld))) {
    const i = t[2];
    if (n = Lr[i])
      return t[1] * n;
  }
  return 0;
}
function Nf(e, t) {
  return pe(e).startOf(Gr[t].unit);
}
var ka = {}, MP = {
  get exports() {
    return ka;
  },
  set exports(e) {
    ka = e;
  }
}, Hr = typeof Reflect == "object" ? Reflect : null, Lf = Hr && typeof Hr.apply == "function" ? Hr.apply : function(t, n, i) {
  return Function.prototype.apply.call(t, n, i);
}, la;
Hr && typeof Hr.ownKeys == "function" ? la = Hr.ownKeys : Object.getOwnPropertySymbols ? la = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : la = function(t) {
  return Object.getOwnPropertyNames(t);
};
function $P(e) {
  console && console.warn && console.warn(e);
}
var xd = Number.isNaN || function(t) {
  return t !== t;
};
function st() {
  st.init.call(this);
}
MP.exports = st;
ka.once = NP;
st.EventEmitter = st;
st.prototype._events = void 0;
st.prototype._eventsCount = 0;
st.prototype._maxListeners = void 0;
var Rf = 10;
function ts(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(st, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Rf;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || xd(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Rf = e;
  }
});
st.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
st.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || xd(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Id(e) {
  return e._maxListeners === void 0 ? st.defaultMaxListeners : e._maxListeners;
}
st.prototype.getMaxListeners = function() {
  return Id(this);
};
st.prototype.emit = function(t) {
  for (var n = [], i = 1; i < arguments.length; i++)
    n.push(arguments[i]);
  var a = t === "error", o = this._events;
  if (o !== void 0)
    a = a && o.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var f;
    if (n.length > 0 && (f = n[0]), f instanceof Error)
      throw f;
    var d = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw d.context = f, d;
  }
  var m = o[t];
  if (m === void 0)
    return !1;
  if (typeof m == "function")
    Lf(m, this, n);
  else
    for (var y = m.length, w = Vd(m, y), i = 0; i < y; ++i)
      Lf(w[i], this, n);
  return !0;
};
function Yd(e, t, n, i) {
  var a, o, f;
  if (ts(n), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), o = e._events), f = o[t]), f === void 0)
    f = o[t] = n, ++e._eventsCount;
  else if (typeof f == "function" ? f = o[t] = i ? [n, f] : [f, n] : i ? f.unshift(n) : f.push(n), a = Id(e), a > 0 && f.length > a && !f.warned) {
    f.warned = !0;
    var d = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = t, d.count = f.length, $P(d);
  }
  return e;
}
st.prototype.addListener = function(t, n) {
  return Yd(this, t, n, !1);
};
st.prototype.on = st.prototype.addListener;
st.prototype.prependListener = function(t, n) {
  return Yd(this, t, n, !0);
};
function PP() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function jd(e, t, n) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, a = PP.bind(i);
  return a.listener = n, i.wrapFn = a, a;
}
st.prototype.once = function(t, n) {
  return ts(n), this.on(t, jd(this, t, n)), this;
};
st.prototype.prependOnceListener = function(t, n) {
  return ts(n), this.prependListener(t, jd(this, t, n)), this;
};
st.prototype.removeListener = function(t, n) {
  var i, a, o, f, d;
  if (ts(n), a = this._events, a === void 0)
    return this;
  if (i = a[t], i === void 0)
    return this;
  if (i === n || i.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, i.listener || n));
  else if (typeof i != "function") {
    for (o = -1, f = i.length - 1; f >= 0; f--)
      if (i[f] === n || i[f].listener === n) {
        d = i[f].listener, o = f;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? i.shift() : AP(i, o), i.length === 1 && (a[t] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", t, d || n);
  }
  return this;
};
st.prototype.off = st.prototype.removeListener;
st.prototype.removeAllListeners = function(t) {
  var n, i, a;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(i), f;
    for (a = 0; a < o.length; ++a)
      f = o[a], f !== "removeListener" && this.removeAllListeners(f);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = i[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (a = n.length - 1; a >= 0; a--)
      this.removeListener(t, n[a]);
  return this;
};
function Fd(e, t, n) {
  var i = e._events;
  if (i === void 0)
    return [];
  var a = i[t];
  return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? EP(a) : Vd(a, a.length);
}
st.prototype.listeners = function(t) {
  return Fd(this, t, !0);
};
st.prototype.rawListeners = function(t) {
  return Fd(this, t, !1);
};
st.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Hd.call(e, t);
};
st.prototype.listenerCount = Hd;
function Hd(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
st.prototype.eventNames = function() {
  return this._eventsCount > 0 ? la(this._events) : [];
};
function Vd(e, t) {
  for (var n = new Array(t), i = 0; i < t; ++i)
    n[i] = e[i];
  return n;
}
function AP(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function EP(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function NP(e, t) {
  return new Promise(function(n, i) {
    function a(f) {
      e.removeListener(t, o), i(f);
    }
    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", a), n([].slice.call(arguments));
    }
    Wd(e, t, o, { once: !0 }), t !== "error" && LP(e, a, { once: !0 });
  });
}
function LP(e, t, n) {
  typeof e.on == "function" && Wd(e, "error", t, n);
}
function Wd(e, t, n, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(o) {
      i.once && e.removeEventListener(t, a), n(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
const RP = 1;
class xP extends ka.EventEmitter {
  constructor(t, n, i, a) {
    super(), this.container = t, this.canvas = n, this.state = i, this.events = a, this.canvasWidth = 0, this.canvasHeight = 0, this.resize(), this.listener = this.addEventListener();
  }
  setCanvasProperties() {
    const { container: t, canvas: n } = this;
    if (!t)
      return new Error("父容器不存在！");
    this.canvasWidth = t.offsetWidth, this.canvasHeight = t.offsetHeight, n && (n.width = this.canvasWidth * window.devicePixelRatio, n.height = this.canvasHeight * window.devicePixelRatio, n.style.width = n.width + "px", n.style.height = n.height + "px");
  }
  renderer() {
    const { canvas: t, canvasWidth: n, canvasHeight: i } = this;
    if (t) {
      const a = t.getContext("2d");
      a.clearRect(0, 0, n, i), this.drawBackground(a), this.drawTimeAxis(a);
    }
  }
  drawBackground(t) {
    const { canvasWidth: n, canvasHeight: i } = this;
    t.beginPath(), t.rect(0, 0, n, i), t.fillStyle = "white", t.fill(), t.closePath();
  }
  drawTimeAxis(t) {
    const { canvasWidth: n, canvasHeight: i, state: a } = this, { carryUnitTime: o, tickLevel: f, colors: d, formatTime: m, scale: y } = Gr[a.unitOfObject.unit], w = (b, T, O, x, C) => {
      for (let $ = f.length - 1; $ >= 0; $--) {
        const D = o / f[$] * a.unitOfObject.value;
        T % D === 0 && ($ === 0 && a.timeTickList.push({
          value: O,
          left: x,
          scale: C
        }), b.beginPath(), b.moveTo(x, i / 2 + $ * 2), b.lineTo(x, i), b.strokeStyle = d[$], b.stroke());
      }
    };
    a.timeTickList = [], t.resetTransform(), t.translate(0.5, 0.5);
    for (let b = 0; b < n; b++) {
      const T = pe(a.startTimeStamp + b * a.unitOfMs).valueOf(), O = pe(a.startTimeStamp + b * a.unitOfMs).format(m);
      w(t, T, O, b, y);
    }
  }
  addEventListener() {
    const { canvas: t, state: n } = this;
    let i = 0, a = 0, o = 0, f = !1, d = !1, m = 200, y = 0, w = 0, b;
    const T = ($) => {
      $.preventDefault(), t === $.target && (b = $.which, f = !0, d = !1, y = Date.now(), i = $.clientX, $.target.style.cursor = "pointer", this.emit("time-bar-mousedown", { offset: i }), window.addEventListener("mousemove", O));
    }, O = ($) => {
      f && (a = $.clientX, o = a - i, i = a, n.startTimeStamp = n.startTimeStamp - o * n.unitOfMs, this.emit("time-bar-mousemove", { movePixel: o }), this.renderer());
    }, x = ($) => {
      $.preventDefault(), f = !1, w = Date.now(), d = w - y > m, d ? (this.emit("time-bar-mouseup", { offset: a - t.getBoundingClientRect().left }), window.removeEventListener("mousemove", O)) : b === RP && this.emit("time-bar-click", { offset: i - t.getBoundingClientRect().left });
    }, C = ($) => {
      $.preventDefault();
      const D = $.deltaY * 0.1 * window.devicePixelRatio | 0;
      n.startTimeStamp = n.startTimeStamp - D * n.unitOfMs, this.emit("time-bar-mousemove", { movePixel: D }), this.renderer();
    };
    return window.addEventListener("mousedown", T), window.addEventListener("mouseup", x), t.addEventListener("wheel", C), {
      dispose: () => {
        window.removeEventListener("mousedown", T), window.removeEventListener("mouseup", x), t.removeEventListener("wheel", C);
      }
    };
  }
  resize() {
    this.container && new ResizeObserver((n) => {
      setTimeout(() => {
        this.setCanvasProperties(), this.renderer(), this.emit("time-bar-resize");
      });
    }).observe(this.container);
  }
  dispose() {
    this.container = null, this.canvas = null, this.state = null, this.events = null, this.removeAllListeners("time-bar-resize"), this.removeAllListeners("time-bar-mousedown"), this.removeAllListeners("time-bar-mousemove"), this.removeAllListeners("time-bar-mouseleave"), this.removeAllListeners("time-bar-click"), this.listener && this.listener.dispose();
  }
}
const IP = {
  name: "TimeTickLabel",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return {
      ...e
    };
  }
};
const YP = { class: "time-tick-list" };
function jP(e, t, n, i, a, o) {
  return ie(), ue("div", YP, [
    (ie(!0), ue(gt, null, It(n.list, (f, d) => (ie(), ue("span", {
      class: "time-tick-item",
      key: d,
      style: en({ left: f.left + "px", transform: `translate(-50%) scale(${f.scale})` })
    }, Ie(f.value), 5))), 128))
  ]);
}
const Bd = /* @__PURE__ */ Tr(IP, [["render", jP], ["__scopeId", "data-v-abfd1a65"]]);
const FP = {
  name: "TimeTickLabel",
  emits: ["mousemove", "mouseup", "change"],
  props: {
    timeBarWidth: {
      type: [Number, String],
      default: 0
    },
    startTimeStamp: {
      type: [Number, Date],
      default: 0
    },
    freeTimeStamp: {
      type: [Number, Date],
      default: 0
    },
    unitTime: {
      type: [Number, String],
      default: 0
    },
    onePixelTimeUnit: {
      type: [Number, String],
      default: "30s"
    }
  },
  setup(e, { emit: t }) {
    const n = le(null), i = le(null), a = le(null), o = le(null), f = Rd(e.onePixelTimeUnit), d = rr({
      timeFormatText: "",
      offset: 0,
      isTransition: !0
    }), m = (T, O) => {
      d.offset = (O.valueOf() - T.valueOf()) / e.unitTime, d.timeFormatText = pe(O).format(Gr[f.unit].formatTime);
    }, y = (T, O) => {
      const x = Math.ceil(e.startTimeStamp + T * e.unitTime);
      d.timeFormatText = pe(x).format(Gr[f.unit].formatTime), O && t("change", x);
    };
    Ct(() => e.startTimeStamp, (T, O) => {
      T !== O && m(e.startTimeStamp, e.freeTimeStamp);
    }), Ct(() => e.freeTimeStamp, (T, O) => {
      T !== O && m(e.startTimeStamp, e.freeTimeStamp);
    });
    const w = Z(() => ({
      visibility: d.offset >= 0 && d.offset <= e.timeBarWidth ? "visible" : "hidden"
    })), b = () => {
      let T, O = !1, x = n.value.getBoundingClientRect();
      const C = ($) => {
        if ($.preventDefault(), $.stopPropagation(), O) {
          let D = $.clientX - T - x.left;
          D >= 0 && D < e.timeBarWidth && (d.offset = D, y(D));
        }
      };
      o.value && (o.value.addEventListener("mousedown", function($) {
        T = $.offsetX, O = !0, document.addEventListener("mousemove", C), d.isTransition = !1;
      }), document.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", C), O && y(d.offset, !0), O = !1, d.isTransition = !0;
      }));
    };
    return Nn(() => {
      b();
    }), {
      ...e,
      state: d,
      timePointerBoxRef: n,
      timePointerWrapRef: i,
      currentTimeRef: a,
      timePointerRef: o,
      timePointerBoxStyle: w
    };
  }
}, HP = {
  class: "time-pointer",
  ref: "timePointerRef"
};
function VP(e, t, n, i, a, o) {
  return ie(), ue("div", {
    class: "time-pointer-box",
    style: en(i.timePointerBoxStyle),
    ref: "timePointerBoxRef"
  }, [
    V("div", {
      class: xe(["time-pointer-wrap", { transitionLeft: i.state.isTransition }]),
      style: en({ left: i.state.offset + "px" }),
      ref: "timePointerWrapRef"
    }, [
      V("div", {
        class: "current-time",
        ref: "currentTimeRef"
      }, Ie(i.state.timeFormatText), 513),
      V("div", HP, null, 512)
    ], 6)
  ], 4);
}
const zd = /* @__PURE__ */ Tr(FP, [["render", VP], ["__scopeId", "data-v-3385f1d1"]]), xf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, Ud = function(e, t) {
  if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
  !window.oRequestAnimationFrame && !window.msRequestAnimationFrame)
    return window.setInterval(e, t);
  let n = Date.now(), i = /* @__PURE__ */ Object.create({});
  function a() {
    Date.now() - n >= t && (e.call(), n = new Date().getTime()), i.value = xf(a);
  }
  return i.value = xf(a), i;
}, qd = function(e) {
  window.cancelAnimationFrame ? window.cancelAnimationFrame(e.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(e.value) : (
    /* Support for legacy API */
    window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(e.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(e.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(e.value) : clearInterval(e)
  );
};
const WP = {
  name: "TimeTickLabel",
  emits: ["change"],
  props: {
    unitTime: {
      type: [Number, String],
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    timeBarWidth: {
      type: Number,
      default: 0
    }
  },
  setup(e, { emit: t }) {
    let n = -1;
    const i = rr({
      offset: 0,
      currentTimeStamp: -1
    });
    Ct(() => e.value, (d, m) => {
      d !== m && a();
    }), Ct(() => e.timeBarWidth, (d, m) => {
      d !== m && a();
    });
    const a = () => {
      i.currentTimeStamp = Date.now(), i.offset = (i.currentTimeStamp - e.value) / e.unitTime, t("change", { offset: i.offset, needNextPage: i.offset >= e.timeBarWidth - 40, nowTimeStamp: i.currentTimeStamp });
    }, o = Z(() => ({
      visibility: i.offset >= 0 && i.offset <= e.timeBarWidth ? "visible" : "hidden"
    })), f = () => {
      yn(() => {
        setTimeout(() => {
          n = Ud(() => {
            a();
          }, 1e4);
        }, 1e4);
      });
    };
    return Nn(() => {
      a(), f();
    }), Po(() => {
      qd(n);
    }), {
      ...e,
      state: i,
      pointerStyle: o
    };
  }
}, bl = (e) => (Mo("data-v-9a135f23"), e = e(), $o(), e), BP = /* @__PURE__ */ bl(() => /* @__PURE__ */ V("span", null, "实况", -1)), zP = /* @__PURE__ */ bl(() => /* @__PURE__ */ V("div", { class: "tick-pointer" }, null, -1)), UP = /* @__PURE__ */ bl(() => /* @__PURE__ */ V("span", null, "预报", -1)), qP = [
  BP,
  zP,
  UP
];
function GP(e, t, n, i, a, o) {
  return ie(), ue("div", {
    class: "now-pointer-box",
    style: en(i.pointerStyle)
  }, [
    V("div", {
      class: "now-pointer-wrap",
      style: en({ left: i.state.offset + "px" })
    }, qP, 4)
  ], 4);
}
const KP = /* @__PURE__ */ Tr(WP, [["render", GP], ["__scopeId", "data-v-9a135f23"]]);
var Gd = /* @__PURE__ */ ((e) => (e.Default = "default", e.Live = "live", e.Animation = "animation", e))(Gd || {});
const XP = {
  name: "TimeBarCanvas",
  emits: ["modeChange", "currentTimeChange"],
  components: { TimeTickLabel: Bd, TimePointer: zd, NowPointer: KP },
  props: {
    currentTimeStamp: {
      type: [Date, Number],
      default: Date.now()
    },
    // 一像素 时间单位 最小单位 ms
    onePixelTimeUnit: {
      type: [Number, String],
      default: "30s"
    },
    mode: {
      type: String,
      default: "default"
      // 'live' | 'animation' | 'default'
    }
  },
  setup(e, { emit: t }) {
    const n = le(null), i = le(null), a = le(null), o = rr({
      currentTimeStamp: e.currentTimeStamp,
      startTimeStamp: 0,
      timeTickList: [],
      unitOfMs: OP(e.onePixelTimeUnit),
      unitOfObject: Rd(e.onePixelTimeUnit),
      timeBarWidth: 0,
      pointerFormatTimeText: "",
      pointerLeftOffset: 0,
      pointerDisabled: !1,
      MODE: Gd
    });
    Ct(() => e.currentTimeStamp, (D, E) => {
      D !== E && O(e.currentTimeStamp);
    }), Ct(() => e.mode, (D, E) => {
      D && D !== E && D === "live" && O(Date.now());
    });
    const f = () => {
      i.value && (o.timeBarWidth = i.value.offsetWidth, o.startTimeStamp = pe(Nf(o.currentTimeStamp - o.timeBarWidth / 2 * o.unitOfMs, o.unitOfObject.unit)).valueOf(), o.pointerLeftOffset = (o.currentTimeStamp - o.startTimeStamp) / o.unitOfMs), o.pointerFormatTimeText = pe(o.currentTimeStamp).format(Gr[o.unitOfObject.unit].formatTime);
    }, d = (D) => {
      o.startTimeStamp = pe(Nf(D, o.unitOfObject.unit)).valueOf(), i.value && (o.timeBarWidth = i.value.offsetWidth), m && m.renderer();
    };
    let m = null;
    const y = () => {
      m.on("time-bar-click", ({ offset: D }) => {
        T(D), e.mode === "live" && t("modeChange", {
          mode: "default"
          /* Default */
        });
      }), m.on("time-bar-mousemove", ({ movePixel: D }) => {
        o.pointerLeftOffset = o.pointerLeftOffset + D;
      }), m.on("time-bar-resize", () => {
        i.value && (o.timeBarWidth = i.value.offsetWidth);
      });
    }, w = (D) => {
      t("modeChange", {
        mode: "default"
        /* Default */
      }), T(D);
    }, b = ({ offset: D, needNextPage: E }) => {
      e.mode === "live" && (T(D), E && d(o.currentTimeStamp));
    }, T = (D) => {
      D > o.timeBarWidth ? (d(o.startTimeStamp + o.unitOfMs * o.timeBarWidth), o.pointerLeftOffset = D - o.timeBarWidth) : D < 0 ? (d(o.startTimeStamp - o.unitOfMs * o.timeBarWidth), o.pointerLeftOffset = o.timeBarWidth + D) : o.pointerLeftOffset = D, o.currentTimeStamp = o.startTimeStamp + o.pointerLeftOffset * o.unitOfMs, o.pointerFormatTimeText = pe(o.currentTimeStamp).format(Gr[o.unitOfObject.unit].formatTime), t("currentTimeChange", { time: o.currentTimeStamp });
    }, O = (D) => {
      const E = D.valueOf();
      if (o.currentTimeStamp !== E) {
        const I = (E - o.startTimeStamp) / o.unitOfMs;
        T(I);
      }
    }, x = () => {
      console.log("prevTimeTick"), T(o.pointerLeftOffset - 1);
    }, C = () => {
      console.log("nextTimeTick"), T(o.pointerLeftOffset + 1);
    };
    Ff(() => {
    }), Nn(() => {
      setTimeout(() => {
        f(), m = new xP(i.value, a.value, o), y();
      });
    }), Po(() => {
      m.dispose();
    });
    const $ = Oo(o);
    return {
      state: o,
      props: e,
      ...$,
      timeBarWrapRef: n,
      timeBarCanvasWrapRef: i,
      timeBarCanvasRef: a,
      timePointerChange: w,
      nowPointerChange: b,
      prevTimeTick: x,
      nextTimeTick: C
    };
  }
};
const ZP = {
  class: "time-bar-wrap",
  ref: "timeBarWrapRef"
}, JP = { class: "time-bar-box" }, QP = {
  class: "time-bar-canvas-wrap",
  ref: "timeBarCanvasWrapRef"
}, eA = { ref: "timeBarCanvasRef" };
function tA(e, t, n, i, a, o) {
  const f = yt("TimeTickLabel"), d = yt("TimePointer"), m = yt("NowPointer");
  return ie(), ue("div", ZP, [
    V("div", JP, [
      V("div", QP, [
        V("canvas", eA, null, 512)
      ], 512),
      at(f, { list: e.timeTickList }, null, 8, ["list"]),
      i.props.mode !== e.MODE.Animation ? (ie(), Sn(d, {
        key: 0,
        offset: e.pointerLeftOffset,
        timeFormatText: e.pointerFormatTimeText,
        timeBarWidth: e.timeBarWidth,
        onMousemove: i.timePointerChange
      }, null, 8, ["offset", "timeFormatText", "timeBarWidth", "onMousemove"])) : je("", !0),
      at(m, {
        unitTime: e.unitOfMs,
        startTimeStamp: e.startTimeStamp,
        timeBarWidth: e.timeBarWidth,
        onChange: i.nowPointerChange
      }, null, 8, ["unitTime", "startTimeStamp", "timeBarWidth", "onChange"]),
      Wt(e.$slots, "animation", { animationProps: i.state }, void 0, !0)
    ])
  ], 512);
}
const To = /* @__PURE__ */ Tr(XP, [["render", tA], ["__scopeId", "data-v-2fb98260"]]), nA = {
  name: "TimeAnimationBar",
  emits: ["change"],
  props: {
    startTimeStamp: {
      type: [Number, String],
      default: 0
    },
    startAnimationTimeStamp: {
      type: [Number, String],
      default: ""
    },
    timeBarWidth: {
      type: [Number, String],
      default: 0
    },
    offsetTime: {
      type: [Number, String],
      default: 0
    },
    unitOfMs: {
      type: Number,
      default: ""
    },
    loadingPercent: {
      type: Number,
      default: 10
    }
  },
  setup(e, { emit: t }) {
    const n = le(null), i = le(null), a = le(null), o = le(null), f = rr({
      pointerOffset: 0
    }), d = Z(() => {
      const E = (e.startAnimationTimeStamp - e.startTimeStamp) / e.unitOfMs;
      return {
        width: e.offsetTime * 3600 * 1e3 / e.unitOfMs + "px",
        left: E + "px"
      };
    }), m = Z(() => ({
      width: e.loadingPercent + "%"
    })), y = Z(() => ({
      left: f.pointerOffset + "px"
    })), w = () => {
      const E = e.offsetTime * 3600 * 1e3 / e.unitOfMs;
      f.pointerOffset = ++f.pointerOffset % E, t("change", { animationTimeStamp: f.pointerOffset * e.unitOfMs + e.startAnimationTimeStamp });
    }, b = () => {
      const E = e.offsetTime * 3600 * 1e3 / e.unitOfMs;
      f.pointerOffset = f.pointerOffset - 1, f.pointerOffset < 0 && (f.pointerOffset = f.pointerOffset + E), t("change", { animationTimeStamp: f.pointerOffset * e.unitOfMs + e.startAnimationTimeStamp });
    }, T = (E) => {
      const I = (E - e.startAnimationTimeStamp) / e.unitOfMs, A = e.offsetTime * 3600 * 1e3 / e.unitOfMs;
      f.pointerOffset = Math.min(Math.max(I, 0), A);
    }, O = () => {
      w();
    };
    let x = -1, C = 1e3;
    const $ = (E) => {
      x = Ud(() => {
        w();
      }, C / E);
    }, D = () => {
      qd(x);
    };
    return Nn(() => {
    }), Po(() => {
      D();
    }), {
      ...e,
      state: f,
      timePointerBoxRef: n,
      timePointerWrapRef: i,
      currentTimeRef: a,
      timePointerRef: o,
      timeAnimationStyle: d,
      loadingAnimationStyle: m,
      pointerStyle: y,
      playAnimationTick: $,
      stopAnimationTick: D,
      prevTimeTick: b,
      nextTimeTick: O,
      setPointerByTimeStamp: T
    };
  }
};
const wl = (e) => (Mo("data-v-7a5132db"), e = e(), $o(), e), rA = { class: "time-animation-box" }, iA = /* @__PURE__ */ wl(() => /* @__PURE__ */ V("div", { class: "bg" }, null, -1)), aA = /* @__PURE__ */ wl(() => /* @__PURE__ */ V("div", { class: "left" }, null, -1)), sA = /* @__PURE__ */ wl(() => /* @__PURE__ */ V("div", { class: "right" }, null, -1));
function oA(e, t, n, i, a, o) {
  return ie(), ue("div", rA, [
    V("div", {
      class: "animation-highlight-bar",
      style: en(i.timeAnimationStyle)
    }, [
      iA,
      aA,
      sA,
      V("div", {
        class: "pointer",
        style: en(i.pointerStyle)
      }, null, 4)
    ], 4),
    V("div", {
      class: "loading-highlight-bar",
      style: en(i.timeAnimationStyle)
    }, [
      V("div", {
        class: "loading",
        style: en(i.loadingAnimationStyle)
      }, null, 4)
    ], 4)
  ]);
}
const lA = /* @__PURE__ */ Tr(nA, [["render", oA], ["__scopeId", "data-v-7a5132db"]]);
var Kd = /* @__PURE__ */ ((e) => (e.Default = "default", e.Live = "live", e.Animation = "animation", e))(Kd || {});
const uA = {
  name: "TimeLine",
  emit: [
    "animationTimeChange",
    "currentPointerTimeChange",
    "animationRangeTimeChange",
    "playAnimationClick"
  ],
  components: {
    TimeController: CP,
    TimeBarCanvas: To,
    TimeTickLabel: Bd,
    TimePointer: zd,
    TimeAnimationBar: lA
  },
  props: {
    theme: {
      type: String,
      default: "default"
    },
    currentTime: {
      type: [Date, Number],
      default: new Date()
    },
    animationLoadingPercent: {
      type: Number,
      default: 0
    },
    onePixelTimeUnit: {
      type: [Number, String],
      default: "30s"
    }
  },
  setup(e, { emit: t }) {
    const n = le(null), i = le(null), a = rr({
      startAnimationTimeStamp: Date.now() - 60 * 60 * 1e3,
      offsetTime: 1,
      multipleValue: 3,
      isLive: !1,
      datePickerTime: e.currentTime.valueOf(),
      mode: "default",
      MODE: Kd
    }), o = () => {
      a.currentTimestamp = a.datePickerTime.valueOf();
    }, f = (I) => I.getTime() > pe().valueOf(), d = () => {
      a.isLive = !a.isLive, a.mode = a.isLive ? "live" : "";
    }, m = ({ isPlayMode: I }) => {
      a.mode = I ? "animation" : "default", I && t("animationRangeTimeChange", { startTime: a.startAnimationTimeStamp, offsetTime: a.offsetTime * 60 * 60 * 1e3 });
    }, y = () => {
      a.mode === "animation" ? i.value && i.value.prevTimeTick() : n.value && n.value.prevTimeTick();
    }, w = () => {
      a.mode === "animation" ? i.value && i.value.nextTimeTick() : n.value && n.value.nextTimeTick();
    }, b = ({ startTime: I, offsetTime: A }) => {
      a.startAnimationTimeStamp = I.valueOf(), a.offsetTime = A, t("animationRangeTimeChange", { startTime: I, offsetTime: A * 60 * 60 * 1e3 });
    }, T = (I) => {
      console.log("playAnimationClick"), typeof Number(a.multipleValue) == "number" && (I ? i.value.playAnimationTick(a.multipleValue) : i.value.stopAnimationTick()), t("playAnimationClick", { isPlay: I, multiple: a.multipleValue });
    }, O = ({ isPlay: I, value: A }) => {
      a.multipleValue = A, I && (i.value.stopAnimationTick(), typeof Number(a.multipleValue) == "number" && i.value.playAnimationTick(a.multipleValue));
    }, x = (I) => {
      i.value && i.value.setPointerByTimeStamp(I);
    }, C = ({ mode: I }) => {
      a.mode = I, a.isLive && a.mode === "default" && (a.isLive = !1);
    }, $ = ({ time: I }) => {
      a.datePickerTime = new Date(I), t("currentPointerTimeChange", { time: I });
    }, D = ({ animationTimeStamp: I }) => {
      t("animationTimeChange", { time: I });
    };
    return Ff(() => {
    }), {
      ...Oo(a),
      props: e,
      TimeBarCanvasRef: n,
      TimeAnimationBarRef: i,
      datePickerChange: o,
      disabledDate: f,
      liveModeClick: d,
      controllerModeChange: m,
      preTimeTickClick: y,
      nextTimeTickClick: w,
      animationRangeTimeChange: b,
      multipleValueChange: O,
      playAnimationClick: T,
      modeChange: C,
      currentTimeChange: $,
      animationTimeChange: D,
      setPointerByTimeStamp: x
    };
  }
};
const fA = ["theme"], cA = {
  key: 0,
  class: "t-data-search"
};
function dA(e, t, n, i, a, o) {
  const f = Vc, d = yt("TimeController"), m = yt("TimeAnimationBar"), y = yt("TimeBarCanvas");
  return ie(), ue("div", {
    class: "time-line",
    theme: i.props.theme
  }, [
    e.mode !== e.MODE.Animation ? (ie(), ue("div", cA, [
      at(f, {
        modelValue: e.datePickerTime,
        "onUpdate:modelValue": t[0] || (t[0] = (w) => e.datePickerTime = w),
        "prefix-icon": "cdywIF icon-timeline-rili2",
        type: "datetime",
        editable: !1,
        disabled: e.isLive,
        format: "YYYY-MM-DD HH:mm",
        placeholder: "选择日期",
        disabledDate: i.disabledDate,
        onChange: i.datePickerChange
      }, null, 8, ["modelValue", "disabled", "disabledDate", "onChange"])
    ])) : je("", !0),
    at(d, {
      animationTime: e.startAnimationTimeStamp,
      offsetTime: e.offsetTime,
      multipleValue: e.multipleValue,
      onPreTimeTickClick: i.preTimeTickClick,
      onNextTimeTickClick: i.nextTimeTickClick,
      onControllerModeChange: i.controllerModeChange,
      onAnimationRangeTimeChange: i.animationRangeTimeChange,
      onMultipleValueChange: i.multipleValueChange,
      onPlayAnimationClick: i.playAnimationClick
    }, null, 8, ["animationTime", "offsetTime", "multipleValue", "onPreTimeTickClick", "onNextTimeTickClick", "onControllerModeChange", "onAnimationRangeTimeChange", "onMultipleValueChange", "onPlayAnimationClick"]),
    e.mode !== e.MODE.Animation ? (ie(), ue("div", {
      key: 1,
      class: xe(["live-btn", { "btn-down": e.isLive, "btn-up": !e.isLive }]),
      onClick: t[1] || (t[1] = (...w) => i.liveModeClick && i.liveModeClick(...w))
    }, " 实况 ", 2)) : je("", !0),
    at(y, {
      ref: "TimeBarCanvasRef",
      onePixelTimeUnit: i.props.onePixelTimeUnit,
      mode: e.mode,
      currentTimeStamp: e.datePickerTime,
      onModeChange: i.modeChange,
      onCurrentTimeChange: i.currentTimeChange
    }, np({ _: 2 }, [
      e.mode === e.MODE.Animation ? {
        name: "animation",
        fn: Bt(({ animationProps: w }) => [
          at(m, {
            ref: "TimeAnimationBarRef",
            startTimeStamp: w.startTimeStamp,
            startAnimationTimeStamp: e.startAnimationTimeStamp,
            timeBarWidth: w.timeBarWidth,
            offsetTime: e.offsetTime,
            unitOfMs: w.unitOfMs,
            "loading-percent": i.props.animationLoadingPercent,
            onChange: i.animationTimeChange
          }, null, 8, ["startTimeStamp", "startAnimationTimeStamp", "timeBarWidth", "offsetTime", "unitOfMs", "loading-percent", "onChange"])
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["onePixelTimeUnit", "mode", "currentTimeStamp", "onModeChange", "onCurrentTimeChange"])
  ], 8, fA);
}
const If = /* @__PURE__ */ Tr(uA, [["render", dA], ["__scopeId", "data-v-8aceecd4"]]), mA = {
  install(e) {
    e.component(If.name, If), e.component(To.name, To);
  }
};
export {
  To as TimeBarCanvas,
  If as TimeLine,
  mA as plugin
};
