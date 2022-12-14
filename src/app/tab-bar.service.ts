import { filter } from 'rxjs/operators';
import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TabBarService {
    private tabBarRef: ElementRef;
    private tabBarTabs: Set<string>;

    constructor(private router: Router) {
        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe((event: RouterEvent) => {
            this.setTabVisibility(event);
        });
    }

    public init(tabBarRef: ElementRef, tabBarTabs: Set<string>): void {
        this.tabBarRef = tabBarRef;
        this.tabBarTabs = tabBarTabs;
    }

    public hideTabBar(): void {
        const display: string = this.tabBarRef.nativeElement.style.display;
        if (display !== 'none') {
            this.tabBarRef.nativeElement.style.display = 'none';
        }
    }

    public showTabBar(): void {
        const display: string =
            this.tabBarRef.nativeElement.style.display;
        if (display !== 'flex') {
            this.tabBarRef.nativeElement.style.display = 'flex';
        }
    }

    private setTabVisibility(event: RouterEvent) {
        const execResult: any = /.*\/([^?]+)/.exec(event.url);
        if (execResult) {
            const lastUrlPart: string = execResult[1];
            if (this.tabBarTabs.has(lastUrlPart)) {
                this.showTabBar();
            } else {
                this.hideTabBar();
            }
        } else {
            this.showTabBar();
        }
    }
}
