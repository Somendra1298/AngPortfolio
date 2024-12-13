import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputOtpModule } from 'primeng/inputotp';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { StepperModule } from 'primeng/stepper';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FocusTrapModule } from 'primeng/focustrap';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MeterGroupModule } from 'primeng/metergroup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    AnimateOnScrollModule,
    AutoFocusModule,
    RippleModule,
    FocusTrapModule,
    ProgressSpinnerModule,
    BadgeModule,
    AvatarGroupModule,
    AvatarModule,
    ImageModule,
    CarouselModule,
    ToastModule,
    MessagesModule,
    FileUploadModule,
    TooltipModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DialogModule,
    ToolbarModule,
    TabViewModule,
    ScrollPanelModule,
    StepperModule,
    SplitterModule,
    FieldsetModule,
    DividerModule,
    CardModule,
    AccordionModule,
    TableModule,
    SpeedDialModule,
    ToggleButtonModule,
    SliderModule,
    SelectButtonModule,
    RatingModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    ListboxModule,
    KeyFilterModule,
    InputOtpModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    AutoCompleteModule,
    MenuModule,
    MeterGroupModule
  ],
  exports: [
    ButtonModule,
    AnimateOnScrollModule,
    AutoFocusModule,
    RippleModule,
    FocusTrapModule,
    ProgressSpinnerModule,
    BadgeModule,
    AvatarGroupModule,
    AvatarModule,
    ImageModule,
    CarouselModule,
    ToastModule,
    MessagesModule,
    FileUploadModule,
    TooltipModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DialogModule,
    ToolbarModule,
    TabViewModule,
    ScrollPanelModule,
    StepperModule,
    SplitterModule,
    FieldsetModule,
    DividerModule,
    CardModule,
    AccordionModule,
    TableModule,
    SpeedDialModule,
    ToggleButtonModule,
    SliderModule,
    SelectButtonModule,
    RatingModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    ListboxModule,
    KeyFilterModule,
    InputOtpModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    AutoCompleteModule,
    MenuModule,
    MeterGroupModule
  ],
  providers: [DialogService, DynamicDialogRef, MessageService]
})
export class PrimeNgModule { }
