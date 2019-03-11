from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView
from rest_framework import authentication,permissions
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend, FilterSet

from listacofrade.models import Cofradia
from .serializers import CofradiaSerializer

#A view of the cofradias sorted by new entries
class CofradiaListView (ListAPIView):
    queryset = Cofradia.objects.all()
    serializer_class = CofradiaSerializer
    filter_backends = (OrderingFilter,)
    ordering = ["orden"]

#A view sorted by date
class CofradiaListDateView (ListAPIView):
    queryset = Cofradia.objects.all()
    serializer_class = CofradiaSerializer
    filter_backends = (OrderingFilter,)
    ordering =["creacion"]

#to create new cofradias
class CofradiaCreateView (CreateAPIView):
    queryset = Cofradia.objects.all()
    serializer_class = CofradiaSerializer

#to delete the cofradia(just whit authentication)
class CofradiadeleteView (DestroyAPIView):
    queryset = Cofradia.objects.all()
    serializer_class = CofradiaSerializer
    #authentication_classes = (authentication.TokenAuthentication,)
    #permission_classes = (permissions.IsAdminUser,)

#to edit one cofradia(just whit authentication)
class CofradiaeditView (UpdateAPIView):
    queryset = Cofradia.objects.all()
    serializer_class = CofradiaSerializer
    #permission_classes = (IsAuthenticated,)
