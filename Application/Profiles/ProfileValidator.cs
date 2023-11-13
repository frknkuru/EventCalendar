using FluentValidation;

namespace Application.Profiles
{

    public class ProfileValidator : AbstractValidator<Profile>
    {
        public ProfileValidator()
        {
            RuleFor(x => x.Username).NotEmpty();
            RuleFor(x => x.Photos).NotEmpty();
            RuleFor(x => x.Image).NotEmpty();
            RuleFor(x => x.DisplayName).NotEmpty();
            RuleFor(x => x.Bio).NotEmpty();
        }
    }
}
