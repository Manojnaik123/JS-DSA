// topological sorting . we can find this only of the DAG

let vertices = ['a', 'b', 'c', 'd', 'e', 'f'];

let adj = {
    'a': ['d'],
    'f': ['b', 'a'],
    'b': ['d'],
    'd': ['c'],
    'c': [],
    'e': ['f']
};



