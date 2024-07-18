import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  systemDate: string;
  screenName: string = 'TMM022 - HEADER';

  constructor(private dateService: DateService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.getSystemDate();
    this.formatScreenName();
  }

  private getSystemDate(): void {
    this.dateService.getCurrentDate().subscribe(
      (date: string) => {
        this.systemDate = this.formatDate(date);
        this.logger.info('System date fetched successfully');
      },
      (error) => {
        this.logger.error('Error fetching system date', error);
      }
    );
  }

  private formatDate(date: string): string {
    const dateObj = new Date(date);
    const options = { day: '2-digit', month: 'short', year: 'numeric' } as const;
    return dateObj.toLocaleDateString('en-US', options).toUpperCase();
  }

  private formatScreenName(): void {
    this.screenName = this.screenName.toUpperCase();
    this.logger.info('Screen name formatted successfully');
  }
}
