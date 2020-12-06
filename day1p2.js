let recurrA = (array, i) => {
	if (recurrB(array, i, 0))
		return recurrB(array, i, 0)
	else {
        if (i == array.length)
            return undefined
        else
		    return recurrA(array, i+1)
    }
}


let recurrB = (array, i, j) => {
	if (recurrC(array, i, j, 0))
		return recurrC(array, i, j, 0)
	else {
        if (j == array.length)
            return undefined
        else
		    return recurrB(array, i, j+1)
    }
}

let recurrC = (array, i, j, k) => {
    
	if ((array[i] + array[j] + array[k]) === 2020)
		return { i, j, k }
	else {
        if (k == array.length)
            return undefined
        else
		    return recurrC(array, i, j, k+1)
    }
}

recurrA(content, 0)