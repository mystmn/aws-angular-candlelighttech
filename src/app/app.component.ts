import { Component, Inject, PLATFORM_ID } from '@angular/core' 
import { isPlatformBrowser } from '@angular/common' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aws-capstone-serverless' 
  platform: string | undefined 


constructor(@Inject(PLATFORM_ID) private platformId: any) {}

public ngOnInit(): void {
  this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server' 
}
}
