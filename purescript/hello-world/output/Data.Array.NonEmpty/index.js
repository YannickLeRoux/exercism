// Generated by purs version 0.13.8
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Array_NonEmpty_Internal = require("../Data.Array.NonEmpty.Internal/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var unsafeFromArrayF = Unsafe_Coerce.unsafeCoerce;
var unsafeFromArray = Unsafe_Coerce.unsafeCoerce;
var toArray = Unsafe_Coerce.unsafeCoerce;
var unionBy$prime = function (eq) {
    return function (xs) {
        var $39 = Data_Array.unionBy(eq)(toArray(xs));
        return function ($40) {
            return unsafeFromArray($39($40));
        };
    };
};
var union$prime = function (dictEq) {
    return unionBy$prime(Data_Eq.eq(dictEq));
};
var unionBy = function (eq) {
    return function (xs) {
        var $41 = unionBy$prime(eq)(xs);
        return function ($42) {
            return $41(toArray($42));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var unzip = (function () {
    var $43 = Data_Bifunctor.bimap(Data_Tuple.bifunctorTuple)(unsafeFromArray)(unsafeFromArray);
    return function ($44) {
        return $43(Data_Array.unzip(toArray($44)));
    };
})();
var updateAt = function (i) {
    return function (x) {
        var $45 = Data_Array.updateAt(i)(x);
        return function ($46) {
            return unsafeFromArrayF($45(toArray($46)));
        };
    };
};
var zip = function (xs) {
    return function (ys) {
        return unsafeFromArray(Data_Array.zip(toArray(xs))(toArray(ys)));
    };
};
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            return unsafeFromArray(Data_Array.zipWith(f)(toArray(xs))(toArray(ys)));
        };
    };
};
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return unsafeFromArrayF(Data_Array.zipWithA(dictApplicative)(f)(toArray(xs))(toArray(ys)));
            };
        };
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        var $47 = Data_Array.some(dictAlternative)(dictLazy);
        return function ($48) {
            return unsafeFromArrayF($47($48));
        };
    };
};
var snoc$prime = function (xs) {
    return function (x) {
        return unsafeFromArray(Data_Array.snoc(xs)(x));
    };
};
var snoc = function (xs) {
    return function (x) {
        return unsafeFromArray(Data_Array.snoc(toArray(xs))(x));
    };
};
var singleton = function ($49) {
    return unsafeFromArray(Data_Array.singleton($49));
};
var replicate = function (i) {
    return function (x) {
        return unsafeFromArray(Data_Array.replicate(Data_Ord.max(Data_Ord.ordInt)(1)(i))(x));
    };
};
var range = function (x) {
    return function (y) {
        return unsafeFromArray(Data_Array.range(x)(y));
    };
};
var modifyAt = function (i) {
    return function (f) {
        var $50 = Data_Array.modifyAt(i)(f);
        return function ($51) {
            return unsafeFromArrayF($50(toArray($51)));
        };
    };
};
var intersectBy$prime = function (eq) {
    return function (xs) {
        return Data_Array.intersectBy(eq)(toArray(xs));
    };
};
var intersectBy = function (eq) {
    return function (xs) {
        var $52 = intersectBy$prime(eq)(xs);
        return function ($53) {
            return $52(toArray($53));
        };
    };
};
var intersect$prime = function (dictEq) {
    return intersectBy$prime(Data_Eq.eq(dictEq));
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var insertAt = function (i) {
    return function (x) {
        var $54 = Data_Array.insertAt(i)(x);
        return function ($55) {
            return unsafeFromArrayF($54(toArray($55)));
        };
    };
};
var fromFoldable1 = function (dictFoldable1) {
    var $56 = Data_Array.fromFoldable(dictFoldable1.Foldable0());
    return function ($57) {
        return unsafeFromArray($56($57));
    };
};
var fromArray = function (xs) {
    if (Data_Array.length(xs) > 0) {
        return new Data_Maybe.Just(unsafeFromArray(xs));
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [ xs.constructor.name ]);
};
var fromFoldable = function (dictFoldable) {
    var $58 = Data_Array.fromFoldable(dictFoldable);
    return function ($59) {
        return fromArray($58($59));
    };
};
var difference$prime = function (dictEq) {
    return function (xs) {
        return Data_Array.difference(dictEq)(toArray(xs));
    };
};
var cons$prime = function (x) {
    return function (xs) {
        return unsafeFromArray(Data_Array.cons(x)(xs));
    };
};
var fromNonEmpty = function (v) {
    return cons$prime(v.value0)(v.value1);
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_Array_NonEmpty_Internal.bindNonEmptyArray));
var concat = (function () {
    var $60 = Data_Functor.map(Data_Array_NonEmpty_Internal.functorNonEmptyArray)(toArray);
    return function ($61) {
        return unsafeFromArray(Data_Array.concat(toArray($60($61))));
    };
})();
var appendArray = function (xs) {
    return function (ys) {
        return unsafeFromArray(Data_Semigroup.append(Data_Semigroup.semigroupArray)(toArray(xs))(ys));
    };
};
var alterAt = function (i) {
    return function (f) {
        var $62 = Data_Array.alterAt(i)(f);
        return function ($63) {
            return $62(toArray($63));
        };
    };
};
var adaptMaybe = function (f) {
    var $64 = Data_Maybe.fromJust();
    return function ($65) {
        return $64(f(toArray($65)));
    };
};
var head = adaptMaybe(Data_Array.head);
var init = adaptMaybe(Data_Array.init);
var last = adaptMaybe(Data_Array.last);
var tail = adaptMaybe(Data_Array.tail);
var uncons = adaptMaybe(Data_Array.uncons);
var toNonEmpty = function ($66) {
    return (function (v) {
        return new Data_NonEmpty.NonEmpty(v.head, v.tail);
    })(uncons($66));
};
var unsnoc = adaptMaybe(Data_Array.unsnoc);
var adaptAny = function (f) {
    return function ($67) {
        return f(toArray($67));
    };
};
var catMaybes = adaptAny(Data_Array.catMaybes);
var $$delete = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array["delete"](dictEq)(x));
    };
};
var deleteAt = function (i) {
    return adaptAny(Data_Array.deleteAt(i));
};
var deleteBy = function (f) {
    return function (x) {
        return adaptAny(Data_Array.deleteBy(f)(x));
    };
};
var difference = function (dictEq) {
    return function (xs) {
        return adaptAny(difference$prime(dictEq)(xs));
    };
};
var drop = function (i) {
    return adaptAny(Data_Array.drop(i));
};
var dropEnd = function (i) {
    return adaptAny(Data_Array.dropEnd(i));
};
var dropWhile = function (f) {
    return adaptAny(Data_Array.dropWhile(f));
};
var elemIndex = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array.elemIndex(dictEq)(x));
    };
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return adaptAny(Data_Array.elemLastIndex(dictEq)(x));
    };
};
var filter = function (f) {
    return adaptAny(Data_Array.filter(f));
};
var filterA = function (dictApplicative) {
    return function (f) {
        return adaptAny(Data_Array.filterA(dictApplicative)(f));
    };
};
var findIndex = function (x) {
    return adaptAny(Data_Array.findIndex(x));
};
var findLastIndex = function (x) {
    return adaptAny(Data_Array.findLastIndex(x));
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (acc) {
            return adaptAny(Data_Array.foldM(dictMonad)(f)(acc));
        };
    };
};
var foldRecM = function (dictMonadRec) {
    return function (f) {
        return function (acc) {
            return adaptAny(Data_Array.foldRecM(dictMonadRec)(f)(acc));
        };
    };
};
var index = adaptAny(Data_Array.index);
var length = adaptAny(Data_Array.length);
var mapMaybe = function (f) {
    return adaptAny(Data_Array.mapMaybe(f));
};
var partition = function (f) {
    return adaptAny(Data_Array.partition(f));
};
var slice = function (start) {
    return function (end) {
        return adaptAny(Data_Array.slice(start)(end));
    };
};
var span = function (f) {
    return adaptAny(Data_Array.span(f));
};
var take = function (i) {
    return adaptAny(Data_Array.take(i));
};
var takeEnd = function (i) {
    return adaptAny(Data_Array.takeEnd(i));
};
var takeWhile = function (f) {
    return adaptAny(Data_Array.takeWhile(f));
};
var toUnfoldable = function (dictUnfoldable) {
    return adaptAny(Data_Array.toUnfoldable(dictUnfoldable));
};
var unsafeAdapt = function (f) {
    var $68 = adaptAny(f);
    return function ($69) {
        return unsafeFromArray($68($69));
    };
};
var cons = function (x) {
    return unsafeAdapt(Data_Array.cons(x));
};
var insert = function (dictOrd) {
    return function (x) {
        return unsafeAdapt(Data_Array.insert(dictOrd)(x));
    };
};
var insertBy = function (f) {
    return function (x) {
        return unsafeAdapt(Data_Array.insertBy(f)(x));
    };
};
var modifyAtIndices = function (dictFoldable) {
    return function (is) {
        return function (f) {
            return unsafeAdapt(Data_Array.modifyAtIndices(dictFoldable)(is)(f));
        };
    };
};
var nub = function (dictOrd) {
    return unsafeAdapt(Data_Array.nub(dictOrd));
};
var nubBy = function (f) {
    return unsafeAdapt(Data_Array.nubBy(f));
};
var nubByEq = function (f) {
    return unsafeAdapt(Data_Array.nubByEq(f));
};
var nubEq = function (dictEq) {
    return unsafeAdapt(Data_Array.nubEq(dictEq));
};
var reverse = unsafeAdapt(Data_Array.reverse);
var sort = function (dictOrd) {
    return unsafeAdapt(Data_Array.sort(dictOrd));
};
var sortBy = function (f) {
    return unsafeAdapt(Data_Array.sortBy(f));
};
var sortWith = function (dictOrd) {
    return function (f) {
        return unsafeAdapt(Data_Array.sortWith(dictOrd)(f));
    };
};
var updateAtIndices = function (dictFoldable) {
    return function (pairs) {
        return unsafeAdapt(Data_Array.updateAtIndices(dictFoldable)(pairs));
    };
};
var unsafeIndex = function (dictPartial) {
    return adaptAny(Data_Array.unsafeIndex());
};
var toUnfoldable1 = function (dictUnfoldable1) {
    return function (xs) {
        var len = length(xs);
        var f = function (i) {
            return Data_Tuple.Tuple.create(unsafeIndex()(xs)(i))((function () {
                var $38 = i < (len - 1 | 0);
                if ($38) {
                    return new Data_Maybe.Just(i + 1 | 0);
                };
                return Data_Maybe.Nothing.value;
            })());
        };
        return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(f)(0);
    };
};
module.exports = {
    fromArray: fromArray,
    fromNonEmpty: fromNonEmpty,
    toArray: toArray,
    toNonEmpty: toNonEmpty,
    fromFoldable: fromFoldable,
    fromFoldable1: fromFoldable1,
    toUnfoldable: toUnfoldable,
    toUnfoldable1: toUnfoldable1,
    singleton: singleton,
    range: range,
    replicate: replicate,
    some: some,
    length: length,
    cons: cons,
    "cons'": cons$prime,
    snoc: snoc,
    "snoc'": snoc$prime,
    appendArray: appendArray,
    insert: insert,
    insertBy: insertBy,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    unsnoc: unsnoc,
    index: index,
    elemIndex: elemIndex,
    elemLastIndex: elemLastIndex,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    insertAt: insertAt,
    deleteAt: deleteAt,
    updateAt: updateAt,
    updateAtIndices: updateAtIndices,
    modifyAt: modifyAt,
    modifyAtIndices: modifyAtIndices,
    alterAt: alterAt,
    reverse: reverse,
    concat: concat,
    concatMap: concatMap,
    filter: filter,
    partition: partition,
    filterA: filterA,
    mapMaybe: mapMaybe,
    catMaybes: catMaybes,
    sort: sort,
    sortBy: sortBy,
    sortWith: sortWith,
    slice: slice,
    take: take,
    takeEnd: takeEnd,
    takeWhile: takeWhile,
    drop: drop,
    dropEnd: dropEnd,
    dropWhile: dropWhile,
    span: span,
    nub: nub,
    nubBy: nubBy,
    nubEq: nubEq,
    nubByEq: nubByEq,
    union: union,
    "union'": union$prime,
    unionBy: unionBy,
    "unionBy'": unionBy$prime,
    "delete": $$delete,
    deleteBy: deleteBy,
    difference: difference,
    "difference'": difference$prime,
    intersect: intersect,
    "intersect'": intersect$prime,
    intersectBy: intersectBy,
    "intersectBy'": intersectBy$prime,
    zipWith: zipWith,
    zipWithA: zipWithA,
    zip: zip,
    unzip: unzip,
    foldM: foldM,
    foldRecM: foldRecM,
    unsafeIndex: unsafeIndex
};
