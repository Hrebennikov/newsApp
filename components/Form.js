import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {

   return (
    <View style={gStyle.main}>
      <Formik initialValues={{name: "", anons: "", full: "", img: ""}} onSubmit={(values, action) => {
        addArticle(values);
        action.resetForm();
      }}>
        {(props) => (
            <View>
                <TextInput 
                    style={styles.input}
                    value={props.values.name} 
                    placeholder="Введіть назву" 
                    onChangeText={props.handleChange("name")} 
                />
                <TextInput 
                    style={styles.input}
                    value={props.values.anons} 
                    multiline
                    placeholder="Введіть анонс" 
                    onChangeText={props.handleChange("anons")} 
                />
                <TextInput 
                    style={styles.input}
                    value={props.values.full} 
                    multiline
                    placeholder="Введіть статтю" 
                    onChangeText={props.handleChange("full")} 
                />
                <TextInput 
                    style={styles.inputLast}
                    value={props.values.img} 
                    placeholder="Вкажіть фото" 
                    onChangeText={props.handleChange("img")} 
                />
                <Button style={styles.button} title="Додати" onPress={props.handleSubmit} />
            </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: "silver",
    borderRadius: 5
  },
  inputLast: {
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    padding: 15,
    borderColor: "silver",
    borderRadius: 5
  }
});
