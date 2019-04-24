const add = text => {
    return { type: 'ADD', text: text }
};

const del = id => {
    return { type: 'DLT', id: id }
};

const cpl = id => {
    return { type: 'COMPLETE', id: id }
};

const edt = (text, id) => {
    return { type: 'EDIT', text: text, id: id }
};

export {add,del,cpl,edt};
