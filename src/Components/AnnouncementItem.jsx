function AnnouncementItem({title, message, date}){
    return(
        <div class="bg-amber-50 rounded-lg p-4 mb-3">
          <h4 class="font-semibold">{title}</h4>
          <p>{message}</p>
          <span class="text-sm text-slate-500">{date}</span>
        </div>

    )

}
export default AnnouncementItem;