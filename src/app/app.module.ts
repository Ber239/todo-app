import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
/*Auto added by Angular CLI when I did ng g c...*/
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoDataService } from './todo-data.service';
import { Observable } from 'rxjs/Observable';
//import { AlertModule } from 'ngx-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RestServiceCallService } from './rest-service-call.service';

/*NgModules help organize an application into cohesive blocks of functionality.
A class that is adorned with the @NgModule decorator function. It takes a
metadata object that tells Angular how to compile and run module code. It
identifies the module's own components, directives, and pipes, making some of them
public so external components can use them.

@NgModule may hadd service providers to the application dependency injections.*/
@NgModule({
  //Generally the declarations array contains a list of application components,
  //pipes, and directives
  declarations: [
    AppComponent,
    //Auto added by CLI
    //Required to make sure all view templates
    //in the module can use the component
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AlertModule.forRoot(),
    HttpModule
  ],
  providers: [TodoDataService,RestServiceCallService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
