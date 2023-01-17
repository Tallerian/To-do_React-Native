{
    taskItems.map((item) => {
      return(
      <TouchableOpacity>
       <Task text = {item} />
      </TouchableOpacity>
      )
    })
  }