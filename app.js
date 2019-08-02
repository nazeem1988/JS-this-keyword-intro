var comments = {};
comments.data = ["Hello", "Hello1", "Hello2"];
comments.print = function () {
    this.data.forEach(function (el) {
        console.log(el);
    })
}