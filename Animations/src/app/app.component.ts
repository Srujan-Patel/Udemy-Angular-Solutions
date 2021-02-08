import { style, trigger,state, animate, transition, keyframes, group } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    // divState is a identifier which when placed inside the DOM triggers animation
    trigger('divState', [
      state('normal',style({
        'background-color': 'deeppink',
        transform: 'translateX(0)'
      })),
      state('highlighted',style({
        'background-color': 'darkcyan',
        transform:'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      //Or use alternate syntax, where you use single arrows for different times.
      // transition('highlighted => normal', animate(300))

    ]),
    trigger('wildState', [
      state('normal',style({
        'background-color': 'deeppink',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted',style({
        'background-color': 'green',
        transform:'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'darkcyan',
        transform:'translateX(0px) scale(0.5)'
      })),



      transition('normal => highlighted', animate(300)),
      transition('normal => highlighted', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000,style({
          borderRadius:'50px'
        })),
        animate(500)
      ]) //array allows us to defien different phases in the transition.
      //Or use alternate syntax, where you use single arrows for different times.
      // transition('highlighted => normal', animate(300))

    ]),

    trigger('list1', [
      state('in',style({
        opacity:1,
        'background-color': 'deeppink',
        transform: 'translateX(0)'
      })),
      transition('void => *', [style({
        opacity:0,
        transform:'translateX(-100px)'
      }),animate(300)]),
      //Or use alternate syntax, where you use single arrows for different times.
      // transition('highlighted => normal', animate(300))
      transition('* => void', [
      animate(300, style({
      transform: 'translateX(100px)',
      opacity: 0
      }))
    ]),
    ]),

    trigger('list2', [
      state('in',style({
        opacity:1,
        'background-color': 'deeppink',
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000,keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset:0 //imdediately start

          }),
          style({
            transform: 'translateX(-50px)',
            opacity:0.5,
            offset:0.3 //after percentage of our animation time ie ) 0.3 secs
          }),
          style({
            transform: 'translateX(-20px)',
            opacity:0.5,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset:1 //when the animation gets complete
          })
        ]))
      ]),
      //Or use alternate syntax, where you use single arrows for different times.
      // transition('highlighted => normal', animate(300))
      transition('* => void', [
      group([
        animate(300, style({
          color:'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
            }))
      ])

    ]),
    ]),



  ]
})
export class AppComponent {
  state= 'highlighted';
  wildState= 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate(){
      this.state=='normal'? this.state= 'highlighted': this.state= 'normal';
      this.wildState=='normal'? this.wildState= 'highlighted': this.wildState= 'normal';
    }
    onShrink(){
      this.wildState= 'shrunken';
    }

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item){
      this.list.splice(this.list.indexOf(item),1)
    }

    animationStarted(event){

      console.log(event);
    }
    animationEnded($event){

      console.log(event);
    }

}
