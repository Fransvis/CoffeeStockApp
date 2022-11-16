import { TabBarService } from  '../tab-bar.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

const TAB_PAGES: any[] = [
    {
        title: 'Discover',
        tab: 'discover',
        icon: 'compass',
        inSidemenu: true,
        inTabBar: false,
        showTabBar: true
    },
    {
        title: 'select',
        tab: 'select',
        icon: 'radio-button-off-outline',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: true
    },
    {
        title: 'selections',
        tab: 'tab3',
        icon: 'triangle',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: true
    },
    {
        title: 'cards',
        tab: 'tab4',
        icon: 'square',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: true
    },
    {
        title: 'account',
        tab: 'tab5',
        icon: 'ellipse',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: true
    }
];

export const TABS_ROOT: string = 'tabs';
export const APP_PAGES: any[] = TAB_PAGES.map((page: any) => {
    page.url = '/' + TABS_ROOT + '/' + page.tab;
    return page;
});

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})

export class TabsPage {
    public readonly tabBarPages: any =
        TAB_PAGES.filter((page: any) => page.inTabBar);
    
    @ViewChild('tabBar', {read: ElementRef, static: false})
    private tabBarRef: ElementRef;

    constructor(private tabBarService: TabBarService) {}

    public ngAfterViewInit(): void {
        const pagesShowingTabBar: Set<string> = new Set<string>(
            TAB_PAGES.filter((page: any) => page.showTabBar)
                .map((page: any) => page.tab));
        this.tabBarService.init(this.tabBarRef, pagesShowingTabBar);
    }
}
