import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import { Task } from './Task';

export class TaskCategoryItem {
    constructor(id: string, name: string, color: string = "", tasks: Task[] = [], active: boolean = false, icon: string = ""){
        this.id = id
        this.name = name
        this.color = color
        this.tasks = tasks
        this.active = active
        this.icon = icon
    }

    id: string
    name: string = ""
    color: string = ""
    tasks: Task[] = []
    active: boolean
    icon: string

    components: componentsProp = {
        BookmarkBorderIcon: BookmarkBorderIcon,
        LocalOfferOutlinedIcon: LocalOfferOutlinedIcon,
        InboxIcon: InboxIcon
    }
} 

type componentsProp = {
    [key: string]: any
}