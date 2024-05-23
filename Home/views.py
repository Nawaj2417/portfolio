from django.shortcuts import render
from .models import *
# Create your views here.
def index(request):
    post = Introduction.objects.all()
    about = AboutMe.objects.all()
    skill = Skill.objects.all()
    timeline =Timeline.objects.all()
    portfolio =Portfolio.objects.all()
    blog =Blog.objects.all()
    contact = Contact.objects.all()
    education = Education.objects.all()
    context = {
        'post': post,
        'about' : about,
        'skill' : skill,
        'timeline' : timeline,
        'portfolio' :portfolio,
        'blog' : blog,
        'contact' : contact,
        'education':education
    }

    return render(request, 'index.html',context)
