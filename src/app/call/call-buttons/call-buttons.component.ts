import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatThemeService } from '@cometchat/chat-uikit-angular';


@Component({
  selector: 'app-call-buttons',
  templateUrl: './call-buttons.component.html',
  styleUrls: ['./call-buttons.component.css']
})
export class CallButtonsComponent {
  user!:CometChat.User | null;
  ngOnInit(): void {

  }
  constructor(private themeService:CometChatThemeService){
    CometChat.getLoggedinUser().then((user:CometChat.User | null)=>{
      this.user = user
    })
    .catch((error:CometChat.CometChatException)=>{
      console.log(error)
    })
  }
  wrapperStyle = () => {
    return {
      width: "100%",
      height: "100%",
      background: this.themeService.theme.palette.getBackground(),
    }
  }

}
