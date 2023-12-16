# How to run
```
make sure you select the proper benchmark file and function, located in index.js file

1. git clone https://github.com/svidlak/groupby-benchmark.git
2. cd groupby-benchmark
3. docker build -t group-benchmark 
4. docker run --cpus=1 --memory=512M group-benchmark
```

This repo is a part of my article about different methods to group arrays of objects in Javascript, with some benchmark results:
https://dev.to/svidlak/is-javascript-objectgroupby-worth-the-hype-lets-find-out-48lc

Benchmark results sheet can be found here:
https://docs.google.com/spreadsheets/d/1wDTigLA8mzKvagBgkYKY2u0dZ-DagQ0cbMoZ2hozfaw