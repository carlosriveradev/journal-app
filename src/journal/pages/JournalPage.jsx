import { useDispatch, useSelector } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {

    const dispatch = useDispatch()

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    const { isSaving, active } = useSelector(state => state.journal)

    return (
        <JournalLayout>
            
            {
                (!!active)
                ? <NoteView /> 
                : <NothingSelectedView />
            }
            
            <IconButton
                onClick={onClickNewNote}
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
                disabled={isSaving}
            >
                <AddOutlined />
            </IconButton>

        </JournalLayout>
    )
}
