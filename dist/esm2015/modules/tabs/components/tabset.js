import { Component, ContentChildren, QueryList } from "@angular/core";
import { SuiTabHeader } from "../directives/tab-header";
import { SuiTabContent } from "../directives/tab-content";
import { Tab } from "../classes/tab";
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SuiTabset {
    constructor() {
        this.tabs = [];
        this._barrierCount = 0;
    }
    get activeTab() {
        return this._activeTab;
    }
    // When setting a tab as the currently active tab, it automatically gains
    // `isActive` status (saves littering `isActive = true` everywhere).
    set activeTab(tab) {
        this._activeTab = tab;
        tab.isActive = true;
    }
    ngAfterContentInit() {
        // Fire `internalComponentsUpdated` when the query lists change.
        this._tabHeaders.changes.subscribe(() => this.internalComponentsUpdated());
        this._tabContents.changes.subscribe(() => this.internalComponentsUpdated());
        // Initially load the tabs.
        this.loadTabs();
    }
    // Fires whenever either the tab headers or tab contents query lists update.
    internalComponentsUpdated() {
        // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
        // This is so that both the headers and contents query lists can update before we run code that matches the two up.
        this._barrierCount++;
        if (this._barrierCount === 2) {
            // Reset the barrier so it can be called again.
            this._barrierCount = 0;
            // Update the tabs.
            this.loadTabs();
        }
    }
    // Connects tab headers to tab contents, and creates a tab instance for each pairing.
    loadTabs() {
        // Remove any tabs that no longer have an associated header.
        this.tabs = this.tabs.filter(t => !!this._tabHeaders.find(tH => tH === t.header));
        this._tabHeaders
            // Filter out the loaded headers with attached tab instances.
            .filter(tH => !this.tabs.find(t => t.header === tH))
            .forEach(tH => {
            const content = this._tabContents.find(tC => tC.id === tH.id);
            if (!content) {
                // Error if an associated tab content cannot be found for the given header.
                throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
            }
            // Create a new tab instance for this header & content combo.
            const tab = new Tab(tH, content);
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(() => this.onHeaderActiveChanged(tab));
            // Add the new instance to the list of tabs.
            this.tabs.push(tab);
        });
        // Assign each tab an index (which denotes the order they physically appear in).
        this._tabHeaders
            .forEach((tH, i) => {
            const tab = this.tabs.find(t => t.header === tH);
            if (tab) {
                tab.index = i;
            }
        });
        // Sort the tabs by their index.
        this.tabs.sort((a, b) => a.index - b.index);
        if (!this.activeTab) { // Check if there are no current existing active tabs.
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(t => t === this.activeTab)) { // O'wise check if current active tab has been deleted.
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(() => this.activateClosestTab(this.activeTab));
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    }
    // Fires whenever a tab header's active state is externally changed.
    onHeaderActiveChanged(tab) {
        // If the tab has become activated, but was not previously the active tab:
        if (tab.isActive && this.activeTab !== tab) {
            // Deactivate all of the tabs.
            this.tabs.filter(t => t !== tab).forEach(t => t.isActive = false);
            // Set the currently active tab to this one.
            this.activeTab = tab;
        }
        // If the tab has become deactivated, but was previously the active tab:
        if (!tab.isActive && this.activeTab === tab) {
            // Activate the closest tab to it.
            this.activateClosestTab(tab);
        }
    }
    // Activate the first tab in the set.
    activateFirstTab() {
        this.activeTab = this.tabs[0];
    }
    // Activates the closest available tab to a given one.
    activateClosestTab(tab) {
        let nextAvailable;
        // When the exited tab's index is higher than all available tabs,
        if (tab.index >= this.tabs.length) {
            // Activate the last tab.
            nextAvailable = this.tabs[this.tabs.length - 1];
        }
        // If that didn't work, try the following cases:
        if (!nextAvailable) {
            if (!this.tabs.find(t => t === tab)) { // When the exited tab no longer exists,
                // Replace it with a tab at the same index.
                nextAvailable = this.tabs[tab.index];
            }
            else { // Or if the exited tab still exists,
                // Go to the tab immediately to the left.
                nextAvailable = this.tabs[Math.max(tab.index - 1, 0)];
            }
        }
        // However, if the chosen tab is disabled,
        if (nextAvailable.isDisabled) {
            // Activate the closest available tab to it.
            return this.activateClosestTab(nextAvailable);
        }
        this.activeTab = nextAvailable;
    }
}
SuiTabset.ɵfac = function SuiTabset_Factory(t) { return new (t || SuiTabset)(); };
SuiTabset.ɵcmp = i0.ɵɵdefineComponent({ type: SuiTabset, selectors: [["sui-tabset"]], contentQueries: function SuiTabset_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, SuiTabHeader, true);
        i0.ɵɵcontentQuery(dirIndex, SuiTabContent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._tabHeaders = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._tabContents = _t);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiTabset_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiTabset, [{
        type: Component,
        args: [{
                selector: "sui-tabset",
                template: `<ng-content></ng-content>`
            }]
    }], function () { return []; }, { _tabHeaders: [{
            type: ContentChildren,
            args: [SuiTabHeader, { descendants: true }]
        }], _tabContents: [{
            type: ContentChildren,
            args: [SuiTabContent, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YWJzL2NvbXBvbmVudHMvdGFic2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxNQUFNLE9BQU8sU0FBUztJQTJCbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFqQkQsSUFBVyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQseUVBQXlFO0lBQ3pFLG9FQUFvRTtJQUNwRSxJQUFXLFNBQVMsQ0FBQyxHQUFPO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFVTSxrQkFBa0I7UUFDckIsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJ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dCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItaGVhZGVyXCI7XG5pbXBvcnQgeyBTdWlUYWJDb250ZW50IH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWNvbnRlbnRcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCIuLi9jbGFzc2VzL3RhYlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktdGFic2V0XCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJzZXQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVRhYkhlYWRlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3RhYkhlYWRlcnM6UXVlcnlMaXN0PFN1aVRhYkhlYWRlcj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVRhYkNvbnRlbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF90YWJDb250ZW50czpRdWVyeUxpc3Q8U3VpVGFiQ29udGVudD47XG5cbiAgICAvLyBMaXN0IG9mIGFsbCB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgcHVibGljIHRhYnM6VGFiW107XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAgcHJpdmF0ZSBfYWN0aXZlVGFiOlRhYjtcblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlVGFiKCk6VGFiIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRhYjtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHNldHRpbmcgYSB0YWIgYXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLCBpdCBhdXRvbWF0aWNhbGx5IGdhaW5zXG4gICAgLy8gYGlzQWN0aXZlYCBzdGF0dXMgKHNhdmVzIGxpdHRlcmluZyBgaXNBY3RpdmUgPSB0cnVlYCBldmVyeXdoZXJlKS5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZVRhYih0YWI6VGFiKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIHRpbWVzIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCBpcyBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfYmFycmllckNvdW50Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIEZpcmUgYGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWRgIHdoZW4gdGhlIHF1ZXJ5IGxpc3RzIGNoYW5nZS5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVycy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG4gICAgICAgIHRoaXMuX3RhYkNvbnRlbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZCgpKTtcblxuICAgICAgICAvLyBJbml0aWFsbHkgbG9hZCB0aGUgdGFicy5cbiAgICAgICAgdGhpcy5sb2FkVGFicygpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGVpdGhlciB0aGUgdGFiIGhlYWRlcnMgb3IgdGFiIGNvbnRlbnRzIHF1ZXJ5IGxpc3RzIHVwZGF0ZS5cbiAgICBwcml2YXRlIGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgYXJlIHVzaW5nIGEgJ2NvdW50aW5nIGJhcnJpZXIgb2YgbiA9IDInLCBpLmUuIHRoZSBjb2RlIHdpdGhpbiBvbmx5IHJ1bnMgYWZ0ZXIgdGhlIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2UuXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCBib3RoIHRoZSBoZWFkZXJzIGFuZCBjb250ZW50cyBxdWVyeSBsaXN0cyBjYW4gdXBkYXRlIGJlZm9yZSB3ZSBydW4gY29kZSB0aGF0IG1hdGNoZXMgdGhlIHR3byB1cC5cbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50Kys7XG5cbiAgICAgICAgaWYgKHRoaXMuX2JhcnJpZXJDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJhcnJpZXIgc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFicy5cbiAgICAgICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3RzIHRhYiBoZWFkZXJzIHRvIHRhYiBjb250ZW50cywgYW5kIGNyZWF0ZXMgYSB0YWIgaW5zdGFuY2UgZm9yIGVhY2ggcGFpcmluZy5cbiAgICBwcml2YXRlIGxvYWRUYWJzKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgdGFicyB0aGF0IG5vIGxvbmdlciBoYXZlIGFuIGFzc29jaWF0ZWQgaGVhZGVyLlxuICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gISF0aGlzLl90YWJIZWFkZXJzLmZpbmQodEggPT4gdEggPT09IHQuaGVhZGVyKSk7XG5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVyc1xuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCB0aGUgbG9hZGVkIGhlYWRlcnMgd2l0aCBhdHRhY2hlZCB0YWIgaW5zdGFuY2VzLlxuICAgICAgICAgICAgLmZpbHRlcih0SCA9PiAhdGhpcy50YWJzLmZpbmQodCA9PiB0LmhlYWRlciA9PT0gdEgpKVxuICAgICAgICAgICAgLmZvckVhY2godEggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl90YWJDb250ZW50cy5maW5kKHRDID0+IHRDLmlkID09PSB0SC5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3IgaWYgYW4gYXNzb2NpYXRlZCB0YWIgY29udGVudCBjYW5ub3QgYmUgZm91bmQgZm9yIHRoZSBnaXZlbiBoZWFkZXIuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgW3N1aVRhYkhlYWRlcl0gbXVzdCBoYXZlIGEgcmVsYXRlZCBbc3VpVGFiQ29udGVudF0uXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YWIgaW5zdGFuY2UgZm9yIHRoaXMgaGVhZGVyICYgY29udGVudCBjb21iby5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKHRILCBjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBhbnkgZXh0ZXJuYWwgY2hhbmdlcyBpbiB0aGUgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZS4gRXh0ZXJuYWwgY2hhbmdlcyBhcmUgdHJpZ2dlcmVkIGJ5IHVzZXIgaW5wdXQuXG4gICAgICAgICAgICAgICAgdGFiLmhlYWRlci5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSGVhZGVyQWN0aXZlQ2hhbmdlZCh0YWIpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbmV3IGluc3RhbmNlIHRvIHRoZSBsaXN0IG9mIHRhYnMuXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFzc2lnbiBlYWNoIHRhYiBhbiBpbmRleCAod2hpY2ggZGVub3RlcyB0aGUgb3JkZXIgdGhleSBwaHlzaWNhbGx5IGFwcGVhciBpbikuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0SCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKTtcbiAgICAgICAgICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU29ydCB0aGUgdGFicyBieSB0aGVpciBpbmRleC5cbiAgICAgICAgdGhpcy50YWJzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVUYWIpIHsgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG5vIGN1cnJlbnQgZXhpc3RpbmcgYWN0aXZlIHRhYnMuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBhY3RpdmF0ZSB0aGUgZmlyc3QgYXZhaWxhYmxlIHRhYi5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVGaXJzdFRhYigpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRoaXMuYWN0aXZlVGFiKSkgeyAvLyBPJ3dpc2UgY2hlY2sgaWYgY3VycmVudCBhY3RpdmUgdGFiIGhhcyBiZWVuIGRlbGV0ZWQuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBmaW5kIHRoZSBjbG9zZXN0LlxuICAgICAgICAgICAgLy8gVXNlIGBzZXRUaW1lb3V0YCBhcyB0aGlzIGNhdXNlcyBhICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yIG8nd2lzZS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIodGhpcy5hY3RpdmVUYWIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBFcnJvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRhYnMgaW4gdGhlIHRhYnNldC5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgaGF2ZSBubyB0YWJzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZSBpcyBleHRlcm5hbGx5IGNoYW5nZWQuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBhY3RpdmF0ZWQsIGJ1dCB3YXMgbm90IHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICh0YWIuaXNBY3RpdmUgJiYgdGhpcy5hY3RpdmVUYWIgIT09IHRhYikge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgb2YgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdCAhPT0gdGFiKS5mb3JFYWNoKHQgPT4gdC5pc0FjdGl2ZSA9IGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiB0byB0aGlzIG9uZS5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhYiBoYXMgYmVjb21lIGRlYWN0aXZhdGVkLCBidXQgd2FzIHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICghdGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiID09PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IHRhYiB0byBpdC5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRhYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgZmlyc3QgdGFiIGluIHRoZSBzZXQuXG4gICAgcHVibGljIGFjdGl2YXRlRmlyc3RUYWIoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGVzIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gYSBnaXZlbiBvbmUuXG4gICAgcHVibGljIGFjdGl2YXRlQ2xvc2VzdFRhYih0YWI6VGFiKTp2b2lkIHtcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGU6VGFiIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIGV4aXRlZCB0YWIncyBpbmRleCBpcyBoaWdoZXIgdGhhbiBhbGwgYXZhaWxhYmxlIHRhYnMsXG4gICAgICAgIGlmICh0YWIuaW5kZXggPj0gdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGxhc3QgdGFiLlxuICAgICAgICAgICAgbmV4dEF2YWlsYWJsZSA9IHRoaXMudGFic1t0aGlzLnRhYnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGF0IGRpZG4ndCB3b3JrLCB0cnkgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgaWYgKCFuZXh0QXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFicy5maW5kKHQgPT4gdCA9PT0gdGFiKSkgeyAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiIG5vIGxvbmdlciBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBpdCB3aXRoIGEgdGFiIGF0IHRoZSBzYW1lIGluZGV4LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGFiLmluZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIE9yIGlmIHRoZSBleGl0ZWQgdGFiIHN0aWxsIGV4aXN0cyxcbiAgICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgdGFiIGltbWVkaWF0ZWx5IHRvIHRoZSBsZWZ0LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbTWF0aC5tYXgodGFiLmluZGV4IC0gMSwgMCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSG93ZXZlciwgaWYgdGhlIGNob3NlbiB0YWIgaXMgZGlzYWJsZWQsXG4gICAgICAgIGlmIChuZXh0QXZhaWxhYmxlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gaXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIobmV4dEF2YWlsYWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IG5leHRBdmFpbGFibGU7XG4gICAgfVxufVxuIl19