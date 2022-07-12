//Tetris Matrix
//Input:
const matrixTest1 = [
    ['F', 'F', 'F', '.'],
    ['.', '.', 'F', '.'],
    ['#', 'F', 'F', '.'],
    ['.', '.', 'F', '#'],
    ['.', '.', 'F', 'F'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.']
];

//Expected Output:
const matrixResult1 = [
    ['.', '.', '.', '.'],
    ['F', 'F', 'F', '.'],
    ['#', '.', 'F', '.'],
    ['.', 'F', 'F', '#'],
    ['.', '.', 'F', '.'],
    ['.', '.', 'F', 'F'],
    ['.', '.', '.', '.']
]
const matrixTest2 = [['F']];

const matrixTest3 = [
    ['#', '#', '#', '#'],
    ['#', 'F', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#']
]


const matrixResult2 = [['F']];

const matrixResult3 = [
    ['#', '#', '#', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', '.', '.', '#'],
    ['#', 'F', '.', '#']
]

function matrixSolver(m){
    console.log(m);
    let map = {};
    map.height = m.length;
    map.width = m[0].length;
    map.obsticles = [];
    map.blocks = [];
    // Destructures 2D array into the block coordinates and obstacle coordinates
    for(let y = 0; y < map.height; y++){
        for(let x = 0; x < map.width; x++){
            if(m[y][x] === 'F'){
                map.blocks.push([x, y]);
            }
            if(m[y][x] === '#'){
                map.obsticles.push([x, y]);
            }
        }
    }
    // Maximum distance the block can move until it hits the edge of the board
    let edgeDistance = Number.POSITIVE_INFINITY;
    // Maximum distance the block can move until the block hits an obsticle
    let legalDistance = Number.POSITIVE_INFINITY;
    for(let block of map.blocks){
        // Checks block for biggest move to edge
        let tempEdgeDistance = map.height - 1 - block[1]; 
        if(tempEdgeDistance < edgeDistance){
            edgeDistance = tempEdgeDistance;
        }
        for(let obs of map.obsticles){
            // Checks if obstacle is in the same column as the block and below the block, 
            if(block[0] === obs[0] && obs[1] > block[1]){
                let tempLegalDistance = obs[1] - block[1] - 1;
                if(tempLegalDistance < legalDistance){
                    legalDistance = tempLegalDistance;
                }
            }
        }
    }
    // Move our block until the edge of the board or until it hits a obstacle
    let distanceToMove = edgeDistance <= legalDistance ? edgeDistance : legalDistance;

    // If we don't have to move any spaces then we can just return the original array
    if(distanceToMove === 0){
        return m;
    }

    for(let block of map.blocks.reverse()){
        m[block[1] + distanceToMove][block[0]] = 'F';
        m[block[1]][block[0]] = '.';
    }
    return m;
}

console.log(matrixSolver(matrixTest3));