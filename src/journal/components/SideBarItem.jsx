import { useMemo } from 'react'
import { useDispatch } from "react-redux";
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({title='', body, id, date, imageUrls=[]}) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17)+'...'
            : title
    }, [title])

    const dispatch = useDispatch()

    const onClickNote = () => {
        const note = {
            id,
            title,
            body,
            date,
            imageUrls
        }
        dispatch(setActiveNote(note))
    }

    return (
        <ListItem onClick={onClickNote}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}