import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Form} from "react-bootstrap";
import { v4 as uuid } from "uuid";


export default function ModalFormCreate({addItem}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [item, setItem] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        imageURL: ""
    });

    function handleItemInputChange(e) {
        const newData={...item}
        newData[e.target.id] = e.target.value
        setItem(newData)
    }

    function submit(e) {
        e.preventDefault();
        addItem({...item, id: uuid()});
        setItem({...item, name: "", description: "", price: "", imageURL: ""});
        handleClose()
    }

    const style = {
        marginBottom: 10,
        marginTop: 10
    };

    return (
        <>
            <Button className="shadow-2xl btn-green" variant="contained" color="primary" style={{margin: 20, float: 'right'}} onClick={handleClickOpen}>
                Add new item
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Form onSubmit={(e) => submit(e)}>
                    <DialogTitle id="form-dialog-title">Add new item</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, describe the item you want to add.
                        </DialogContentText>
                        <TextField
                            onChange={(e) => handleItemInputChange(e)}
                            value={item.name}
                            style={style}
                            margin="dense"
                            id="name"
                            label="Item name"
                            type="text"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(e) => handleItemInputChange(e)}
                            value={item.description}
                            style={style}
                            id="description"
                            label="Item Description"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(e) => handleItemInputChange(e)}
                            value={item.price}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="price"
                            label="Price"
                            type="number"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(e) => handleItemInputChange(e)}
                            value={item.imageURL}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="imageURL"
                            label="Image URL"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" type="submit">
                            Add item
                        </Button>
                    </DialogActions>
                </Form>
            </Dialog>
        </>
    );
}