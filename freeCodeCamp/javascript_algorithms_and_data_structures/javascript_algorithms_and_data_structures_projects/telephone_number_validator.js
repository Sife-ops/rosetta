function telephoneCheck(str) {
    const telephoneRes = [
        /^1 \(\d{3}\) \d{3}-\d{4}$/,
        /^1 \d{3} \d{3} \d{4}$/,
        /^1 \d{3}-\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,
        /^\d{10}$/,
        /^\d{3}-\d{3}-\d{4}$/
    ]

    return telephoneRes.some(re => re.test(str))
}

console.log("===== tests =====");
const qsAndAs = [

    {q: telephoneCheck("1 555 555 5555"), a: true},
    {q: telephoneCheck("1 456 789 4444"), a: true},
    {q: telephoneCheck("555-555-5555"), a: true},
    {q: telephoneCheck("(555)555-5555"), a: true},
    {q: telephoneCheck("1(555)555-5555"), a: true},
    {q: telephoneCheck("1 555-555-5555"), a: true},
    {q: telephoneCheck("1 (555) 555-5555"), a: true},
    {q: telephoneCheck("5555555555"), a: true},
    {q: telephoneCheck("555-5555"), a: false},
    {q: telephoneCheck("5555555"), a: false},
    {q: telephoneCheck("1 555)555-5555"), a: false},
    {q: telephoneCheck("123**&!!asdf#"), a: false},
    {q: telephoneCheck("55555555"), a: false},
    {q: telephoneCheck("(6054756961)"), a: false},
    {q: telephoneCheck("2 (757) 622-7382"), a: false},
    {q: telephoneCheck("0 (757) 622-7382"), a: false},
    {q: telephoneCheck("-1 (757) 622-7382"), a: false},
    {q: telephoneCheck("2 757 622-7382"), a: false},
    {q: telephoneCheck("10 (757) 622-7382"), a: false},
    {q: telephoneCheck("27576227382"), a: false},
    {q: telephoneCheck("(275)76227382"), a: false},
    {q: telephoneCheck("2(757)6227382"), a: false},
    {q: telephoneCheck("2(757)622-7382"), a: false},
    {q: telephoneCheck("555)-555-5555"), a: false},
    {q: telephoneCheck("(555-555-5555"), a: false},
    {q: telephoneCheck("(555)5(55?)-5555"), a: false},
    {q: telephoneCheck("55 55-55-555-5"), a: false}

]

qsAndAs.forEach(({q,a}) => {
    if (q === a) {
        result = "OOO PASS"
    } else {
        result = "XXX FAIL"
    }
    console.log(result + " | " + q + " | " + a);

})










