from rest_framework import serializers

from listacofrade.models import Cofradia

class CofradiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cofradia
        fields=('id','name','email','creacion','orden')