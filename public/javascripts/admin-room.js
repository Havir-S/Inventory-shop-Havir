
addsums();
function addsums() {
  let summs = document.getElementsByClassName('summon-tab');
  let i;
  let k;
  for(i = 0; i < summs.length; i++) {
    summs[i].addEventListener('click',function() {
      switch(this.innerHTML) {
        case "Mouse":
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-create-tab')[0].style.display = 'block';
        break;
        case 'Mouse - instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-instance-create-tab')[0].style.display = 'block';
        break;
        case 'Keyboard':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-create-tab')[0].style.display = 'block';
        break;
        case 'Keyboard - instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-instance-create-tab')[0].style.display = 'block';
        break;
        case 'Shop':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('shop-create-tab')[0].style.display = 'block';
        break;
      }
    });
  };
  let btns = document.getElementsByClassName('cud-button');
  for (k = 0; k < btns.length; k++) {
    btns[k].addEventListener('click',function() {
      switch(this.innerHTML) {
        case 'Create Keyboard':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-create-tab')[0].style.display = 'block';
        break;
        case 'Delete Keyboard':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-delete-tab')[0].style.display = 'block';
        break;
        case 'Update Keyboard':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-update-tab')[0].style.display = 'block';
        break;
        case 'Create Mouse':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-create-tab')[0].style.display = 'block';
        break;
        case 'Delete Mouse':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-delete-tab')[0].style.display = 'block';
        break;
        case 'Update Mouse':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-update-tab')[0].style.display = 'block';
        break;
        case 'Create Keyboard Instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-instance-create-tab')[0].style.display = 'block';
        break;
        case 'Delete Keyboard Instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-instance-delete-tab')[0].style.display = 'block';
        break;
        case 'Update Keyboard Instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('keyboard-instance-update-tab')[0].style.display = 'block';
        break;
        case 'Create Mouse Instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-instance-create-tab')[0].style.display = 'block';
        break;
        case 'Delete Mouse Instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-instance-delete-tab')[0].style.display = 'block';
        break;
        case 'Update Mouse Instance':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('mouse-instance-update-tab')[0].style.display = 'block';
        break;
        case 'Create Shop':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('shop-create-tab')[0].style.display = 'block';
        break;
        case 'Delete Shop':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('shop-delete-tab')[0].style.display = 'block';
        break;
        case 'Update Shop':
        for(var j = 0; j < document.getElementsByClassName('admin-menu').length; j++) {
          document.getElementsByClassName('admin-menu')[j].style.display = 'none';
        }
        document.getElementsByClassName('shop-update-tab')[0].style.display = 'block';
        break;
        default:
        break;
      }
    })
  }

}

function submitform(n) {
  let form = document.getElementById(n);
  form.submit();
}
