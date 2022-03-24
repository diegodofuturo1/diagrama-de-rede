const tasks = [
    {
        id: 1,
        description: 'A',
        precedence: [],
        days: 2,
        resource: ['Java'],
        coast: 100
    },{
        id: 2,
        description: 'B',
        precedence: ['A'],
        days: 1,
        resource: ['C++','C#'],
        coast: 0
    },{
        id: 3,
        description: 'C',
        precedence: ['B'],
        days: 1,
        resource: ['Delphi','VB'],
        coast: 200
    },{
        id: 4,
        description: 'D',
        precedence: ['B'],
        days: 9,
        resource: ['C#'],
        coast: 50
    },{
        id: 5,
        description: 'E',
        precedence: ['C'],
        days: 2,
        resource: ['PHP','Python'],
        coast: 0
    },{
        id: 6,
        description: 'F',
        precedence: ['E'],
        days: 3,
        resource: ['Java','C#', 'VB'],
        coast: 500
    },{
        id: 7,
        description: 'G',
        precedence: ['F'],
        days: 1,
        resource: ['Ruby','C#', 'Java'],
        coast: 100
    },{
        id: 8,
        description: 'H',
        precedence: ['D','G'],
        days: 2,
        resource: ['VB'],
        coast: 0
    },{
        id: 9,
        description: 'I',
        precedence: ['H'],
        days: 2,
        resource: ['Obj C','PHP', 'JavaScript'],
        coast: 100
    },{
        id: 10,
        description: 'J',
        precedence: ['H'],
        days: 4,
        resource: ['PHP','C++','JavaScript'],
        coast: 0
    },{
        id: 11,
        description: 'K',
        precedence: ['I','J'],
        days: 1,
        resource: ['Java'],
        coast: 200
    },{
        id: 12,
        description: 'L',
        precedence: ['K'],
        days: 3,
        resource: ['C#','Delphi','Pascal','VB'],
        coast: 300
    },{
        id: 13,
        description: 'M',
        precedence: ['K'],
        days: 1,
        resource: ['Pascal','VB','C#'],
        coast: 0
    },{
        id: 14,
        description: 'N',
        precedence: ['M'],
        days: 3,
        resource: ['Delphi','C#','JavaScript'],
        coast: 100
    },{
        id: 15,
        description: 'O',
        precedence: ['L','N'],
        days: 2,
        resource: ['Python'],
        coast: 1000
    },
];

export default tasks;
