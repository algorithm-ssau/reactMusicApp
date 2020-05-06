import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {Routes} from "../routes";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    slider: {
        margin: theme.spacing(2),
        minWidth: 260,
    },
}));

export default function SearchModal(props) {
    const classes = useStyles();
    const [price, setPrice] = useState([0, 10000]);
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    let history = useHistory();

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleSpeciesChange = (event, newValue) => {
        setSpecies(newValue);
    };

    const search = () => {
        const data = {
            name: name,
            species: species.props.value,
            minPrice: price[0],
            maxPrice: price[1]
        };
        props.setData(data);
        history.push(Routes.Main);
        history.push(Routes.Search);
        props.handleClose();
    }

    return (
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h3 id="simple-modal-title">Фильтры поиска</h3>
                    <form>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="name-contains-label">Название</InputLabel>
                            <Input
                                onChange={handleNameChange}
                                labelId="name-contains-label"
                                id="name-contains-id"
                                name="name-contains"
                                placeholder="Название"/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="species-label">Тип</InputLabel>
                            <Select
                                onChange={handleSpeciesChange}
                                labelId="species-label"
                                id="species-select"
                                name="species"
                            >
                                <MenuItem value="guitars">Гитара</MenuItem>
                                <MenuItem value="bass-guitars">Бас-гитара</MenuItem>
                                <MenuItem value="synthesizers">Синтезатор</MenuItem>
                                <MenuItem value="drums">Барабан</MenuItem>
                            </Select>
                        </FormControl>
                        <div className={classes.slider}>
                            <InputLabel id="price-label">Цена</InputLabel>
                            <Slider
                                value={price}
                                max={500000}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                        </div>
                    </form>
                    <Button variant="contained" color="primary" onClick={search}>
                        НАЙТИ
                    </Button>
                </div>
            </Modal>
    );
}
