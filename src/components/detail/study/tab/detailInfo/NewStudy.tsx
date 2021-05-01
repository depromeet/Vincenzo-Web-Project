import {NewStudyWrapper} from "../../../../../styles/main/BooksStyle";
import {BookStudyContainer, MoreButton, ThisBookBox} from "../../../../main/BooksComponent";

export function NewStudy(): JSX.Element {
    return (
        <NewStudyWrapper>
            <BookStudyContainer />
            <ThisBookBox />
            <MoreButton backgroundColor='#f1f1f3' />
        </NewStudyWrapper>
    )
}
