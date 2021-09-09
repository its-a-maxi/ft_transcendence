import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void
	{
		this.showUsers()
		
	}

	showUsers()
	{
		this.authService.showAllUsers()
			.then(res => res.data.map(obj => console.log(obj)))
	}

	getPlay()
	{
		if (this.authService.statusLogin())
			this.router.navigate(['/game'])
		else
			this.router.navigate(['/login'])
	}
}
