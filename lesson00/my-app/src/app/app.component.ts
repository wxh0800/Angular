import { Component } from '@angular/core';

// 装饰器函数，用于为该组件指定Angular所需的元数据
@Component({
  selector: 'app-root',  // 组件选择器
  templateUrl: './app.component.html', // 组件模板文件的位置
  styleUrls: ['./app.component.css']  // 组件私有CSS样式表文件的位置
})
export class AppComponent {
  title = 'My Angular learning';
}
