"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var fs = require("fs");
// get readline
var readline = require("readline");
var result = 0;
var opponentResult = 0;
var realResult = 0;
// A = X
// B = Y
// C = Z
// A&&X == Rock
// B&&Y == Paper
// C&&Z == Scissors
function getWin(opponent, player) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (opponent === "A" && player === "X" || opponent === "B" && player === "Y" || opponent === "C" && player === "Z") {
                console.log('Tie');
                return [2 /*return*/, "Tie"];
            }
            else if (opponent === 'A' && player === 'Y') {
                return [2 /*return*/, "Win"];
            }
            else if (opponent === 'A' && player === 'Z') {
                return [2 /*return*/, "Loss"];
            }
            else if (opponent === 'B' && player === 'X') {
                return [2 /*return*/, "Loss"];
            }
            else if (opponent === 'B' && player === 'Z') {
                return [2 /*return*/, "Win"];
            }
            else if (opponent === 'C' && player === 'X') {
                return [2 /*return*/, "Win"];
            }
            else if (opponent === 'C' && player === 'Y') {
                return [2 /*return*/, "Loss"];
            }
            else {
                return [2 /*return*/, "Error"];
            }
            return [2 /*return*/];
        });
    });
} // Paper beats Rock, Rock beats Scissors, Scissors beats Paper, fuck it
function processLineByLine() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, _d, rl_1, rl_1_1, line, input, final, e_1_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fileStream = fs.createReadStream('data.txt');
                    rl = readline.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity
                    });
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 9, 10, 15]);
                    _d = true, rl_1 = __asyncValues(rl);
                    _e.label = 2;
                case 2: return [4 /*yield*/, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _e.sent(), _a = rl_1_1.done, !_a)) return [3 /*break*/, 8];
                    _c = rl_1_1.value;
                    _d = false;
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, , 6, 7]);
                    line = _c;
                    input = line.split(' ');
                    switch (input[1]) {
                        case 'Y':
                            result += 2;
                            break;
                        case 'X':
                            result += 1;
                            break;
                        case 'Z':
                            result += 3;
                            break;
                        default:
                            console.log('Error');
                            break;
                    }
                    switch (input[0]) {
                        case 'B':
                            opponentResult += 2;
                            break;
                        case 'A':
                            opponentResult += 1;
                            break;
                        case 'C':
                            opponentResult += 3;
                            break;
                        default:
                            console.log('Error');
                            break;
                    }
                    return [4 /*yield*/, getWin(input[0], input[1])];
                case 5:
                    final = _e.sent();
                    if (final === "Win") {
                        result += 6;
                    }
                    else if (final === "Loss") {
                        opponentResult += 6;
                        // pass
                    }
                    else if (final === "Tie") {
                        opponentResult += 3;
                        result += 3;
                    }
                    else if (final === "Error") {
                        console.log("".concat(input[0], " ").concat(input[1]));
                    }
                    return [3 /*break*/, 7];
                case 6:
                    _d = true;
                    return [7 /*endfinally*/];
                case 7: return [3 /*break*/, 2];
                case 8: return [3 /*break*/, 15];
                case 9:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 15];
                case 10:
                    _e.trys.push([10, , 13, 14]);
                    if (!(!_d && !_a && (_b = rl_1["return"]))) return [3 /*break*/, 12];
                    return [4 /*yield*/, _b.call(rl_1)];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 14: return [7 /*endfinally*/];
                case 15:
                    console.log({ result: result });
                    return [2 /*return*/];
            }
        });
    });
}
processLineByLine()
    .then(function () {
    console.log(result - opponentResult);
});
// Part Two starts here
function getPoint(draw, move) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (move == "Win") {
                switch (draw) {
                    case 'A':
                        // Opponent used Rock, so we use Paper
                        return [2 /*return*/, 2 + 6];
                    case 'B':
                        // Opponent used Paper, so we use Scissors
                        return [2 /*return*/, 3 + 6];
                    case 'C':
                        // Opponent used Scissors, so we use Rock
                        return [2 /*return*/, 1 + 6];
                }
            }
            else if (move == "Loss") {
                switch (draw) {
                    case 'A':
                        // Opponent used Rock, so we use Scissors
                        return [2 /*return*/, 3];
                    case 'B':
                        // Opponent used Paper, so we use Rock
                        return [2 /*return*/, 1];
                    case 'C':
                        // Opponent used Scissors, so we use Paper
                        return [2 /*return*/, 2];
                }
            }
            else if (move == "Tie") {
                switch (draw) {
                    case 'A':
                        // Opponent used Rock, so we use Rock
                        return [2 /*return*/, 1 + 3];
                    case 'B':
                        // Opponent used Paper, so we use Paper
                        return [2 /*return*/, 2 + 3];
                    case 'C':
                        // Opponent used Scissors, so we use Scissors
                        return [2 /*return*/, 3 + 3];
                }
            }
            return [2 /*return*/];
        });
    });
}
function partTwo() {
    var _a, e_2, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, _d, rl_2, rl_2_1, line, input, _e, _f, _g, _h, e_2_1;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    fileStream = fs.createReadStream('data.txt');
                    rl = readline.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity
                    });
                    _j.label = 1;
                case 1:
                    _j.trys.push([1, 15, 16, 21]);
                    _d = true, rl_2 = __asyncValues(rl);
                    _j.label = 2;
                case 2: return [4 /*yield*/, rl_2.next()];
                case 3:
                    if (!(rl_2_1 = _j.sent(), _a = rl_2_1.done, !_a)) return [3 /*break*/, 14];
                    _c = rl_2_1.value;
                    _d = false;
                    _j.label = 4;
                case 4:
                    _j.trys.push([4, , 12, 13]);
                    line = _c;
                    input = line.split(' ');
                    _e = input[1];
                    switch (_e) {
                        case 'Y': return [3 /*break*/, 5];
                        case 'X': return [3 /*break*/, 7];
                        case 'Z': return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 11];
                case 5:
                    _f = realResult;
                    return [4 /*yield*/, getPoint(input[0], 'Tie')];
                case 6:
                    realResult = _f + _j.sent();
                    return [3 /*break*/, 11];
                case 7:
                    _g = realResult;
                    return [4 /*yield*/, getPoint(input[0], 'Loss')];
                case 8:
                    realResult = _g + _j.sent();
                    return [3 /*break*/, 11];
                case 9:
                    _h = realResult;
                    return [4 /*yield*/, getPoint(input[0], 'Win')];
                case 10:
                    realResult = _h + _j.sent();
                    return [3 /*break*/, 11];
                case 11: return [3 /*break*/, 13];
                case 12:
                    _d = true;
                    return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 2];
                case 14: return [3 /*break*/, 21];
                case 15:
                    e_2_1 = _j.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 21];
                case 16:
                    _j.trys.push([16, , 19, 20]);
                    if (!(!_d && !_a && (_b = rl_2["return"]))) return [3 /*break*/, 18];
                    return [4 /*yield*/, _b.call(rl_2)];
                case 17:
                    _j.sent();
                    _j.label = 18;
                case 18: return [3 /*break*/, 20];
                case 19:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 20: return [7 /*endfinally*/];
                case 21: return [2 /*return*/];
            }
        });
    });
}
partTwo()
    .then(function () {
    console.log(realResult);
});
// Q: what is the command for installing node:fs?
// A: npm install @types/node
