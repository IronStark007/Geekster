const Container = () => {
  let app_id = "0b2d76fc";
  let app_key = "dd4d51733ec880c442e80258b4a49894";
  let q = "chicken";
    return (
      <>
      {fetch(``)
      .then(response => response.json())
      .then(data => console.log(data.hits[0]))};

      </>
    )
  }