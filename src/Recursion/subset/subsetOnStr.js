function subset(s, u, i) {
    if(i === s.length) {
        console.log(u);
        return;
    }

    subset(s, u + s.charAt(i), i+1)
    subset(s, u, i+1)
}

subset('abc', '', 0);