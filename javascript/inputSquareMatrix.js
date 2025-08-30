function inputSquareMatrix(n) {
    const matrix = [];
    let k = 1;
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++,k++) {
            const value = k
            row.push(value);
        }
        matrix.push(row);
    }

    return matrix;
}

// Create the matrix
console.log(inputSquareMatrix(3));
