import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { signinDto, signupDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("signup")
    signup(@Body() dto: signupDto) {
        return this.authService.signup(dto);
    };

    @Post("signin")
    signin(@Body() dto: signinDto) {
        return this.authService.signin(dto);
    }
}