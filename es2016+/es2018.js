const obj = { foo: 1, bar: 2, baz: 3 };
const { foo, ...r } = obj;

function func({ param1, param2, ...rest }) {
    console.log(`All parameters: ${param1, param2, rest}`);
    return param1 + param2;
}

const value = func({
    param1: obj.foo,
    param2: obj.bar,
    foo: 1,
    bar: 2,
    baz: 3,
});
console.log(value);

/** 리액트 활용 예시
class Parent extends React.Component {
    render() {
        return (
            <Child {...this.props} />
        )
    }
}

class Child extends React.Component {
    render() {
        const { a, b, c } = this.props;

        return (
            <div>
                {a}
                {b}
                {c}
            </div>
        )
    }
}
*/

const REG_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;

const matchObj = REG_DATE.exec("1999-07-12");
console.log(matchObj);

const year = matchObj.groups.year;
const { groups: { month, day } } = matchObj;
console.log(year, month, day);

for (const line of readLinesFromFile(fileName)) {
    console.log(line);
}

(async function () {
    for await (const x of createAsyncIterable(["a", "b"])) {
        console.log(x);
    }
})();

(async function () {
    const asyncIterable = createAsyncIterable(["a", "b"]);
    const asyncIterator = asyncIterable[Symbol.asyncIterator]();

    const iterResult1 = await asyncIterator.next();
    console.log(iterResult1);

    const iterResult2 = await asyncIterator.next();
    console.log(iterResult2);
})();

async function readLines(path) {
    const file = await fileOpen(path);
    try {
        while (!file.EOF) {
            yield await file.readLine();
        }
    } catch (err) {
        console.log(err);
    } finally {
        await file.close();
    }
}

Promise.resolve("hello")
    .then(res => res + " hi")
    .catch(err => console.log(err))
    .finally(val => console.log(val));

