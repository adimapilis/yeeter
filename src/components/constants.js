import { BarChartOutlined, BlockOutlined, BookmarkBorder, CalendarMonthOutlined, CodeOffOutlined, EmojiEmotionsOutlined, FlagOutlined, GifBoxOutlined, Home, ImageOutlined, ListAlt, ListAltOutlined, MailOutline, MoreHoriz, NotificationsNone, PersonAddAlt1Outlined, PersonOutline, RoomOutlined, Tag, VolumeOffOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"

const fillerPic ="https://picsum.photos/200/300"

const makeYeetButtons = [
  {name: "img",
   icon: <ImageOutlined />},
   {name: "gif",
   icon: <GifBoxOutlined />},
   {name: "chart",
   icon: <BarChartOutlined />},
   {name: "emoji",
   icon: <EmojiEmotionsOutlined />},
   {name: "calendar",
   icon: <CalendarMonthOutlined />},
   {name: "location",
   icon: <RoomOutlined />}
]

const yeetPopperMenu =[
  {icon:<PersonAddAlt1Outlined/>,
  text(tag) {return `Follow ${tag}`}},
  {icon:<ListAltOutlined/>,
  text(tag) {return `Add/Remove ${tag} from Lists`}},
  {icon:<VolumeOffOutlined/>,
  text(tag) {return `Mute ${tag}`}},
  {icon:<BlockOutlined/>,
  text(tag) {return `Block ${tag}`}},
  {icon:<CodeOffOutlined/>,
  text() {return `Embed tweet`}},
  {icon:<FlagOutlined/>,
  text() {return `Report Tweet`}}
]

const trendingData = [
  {tag:"#asds", tweets:1005},
  {tag:"#rth", tweets:14353},
  {tag:"#qgrd", tweets:1252},
  {tag:"#rhq", tweets:3426},
  {tag:"#rht", tweets:3452},
  {tag:"#tkt", tweets:92034},
  {tag:"#rwjf", tweets:4723},
  {tag:"#gne", tweets:56785},
]

const iconStyle= [{transform: "scale(1.8)", marginRight:"20px", color:"black"}]

const menuData = [
  {icon: <Home sx={iconStyle} />, label:'Home'},
  {icon: <Tag sx={iconStyle}/>, label:'Explore'},
  {icon: <Badge badgeContent={4} color="primary" sx={{'& .MuiBadge-badge':{right:"20px"}}}><NotificationsNone sx={iconStyle}/></Badge>, label:'Notifications'},
  {icon: <MailOutline sx={iconStyle}/>, label:'Messages'},
  {icon: <BookmarkBorder sx={iconStyle}/>, label:'Bookmarks'},
  {icon: <ListAlt sx={iconStyle}/>, label:'Lists'},
  {icon: <PersonOutline sx={iconStyle}/>, label:'Profile'},
  {icon: <MoreHoriz sx={iconStyle}/>, label:'More'},
]

const toFollowData = [
  {name:"DuckDuckGo", username:"@asd", img:"https://picsum.photos/200/300"},
  {name:"#rth", username:"@fdhf", img:"https://picsum.photos/200/300"},
  {name:"#qgrd", username:"@tujw", img:"https://picsum.photos/200/300"},
  {name:"#rhq", username:"@fhb4", img:"https://picsum.photos/200/300"},
  {name:"#rht", username:"@ggrsdg", img:"https://picsum.photos/200/300"},
  {name:"#tkt", username:"@he5t1", img:"https://picsum.photos/200/300"},
  {name:"#rwjf", username:"@fdsnsfn", img:"https://picsum.photos/200/300"},
  {name:"#gne", username:"@gnfsnfs", img:"https://picsum.photos/200/300"},
]

const linkData =["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility", "Ads info", "More"]

export { toFollowData, trendingData, linkData,makeYeetButtons, yeetPopperMenu, menuData, fillerPic }

