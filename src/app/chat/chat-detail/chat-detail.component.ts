import { AfterViewChecked, Component, ElementRef } from "@angular/core";

@Component({
    selector: "app-chat-detail",
    templateUrl: "./chat-detail.component.html",
    styleUrls: ["./chat-detail.component.css"],
})
export class ChatDetailComponent implements AfterViewChecked {
    //   @ViewChild("scroller") private feed: ElementRef;

    constructor(public el: ElementRef) {}

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        const scrollPane: any = this.el.nativeElement.querySelector(".chat-feed");
        scrollPane.scrollTop = scrollPane.scrollHeight;
    }
}
