var Body = {
  setColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

var Links = {
  setColor: function(color) {
    var aList = document.querySelectorAll('a');
    for (var i = 0; i < aList.length; i++) {
      aList[i].style.color = color;
    }
  }
}

function changeColor(self) {
  if (self.value === 'day') {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = "night";

    Links.setColor('powderblue');
  } else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = "day";

    Links.setColor('Yellow');
  }
}
