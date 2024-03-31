/**
 * @param {string} exp
 * @return {boolean}
 */
var parseBoolExpr = function (exp) {
    let stack = [];
    let fprev = 0;
    let tprev = 0;
    let operator = '';
    let curExp = false;
    let fcount = 0;
    let tcount = 0;
    let i = 0;

    while (i < exp.length) {
        if (exp[i] === '!' || exp[i] === '|' || exp[i] === '&') {
            operator = exp[i]
        } else if (exp[i] === 't' || exp[i] === 'f') {
            if (exp[i] === 't') tcount++;
            if (exp[i] === 'f') fcount++;
        } else if (exp[i] === '(') {
            stack.push(operator);
            curExp = false;
            operator = ''
            fprev = fcount;
            tprev = tcount;
            fcount = 0;
            fcount = 0;
        } else if (exp[i] === ')') {
            let sign = stack.pop();

            if (sign === '|') {
                if(tcount) {
                    curExp = true;
                    tprev++;
                } else {
                    curExp = false;
                    fprev++;
                }
            }
            if (sign === '&') {
                if(tcount && !fcount) {
                    curExp = true;
                    tprev++;
                } else {
                    curExp = false;
                    fprev++;
                }
            }
            if (sign === '!') {
                if(tcount) {
                    curExp = false;
                    fprev++;
                } else {
                    curExp = true;
                    tprev++;
                }
            }
            tcount=tprev;
            fcount=fprev;
        } 
        i++
    }
    return curExp
};

parseBoolExpr("|(&(t,f,t),!(t))")