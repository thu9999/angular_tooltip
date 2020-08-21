import { Directive, Input, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { OverlayRef, OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { CustomTooltipComponent } from '../components/custom-tooltip/custom-tooltip.component';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

@Directive({
    selector: '[customTooltip]'
})
export class CustomTooltipDirective {
    @Input() customTooltipContent: string = '';

    private overlayRef: OverlayRef;

    @HostListener( 'mouseenter' ) onMouseEnter() {
        this.renderer.setStyle( this.elRef.nativeElement, 'cursor', 'pointer' );

        const config: OverlayConfig = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
        .flexibleConnectedTo( this.elRef )
        .withPositions( [
            { originX: 'start', originY: 'bottom', overlayX: 'start',  overlayY: 'top', offsetY: 8 }
        ] );
        this.overlayRef = this.overlay.create( config );
        const componentRef = this.overlayRef.attach( new ComponentPortal( CustomTooltipComponent ) );
        componentRef.instance.content = this.customTooltipContent;
    }


    @HostListener( 'mouseleave' ) onMouseLeave() {
        if( this.overlayRef ) {
            this.overlayRef.dispose();
        }
    }

    constructor(
        private elRef: ElementRef,
        private overlay: Overlay,
        private renderer: Renderer2
    ) { }

}
