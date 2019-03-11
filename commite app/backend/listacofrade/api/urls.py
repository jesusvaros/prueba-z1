from django.urls import path
from .views import CofradiaListView,CofradiaCreateView,CofradiaeditView,CofradiadeleteView,CofradiaListDateView


urlpatterns = [
    path ('', CofradiaListView.as_view()),
    path ('datesort/', CofradiaListDateView.as_view()),
    path ('create/',CofradiaCreateView.as_view()),
    path ("<int:pk>/update/",CofradiaeditView.as_view()),
    path ('<int:pk>/delete/',CofradiadeleteView.as_view()),
]
